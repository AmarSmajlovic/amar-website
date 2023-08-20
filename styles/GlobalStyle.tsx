import React from "react";
import { Global, css } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}

const GlobalStyle = ({ children }: Props) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
          html,
          body {
            font-size: 16px;
            scroll-behavior: smooth;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          html {
            /* overflow: scroll; */
            /* scroll-snap-type: y mandatory; */
          }
        `}
      />
      {children}
    </>
  );
};

export default GlobalStyle;
