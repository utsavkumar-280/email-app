import { configureStore } from "@reduxjs/toolkit";
import allEmailReducer from "./slice/allEmail.slice";
import favoritesReducer from "./slice/favorites.slice";
import readReducer from "./slice/read.slice";
import unreadReducer from "./slice/unread.slice";
import emailBodyReducer from "./slice/emailBody.slice";

export const store = configureStore({
	reducer: {
		allEmail: allEmailReducer,
		favorites: favoritesReducer,
		read: readReducer,
		unread: unreadReducer,
		emailBody: emailBodyReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
