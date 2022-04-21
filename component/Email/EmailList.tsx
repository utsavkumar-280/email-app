import React from "react";

import EmailCard from "./EmailCard";
import styles from "./email.module.css";
import { Status } from "redux/constant";

const EmailList = ({ isOpen, setIsOpen, emailList, status, type }) => {
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
						type={type}
					/>
				))
			) : (
				<div className={styles.emailListLoading}>{`No ${type} emails`}</div>
			)}
		</div>
	) : (
		<div className={styles.emailListLoading}>Loading...</div>
	);
};

export default EmailList;
