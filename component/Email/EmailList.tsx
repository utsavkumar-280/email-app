import React from "react";

import EmailCard from "./EmailCard";
import styles from "./email.module.css";
import { dummyData } from "../../utils/data";

import { Status } from "redux/constant";

const EmailList = ({ isOpen, setIsOpen, emailList, status }) => {
	console.log({ emailList, status });
	return status === Status.fulfilled ? (
		<div className={styles.emailListContainer}>
			{emailList?.length !== 0 ? (
				emailList?.map((data) => (
					<EmailCard
						data={data}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						key={data.id}
					/>
				))
			) : (
				<div className={styles.emailListLoading}>No emails</div>
			)}
		</div>
	) : (
		<div className={styles.emailListLoading}>Loading...</div>
	);
};

export default EmailList;
