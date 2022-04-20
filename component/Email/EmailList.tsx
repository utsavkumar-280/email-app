import React from "react";

import EmailCard from "./EmailCard";
import styles from "./email.module.css";
import { dummyData } from "../../utils/data";

const EmailList = ({ isOpen, setIsOpen }) => {
	return (
		<div className={styles.emailListContainer}>
			{dummyData.list.map((data) => (
				<EmailCard data={data} isOpen={isOpen} setIsOpen={setIsOpen} />
			))}
		</div>
	);
};

export default EmailList;
