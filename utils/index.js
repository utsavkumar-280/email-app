export const textFormatter = (string) => {
	if (string?.length > 30) {
		const newString = string?.slice(0, 31).concat("...");
		return newString;
	}
	return string;
};

export const dateFormatter = (date) => {
	let actualDate = date.getDate().toString().padStart(2, "0");
	let month = (date.getMonth() + 1).toString().padStart(2, "0");
	let year = date.getFullYear();
	let am_pm = "am";
	let hour = date.getHours();
	if (hour >= 12) {
		am_pm = "pm";
	}
	if (hour == 0) {
		hour = 12;
	}
	if (hour > 12) {
		hour = hour - 12;
	}
	if (hour < 10) {
		hour = "0" + hour;
	}

	let minute = date.getMinutes();
	if (minute < 10) {
		minute = "0" + minute;
	}

	return `${actualDate}/${month}/${year} ${hour}:${minute} ${am_pm}`;
};
