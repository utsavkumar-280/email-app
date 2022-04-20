import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./header.module.css";

const pages = [
	{ name: "Unread", route: "/" },
	{ name: "Read", route: "/read" },
	{ name: "Favorites", route: "/favorites" },
];

const Header = () => {
	const { asPath } = useRouter();

	return (
		<header className={styles.mainContainer}>
			<nav className={styles.mainContent}>
				<p className={styles.navText}>Filter By:</p>
				{pages.map((page) => (
					<Link href={page.route} passHref>
						<button
							className={
								asPath === page.route ? styles.activeNavLink : styles.navLink
							}
						>
							<a>{page.name}</a>
						</button>
					</Link>
				))}
			</nav>
		</header>
	);
};

export default Header;
