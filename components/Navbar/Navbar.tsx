import React from "react";
import styled from "styled-components";
import { colors } from "../../styles";

interface Props {
  toggleTheme: () => void;
}

const NavbarContainer = styled.div`
  background-color: gray;
  height: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
  color: ${colors.blue};
`;

const Navbar = ({ toggleTheme }: Props) => {
  return (
    <NavbarContainer>
      <button onClick={toggleTheme}>change</button>
    </NavbarContainer>
  );
};

export default Navbar;
