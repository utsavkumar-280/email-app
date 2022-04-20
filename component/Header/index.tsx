import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./header.module.css";

const Header = () => {
	const { asPath } = useRouter();

	const isHome = asPath === "/";
	const isUnread = asPath === "/unread";
	const isFavorites = asPath === "/favorites";

	console.log({ asPath });
	return (
		<header className={styles.mainContainer}>
			<nav className={styles.mainContent}>
				<p className={styles.navText}>Filter By:</p>
				<Link href="/" passHref>
					<button className={isHome ? styles.activeNavLink : styles.navLink}>
						<a>Unread</a>
					</button>
				</Link>
				<Link href="/read" passHref>
					<button className={isUnread ? styles.activeNavLink : styles.navLink}>
						<a>Read</a>
					</button>
				</Link>

				<Link href="/favorites">
					<button
						className={isFavorites ? styles.activeNavLink : styles.navLink}
					>
						<a>Favorites</a>
					</button>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
