import { createSlice, createAction } from "@reduxjs/toolkit";

import { unreadInitialState } from "redux/email.types";
import { useAppSelector } from "redux/hooks";
import { Status } from "redux/constant";
import { loadEmails } from "./allEmail.slice";
import { emailCardType } from "../email.types";

export const addUnreadEmail = createAction("unread/addUnreadEmail");

const initialState: unreadInitialState = {
	unreadEmailsList: [],
	status: Status.idle,
};

export const unreadSlice = createSlice({
	name: "unread",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadEmails.fulfilled, (state, action) => {
			const session = localStorage?.getItem("session_unread_emails");

			if (session) {
				const sessionUnreadEmails = JSON.parse(session);

				state.unreadEmailsList = sessionUnreadEmails.unreadEmailsList;
				state.status = Status.fulfilled;
			} else {
				state.unreadEmailsList = action.payload as emailCardType[];
				state.status = Status.fulfilled;

				localStorage?.setItem(
					"session_unread_emails",
					JSON.stringify({ unreadEmailsList: state.unreadEmailsList })
				);
			}
		});
		builder.addCase(addUnreadEmail, (state, action) => {
			state.unreadEmailsList = [...state.unreadEmailsList, action.payload];
		});
	},
});

export default unreadSlice.reducer;
export const useUnreadEmail = () => useAppSelector((state) => state.unread);
