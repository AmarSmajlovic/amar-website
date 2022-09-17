import type { AppProps } from "next/app";
import styled from "styled-components";
import { Navbar } from "../components";
import { GlobalStyle } from "../styles";

const Container = styled.div`
  color: red;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
