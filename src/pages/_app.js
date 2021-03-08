import { ChakraProvider, theme } from "@chakra-ui/react"
import style from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <div className={style.main}>
        <div className={style.wrapper}>
        <Component {...pageProps} />
        </div>
        </div>
    </ChakraProvider>
  );
}

export default MyApp;
