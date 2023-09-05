import type { AppProps } from "next/app";
import { Navbar } from "../components";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyle from "../styles/GlobalStyle";
import "../styles/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalStyle>
        <Navbar />
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
