import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { emailBodyInitialState } from "redux/email.types";
import { useAppSelector } from "redux/hooks";
import { Status } from "redux/constant";
import { fullEmailType, emailCardType } from "../email.types";
import { EMAIL_BODY_API } from "redux/constant";

export const resetEmailBody = createAction("emailBody/resetEmailBody");

export const loadEmailBody = createAsyncThunk(
	"emailBody/loadEmailBody",
	async (
		{ id, from, date, subject, short_description }: emailCardType,
		{ rejectWithValue }
	) => {
		try {
			const {
				data: { body },
			} = await axios({
				method: "GET",
				url: `${EMAIL_BODY_API}${id}`,
			});

			const mainEmail = { id, from, date, subject, short_description, body };

			return mainEmail as fullEmailType;
		} catch (error) {
			const message = error.response.data.message;
			return rejectWithValue(message);
		}
	}
);

const initialState: emailBodyInitialState = {
	currentEmailBody: {},
	status: Status.idle,
};

export const emailBodySlice = createSlice({
	name: "emailBody",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadEmailBody.pending, (state, action) => {
			state.status = Status.pending;
		});
		builder.addCase(loadEmailBody.rejected, (state, action) => {
			state.status = Status.rejected;
		});
		builder.addCase(loadEmailBody.fulfilled, (state, action) => {
			state.currentEmailBody = action.payload;
			state.status = Status.fulfilled;
		});
		builder.addCase(resetEmailBody, (state, action) => {
			state.currentEmailBody = {};
			state.status = Status.idle;
		});
	},
});

export default emailBodySlice.reducer;
export const useEmailBody = () => useAppSelector((state) => state.emailBody);
