import styled from "styled-components";

interface Props{
  justifyContent?:"center" | "space-between" | "space-around" | "flex-end";
  alignItems?: "center" | "flex-start" | "flex-end"
}


export const FlexContainer = styled.div<Props>`
  display:flex;
  width:100%;
  height:100%;
  justify-content: ${({justifyContent}) => justifyContent ?? 'center'};
  align-items: ${({alignItems}) => alignItems ?? 'center'}
`;