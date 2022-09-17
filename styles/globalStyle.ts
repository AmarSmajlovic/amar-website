import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './Theme';

export const GlobalStyle = createGlobalStyle<ThemeProps>`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,
body {
  background:${({theme}) => theme.body };
  color:${({theme}) =>  theme.text}
  font-size:16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
}
`