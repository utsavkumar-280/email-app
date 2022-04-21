import React from "react";

import styles from "./email.module.css";
import { textFormatter, dateFormatter } from "../../utils";
import { useAppDispatch } from "redux/hooks";
import { loadEmailBody } from "redux/slice/emailBody.slice";
import { emailCardType } from "redux/email.types";
import { useFavoritesEmail } from "redux/slice/favorites.slice";

const EmailCard = ({ data, isOpen, setIsOpen }) => {
	const dispatch = useAppDispatch();
	const date = new Date(data.date);
	const formattedDate = dateFormatter(date);
	const pfp = data.from.name[0].toUpperCase();

	const emailDescription = textFormatter(data.short_description);
	const clickHandler = function () {
		setIsOpen(true);
		dispatch(loadEmailBody({ ...data }));
	};

	const { favoriteEmailsList } = useFavoritesEmail();
	const isAlreadyFavorite = favoriteEmailsList.find(
		(email: emailCardType) => email?.id === data?.id
	);
	console.log({ isAlreadyFavorite });

	return (
		<section className={styles.cardContainer} onClick={clickHandler}>
			<section className={styles.cardImgContainer}>
				<div>{pfp}</div>
			</section>

			<article className={styles.cardInfo}>
				<p>
					From:{" "}
					<span
						className={styles.infoContent}
					>{`${data.from.name} <${data.from.email}>`}</span>
				</p>
				<p>
					Subject: <span className={styles.infoContent}>{data.subject}</span>
				</p>
				<p className={styles.infoDescription}>
					{isOpen ? emailDescription : data.short_description}
				</p>
				<div style={{ display: "flex" }}>
					<p>{formattedDate}</p>
					{isAlreadyFavorite && (
						<p
							style={{
								color: "var(--accentColor)",
								fontWeight: "700",
								marginLeft: "1rem",
							}}
						>
							Favorite
						</p>
					)}
				</div>
			</article>
		</section>
	);
};

export default EmailCard;
