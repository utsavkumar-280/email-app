import { useState } from "react";
import Layout from "@/component/Layout";
import styles from "../styles/home.module.css";
import EmailBody from "@/component/Email/EmailBody";
import EmailList from "@/component/Email/EmailList";

const Read = () => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<Layout>
			<div className={isOpen ? styles.mainContainer : styles.mainContainerAlt}>
				<EmailList isOpen={isOpen} setIsOpen={setIsOpen} />
				{isOpen && <EmailBody />}
			</div>
		</Layout>
	);
};

export default Read;
