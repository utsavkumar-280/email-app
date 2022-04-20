import { createSlice, createAction } from "@reduxjs/toolkit";

import { readInitialState } from "redux/email.types";
import { Status } from "redux/constant";
import { useAppSelector } from "redux/hooks";

export const loadReadEmails = createAction("read/loadUnreadEmails");

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
	},
});

export default readSlice.reducer;
export const useReadEmail = () => useAppSelector((state) => state.read);
