import { createSlice, createAction } from "@reduxjs/toolkit";

import { favoritesInitialState, emailCardType } from "redux/email.types";
import { Status } from "redux/constant";
import { useAppSelector } from "redux/hooks";

export const loadFavoriteEmails = createAction("favorites/loadFavoriteEmails");

export const addFavoriteEmail = createAction<emailCardType>(
	"favorites/addFavoriteEmail"
);
export const removeFavoriteEmail = createAction<emailCardType>(
	"favorites/removeFavoriteEmail"
);

const initialState: favoritesInitialState = {
	favoriteEmailsList: [],
	status: Status.idle,
};

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadFavoriteEmails, (state, action) => {
			const session = localStorage?.getItem("session_favorite_emails");

			if (session) {
				const sessionFavoriteEmails = JSON.parse(session);

				state.favoriteEmailsList = sessionFavoriteEmails.favoriteEmailsList;
				state.status = Status.fulfilled;
				console.log("local-favorite");
			} else {
				state.favoriteEmailsList = [];
				state.status = Status.fulfilled;
			}
		});
		builder.addCase(addFavoriteEmail, (state, action) => {
			console.log("added favorite");
			const dummyState = [...state.favoriteEmailsList, action.payload];

			const cleanState = [
				...new Set(dummyState.map((a) => JSON.stringify(a))),
			].map((a) => JSON.parse(a));

			console.log({ dummyState, cleanState });

			state.favoriteEmailsList = [...cleanState];
			state.status = Status.fulfilled;

			localStorage?.setItem(
				"session_favorite_emails",
				JSON.stringify({ favoriteEmailsList: state.favoriteEmailsList })
			);
		});
		builder.addCase(removeFavoriteEmail, (state, action) => {
			console.log("removed favorite");
			const mainEmail = action?.payload;

			let dummyState = [
				...new Set(state?.favoriteEmailsList.map((a) => JSON.stringify(a))),
			].map((a) => JSON.parse(a));

			const cleanState = dummyState.filter(
				(email) => email.id !== mainEmail.id
			);

			console.log({ dummyState, cleanState });

			state.favoriteEmailsList = [...cleanState];
			state.status = Status.fulfilled;

			localStorage?.setItem(
				"session_favorite_emails",
				JSON.stringify({ favoriteEmailsList: state.favoriteEmailsList })
			);
		});
	},
});

export default favoritesSlice.reducer;

export const useFavoritesEmail = () =>
	useAppSelector((state) => state.favorites);
