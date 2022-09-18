import React from "react";
import styled from "styled-components";

interface Props {
  show: boolean;
}

const Container = styled.div<Props>`
  display: ${({ show }) => (show ? "block" : "none")};
  width: 90%;
  height: 400px;
  background-color: red;
  border: 1px solid black;
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  margin: auto;
  border-radius: 20px;
`;

const MobMenu = ({ show }: Props) => {
  return <Container show={show}>MobMenu</Container>;
};

export default MobMenu;
