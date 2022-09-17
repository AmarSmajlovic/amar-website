
export type ColorsType = {
  blue:string,
  green:string,
  white: string,
  black:string,
  gray:string
}

export type ThemeType = {
  text: string,
  body:string
}

export interface ThemeProps {
  theme:ThemeType
}

export const colors:ColorsType = {
  white:'#FFF',
  blue:'#0000FF',
  green:'#00FF00',
  black: '#000',
  gray: '#808080'
}


  export const lightTheme:ThemeType = {
      body: colors.white,
      text: colors.gray
  }
  
  export const darkTheme:ThemeType = {
      body: colors.gray,
      text:colors.white
  }
  