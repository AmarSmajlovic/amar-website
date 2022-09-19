
export type ColorsType = {
  blue:string,
  green:string,
  white: string,
  black:string,
  gray:string,
  lightBlue:string
}

export type ThemeType = {
  text: string,
  body:string,
  primaryButton:{
    text:string,
    bgColor:string,
    border:string
  }
}

export interface ThemeProps {
  theme:ThemeType
}

export const colors:ColorsType = {
  white:'#FFF',
  blue:'#0000FF',
  green:'#00FF00',
  black: '#000',
  gray: '#808080',
  lightBlue: '#ADD8E6'
}


  export const lightTheme:ThemeType = {
      body: colors.white,
      text: colors.gray,
      primaryButton:{
        text:colors.gray,
        border:colors.gray,
        bgColor:colors.white
      }
  }
  
  export const darkTheme:ThemeType = {
      body: colors.gray,
      text:colors.white,
      primaryButton:{
        text:colors.white,
        border:colors.white,
        bgColor:colors.gray
      }
  }
  