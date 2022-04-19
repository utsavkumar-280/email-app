import styles from "./layout.module.css";
import Header from "../Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainContent}>
				<Header />
				{children}
			</div>
		</div>
	);
};

export default Layout;
