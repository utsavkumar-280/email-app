import { createSlice, createAction } from "@reduxjs/toolkit";

import { readInitialState } from "redux/email.types";
import { Status } from "redux/constant";
import { useAppSelector } from "redux/hooks";
import { emailCardType } from "../email.types";
import { removeUnreadEmail } from "./unread.slice";

export const loadReadEmails = createAction("read/loadUnreadEmails");
export const addReadEmail = createAction<emailCardType>("read/addReadEmail");

const initialState: readInitialState = {
	readEmailsList: [],
	status: Status.idle,
};

export const readSlice = createSlice({
	name: "read",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadReadEmails, (state, action) => {
			const session = localStorage?.getItem("session_read_emails");

			if (session) {
				const sessionReadEmails = JSON.parse(session);

				state.readEmailsList = sessionReadEmails.readEmailsList;
				state.status = Status.fulfilled;
				console.log("local-read");
			} else {
				state.readEmailsList = [];
				state.status = Status.fulfilled;
			}
		});
		builder.addCase(removeUnreadEmail, (state, action) => {
			const dummyState = [...state.readEmailsList, action.payload];

			const cleanState = [
				...new Set(dummyState.map((a) => JSON.stringify(a))),
			].map((a) => JSON.parse(a));

			console.log({ dummyState, cleanState });

			state.readEmailsList = [...cleanState];
			state.status = Status.fulfilled;

			localStorage?.setItem(
				"session_read_emails",
				JSON.stringify({ readEmailsList: state.readEmailsList })
			);
		});
	},
});

export default readSlice.reducer;
export const useReadEmail = () => useAppSelector((state) => state.read);
