import { createSlice } from "@reduxjs/toolkit";

import { favoritesInitialState } from "redux/email.types";
import { Status } from "redux/constant";

const initialState: favoritesInitialState = {
	favoriteEmailsList: [],
	status: Status.idle,
};

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {},
});

export default favoritesSlice.reducer;
