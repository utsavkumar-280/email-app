import { useState } from "react";

import Layout from "@/component/Layout";
import styles from "../styles/home.module.css";
import EmailBody from "@/component/Email/EmailBody";
import EmailList from "@/component/Email/EmailList";
import { useUnreadEmail } from "redux/slice/unread.slice";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { unreadEmailsList, status } = useUnreadEmail();

	return (
		<Layout>
			<div className={isOpen ? styles.mainContainer : styles.mainContainerAlt}>
				<EmailList
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					emailList={unreadEmailsList}
					status={status}
					type="unread"
				/>
				{isOpen && <EmailBody setIsOpen={setIsOpen} />}
			</div>
		</Layout>
	);
};

export default Home;
