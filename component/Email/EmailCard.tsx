import React from "react";

import styles from "./email.module.css";
import { textFormatter, dateFormatter } from "../../utils";

const EmailCard = ({ data, isOpen, setIsOpen }) => {
	const date = new Date(data.date);
	const formattedDate = dateFormatter(date);
	const pfp = data.from.name[0].toUpperCase();

	const emailDescription = textFormatter(data.short_description);

	// console.log({ emailDescription, formattedDate });
	return (
		<section className={styles.cardContainer} onClick={() => setIsOpen(true)}>
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
				<p>{formattedDate}</p>
			</article>
		</section>
	);
};

export default EmailCard;
