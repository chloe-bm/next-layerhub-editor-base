import type { AppProps } from "next/app";
import { Provider as LayerhubProvider } from "@layerhub-io/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayerhubProvider>
      <Component {...pageProps} />
    </LayerhubProvider>
  );
}

export default MyApp;
