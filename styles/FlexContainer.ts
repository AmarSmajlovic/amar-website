import styled from "styled-components";

interface Props{
  justifyContent?:"center" | "space-between" | "space-around" | "flex-end" | "flex-start";
  alignItems?: "center" | "flex-start" | "flex-end";
  flexDirection?: 'column' | 'row';
  gap?:string;
  full?:boolean;
}


export const FlexContainer = styled.div<Props>`
  display:flex;
   width:${({full}) => full ? '100%' : undefined};
   height:${({full}) => full ? '100%' : undefined};
  justify-content: ${({justifyContent}) => justifyContent ?? 'center'};
  align-items: ${({alignItems}) => alignItems ?? 'center'};
  flex-direction: ${({flexDirection}) => flexDirection ?? 'row'};
  gap:${({gap}) => gap ?? undefined};
`;