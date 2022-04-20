import { readInitialState, favoritesInitialState } from "redux/email.types";
import { Status } from "redux/constant";

export const setLocalStorage = (session: string) => {
	localStorage?.setItem(session, JSON.stringify(session));
};

export const getLocalReadEmails = (): readInitialState => {
	if (typeof window !== "undefined") {
		const defaultValues = {
			readEmails: [],
			status: Status.idle,
		};
		return (
			JSON.parse(localStorage?.getItem("session_read_emails")) || defaultValues
		);
	}
};

export const getLocalFavoriteEmails = (): favoritesInitialState => {
	const defaultValues = {
		favoriteEmails: [],
		status: Status.idle,
	};

	if (typeof window !== "undefined") {
		return (
			JSON.parse(localStorage?.getItem("session_favorites_emails")) ||
			defaultValues
		);
	}
};

export const updateLocalReadEmails = (profilePic) => {
	const sessionDetails = JSON.parse(localStorage?.getItem("session"));
	sessionDetails.profilePic = profilePic;
	localStorage?.setItem("session", JSON.stringify(sessionDetails));
};
