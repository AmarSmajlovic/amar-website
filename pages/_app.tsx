import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Navbar } from "../components";
import { Container, GlobalStyle, lightTheme, darkTheme } from "../styles";
import useDarkMode from "use-dark-mode";

function MyApp({ Component, pageProps }: AppProps) {
  const darkmode = useDarkMode(true);

  return (
    <ThemeProvider theme={darkmode.value ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar toggleTheme={darkmode.toggle} />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
