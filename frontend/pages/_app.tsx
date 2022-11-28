import "../styles/globals.css";
import "../styles/index.css";
import "../styles/agents.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import SSRProvider from "react-bootstrap/SSRProvider";
import Header from "../components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SSRProvider>
        <Header />
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}
