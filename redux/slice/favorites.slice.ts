import { createSlice, createAction } from "@reduxjs/toolkit";

import { favoritesInitialState } from "redux/email.types";
import { Status } from "redux/constant";
import { useAppSelector } from "redux/hooks";

export const loadFavoriteEmails = createAction("favorites/loadFavoriteEmails");

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
	},
});

export default favoritesSlice.reducer;

export const useFavoritesEmail = () =>
	useAppSelector((state) => state.favorites);
