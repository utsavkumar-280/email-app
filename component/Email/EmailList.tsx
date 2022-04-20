import React from "react";

import EmailCard from "./EmailCard";
import styles from "./email.module.css";
import { dummyData } from "../../utils/data";
import { useAllEmail } from "redux/slice/allEmail.slice";
import { Status } from "redux/constant";

const EmailList = ({ isOpen, setIsOpen }) => {
	const { allEmailsList, status } = useAllEmail();
	return status === Status.fulfilled ? (
		<div className={styles.emailListContainer}>
			{allEmailsList?.map((data) => (
				<EmailCard
					data={data}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					key={data.id}
				/>
			))}
		</div>
	) : (
		<div className={styles.emailListLoading}>Loading...</div>
	);
};

export default EmailList;
