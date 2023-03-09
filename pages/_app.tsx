import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import theme from "../utils";
import { Provider } from "../context/context";
import { prefix } from "../config/config";
import "@styles/styles.scss";
import "antd/dist/antd.css";
import "animate.css/animate.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={prefix}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
