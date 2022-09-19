import styled, { css } from "styled-components";
import {colors, ThemeType} from './Theme';


interface Props{
    size?:"sm" | "md" | "lg";
    variant?: "primary" | "secondary";
    bolder?:boolean;
}

const renderVariant = (variant:string | undefined,theme:ThemeType) => {
    switch (variant) {
        case "primary":
        return css`
        border:3px solid ${theme.primaryButton.border};
        background-color:${theme.primaryButton.bgColor};
  color:${theme.primaryButton.text};
        `
      case "secondary":
        return css`
        background-color: ${colors.gray};
        color:${colors.green};
        `
        default:
            return css`
            background-color: ${colors.lightBlue};
      color:${colors.white};
            `
    }
}

export const Button = styled.button<Props>`
outline:none;
border:none;
font-size:1rem;
font-weight:${({bolder}) => bolder ? 'bold' : undefined};
cursor:pointer;
    border-radius:1.2rem;
    ${({ size }) =>
    size == 'sm' && css`
    height:30px;
    width:100px;
    `
  }
    ${({ size }) =>
    (size == 'md' || !size) && css`
    height:40px;
    width:200px;
    `
  }
    ${({ size }) =>
    size == 'lg' && css`
    height:50px;
    width:300px;
    `
  }
  ${({variant,theme}) => renderVariant(variant,theme)}
  &:hover{
    transform:scale(1.02);
    opacity:0.9;
    transition:0.6s all;
  }
`;