import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useAppDispatch } from "redux/hooks";
import { loadEmails } from "redux/slice/allEmail.slice";

const CustomApp = ({ Component, pageProps }: AppProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(loadEmails());
	}, []);
	return <Component {...pageProps} />;
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<CustomApp Component={Component} {...pageProps} />
		</Provider>
	);
}

export default MyApp;
