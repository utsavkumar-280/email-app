import { configureStore } from "@reduxjs/toolkit";
import allEmailReducer from "./slice/allEmail.slice";
import favoritesReducer from "./slice/favorites.slice";
import readReducer from "./slice/read.slice";

export const store = configureStore({
	reducer: {
		allEmail: allEmailReducer,
		favorites: favoritesReducer,
		read: readReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
