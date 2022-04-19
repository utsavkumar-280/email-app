import { configureStore } from "@reduxjs/toolkit";
import allEmailReducer from "./slice/allEmail.slice";
export const store = configureStore({
	reducer: {
		allEmail: allEmailReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
