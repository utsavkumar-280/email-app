export type emailCardType = {
	id: string;
	from: {
		email: string;
		name: string;
	};
	date: number;
	subject: string;
	short_description: string;
};

export type emailBodyType = {
	id: string;
	body: string;
};

export type fullEmailType = {
	id: string;
	from: {
		email: string;
		name: string;
	};
	date: number;
	subject: string;
	short_description: string;
	body: string;
};

export type allEmailInitialState = {
	allEmailsList: emailCardType[] | [];
	status: string;
};

export type favoritesInitialState = {
	favoriteEmailsList: emailCardType[] | [];
	status: string;
};

export type readInitialState = {
	readEmailsList: emailCardType[] | [];
	status: string;
};
