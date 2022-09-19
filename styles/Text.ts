import styled from "styled-components";
import { ThemeProps } from "./Theme";


interface Props extends ThemeProps{
    bolder?:boolean;
    textAlign?: "center"
}

export const Text = styled.p<Props>`
  color:${({theme}) => theme.text};
  font-weight:${({bolder}) => bolder && 'bold'};
  text-align:${({textAlign}) => textAlign ?? undefined};
`;