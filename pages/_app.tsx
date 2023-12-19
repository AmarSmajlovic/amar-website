import type { AppProps } from "next/app";
import { Navbar } from "../components";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyle from "../styles/GlobalStyle";
import "../styles/styles.css";
import "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import { Roboto } from "next/font/google";

const inter = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalStyle>
        <main className={inter.className}>
          <Navbar />
          <Component {...pageProps} />
        </main>
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
