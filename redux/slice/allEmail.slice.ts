import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { allEmailInitialState } from "redux/email.types";
import { Status } from "redux/constant";
import { EMAIL_LIST_API } from "redux/constant";
import { useAppSelector } from "redux/hooks";
import { emailCardType } from "../email.types";

export const loadEmails = createAsyncThunk(
	"allEmail/loadEmails",
	async (_, { rejectWithValue }) => {
		try {
			const {
				data: { list },
			} = await axios({
				method: "GET",
				url: `${EMAIL_LIST_API}`,
			});

			return list as emailCardType[];
		} catch (error) {
			const message = error.response.data.message;
			return rejectWithValue(message);
		}
	}
);

const initialState: allEmailInitialState = {
	allEmailsList: [],
	status: Status.idle,
};

export const allEmailSLice = createSlice({
	name: "allEmail",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadEmails.pending, (state, action) => {
			state.status = Status.pending;
		});
		builder.addCase(loadEmails.fulfilled, (state, action) => {
			state.allEmailsList = action.payload as emailCardType[];
			state.status = Status.fulfilled;
		});
		builder.addCase(loadEmails.rejected, (state, action) => {
			state.status = Status.rejected;
		});
	},
});

export default allEmailSLice.reducer;
export const useAllEmail = () => useAppSelector((state) => state.allEmail);
