import { createSlice } from "@reduxjs/toolkit";

import { readInitialState } from "redux/email.types";
import { Status } from "redux/constant";

const initialState: readInitialState = {
	readEmailsList: [],
	status: Status.idle,
};

export const readSlice = createSlice({
	name: "read",
	initialState,
	reducers: {},
});

export default readSlice.reducer;
