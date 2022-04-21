import React, { useEffect } from "react";

import styles from "./email.module.css";
import { dateFormatter } from "../../utils";
import { useEmailBody, resetEmailBody } from "redux/slice/emailBody.slice";

import {
	useFavoritesEmail,
	addFavoriteEmail,
	removeFavoriteEmail,
} from "redux/slice/favorites.slice";
import { fullEmailType, emailCardType } from "redux/email.types";
import { useAppDispatch } from "redux/hooks";
import { Status } from "redux/constant";

const EmailBody = ({ setIsOpen }) => {
	const { currentEmailBody, status } = useEmailBody();
	const mainEmailBody = currentEmailBody as fullEmailType;

	const date = new Date(mainEmailBody?.date);
	const formattedDate = dateFormatter(date);
	const pfp = mainEmailBody?.from?.name[0].toUpperCase();

	const dispatch = useAppDispatch();
	const { favoriteEmailsList } = useFavoritesEmail();

	useEffect(() => {
		return () => {
			dispatch(resetEmailBody());
			console.log("hello re-render");
		};
	}, []);

	const emailCard = {
		id: mainEmailBody?.id,
		from: {
			email: mainEmailBody?.from?.email,
			name: mainEmailBody?.from?.name,
		},
		date: mainEmailBody?.date,
		subject: mainEmailBody?.subject,
		short_description: mainEmailBody?.short_description,
	};

	const isAlreadyFavorite = favoriteEmailsList.find(
		(email: emailCardType) => email?.id === emailCard.id
	);
	console.log({ isAlreadyFavorite });

	const favoriteHandler = function () {
		if (isAlreadyFavorite) {
			dispatch(removeFavoriteEmail({ ...emailCard }));
			return;
		}

		dispatch(addFavoriteEmail({ ...emailCard }));
	};

	return status === Status.fulfilled ? (
		<div className={styles.emailBodyContainer}>
			<section className={styles.emailBodyContent}>
				<section className={styles.emailImgContainer}>
					<div>{pfp}</div>
				</section>

				<article className={styles.emailInfo}>
					<div className={styles.emailBodyHeadContainer}>
						<h1 className={styles.emailBodyHead}>{mainEmailBody?.subject}</h1>
						<div className={styles.emailCtaContainer}>
							<button
								className={
									isAlreadyFavorite ? styles.emailCtaActive : styles.emailCta
								}
								onClick={favoriteHandler}
							>
								{isAlreadyFavorite
									? "Remove from Favorites"
									: "	Mark as Favorite"}
							</button>
							<button
								className={styles.emailCta}
								onClick={() => setIsOpen(false)}
							>
								Close
							</button>
						</div>
					</div>

					<p>{formattedDate}</p>
					<div
						dangerouslySetInnerHTML={{ __html: mainEmailBody?.body }}
						className={styles.emailBodyText}
					/>
				</article>
			</section>
		</div>
	) : (
		<div className={styles.emailBodyContainer}>
			<section className={styles.emailBodyLoading}>
				<h2>Loading...</h2>
			</section>
		</div>
	);
};

export default EmailBody;
