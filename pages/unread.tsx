import Layout from "@/component/Layout";
import styles from "../styles/home.module.css";

const Unread = () => {
	return (
		<Layout>
			<div className={styles.mainContainer}>Unread emails</div>
		</Layout>
	);
};

export default Unread;
