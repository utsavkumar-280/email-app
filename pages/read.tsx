import { useState } from "react";
import Layout from "@/component/Layout";
import styles from "../styles/home.module.css";
import EmailBody from "@/component/Email/EmailBody";
import EmailList from "@/component/Email/EmailList";
import { useReadEmail } from "redux/slice/read.slice";

const Read = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { readEmailsList, status } = useReadEmail();

	return (
		<Layout>
			<div className={isOpen ? styles.mainContainer : styles.mainContainerAlt}>
				<EmailList
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					emailList={readEmailsList}
					status={status}
				/>
				{isOpen && <EmailBody setIsOpen={setIsOpen} />}
			</div>
		</Layout>
	);
};

export default Read;
