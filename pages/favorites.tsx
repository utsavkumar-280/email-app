import { useState } from "react";
import Layout from "@/component/Layout";
import styles from "../styles/home.module.css";
import EmailBody from "@/component/Email/EmailBody";
import EmailList from "@/component/Email/EmailList";
import { useFavoritesEmail } from "redux/slice/favorites.slice";

const Favorites = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { favoriteEmailsList, status } = useFavoritesEmail();
	return (
		<Layout>
			<div className={isOpen ? styles.mainContainer : styles.mainContainerAlt}>
				<EmailList
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					emailList={favoriteEmailsList}
					status={status}
					type="favorite"
				/>
				{isOpen && <EmailBody setIsOpen={setIsOpen} />}
			</div>
		</Layout>
	);
};

export default Favorites;
