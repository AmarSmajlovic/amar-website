import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors, FlexContainer } from "../../styles";
import { MobMenu } from "../MobMenu";
import Image from "next/image";
import { darkThemeIcon, lightThemeIcon } from "../../assets";
import { useMediaQuery } from "react-responsive";
import Hamburger from "hamburger-react";
import useDarkMode from "use-dark-mode";

interface Props {
  toggleTheme: () => void;
}

const NavbarContainer = styled.header`
  padding: 0.5rem;
  background-color: gray;
  height: 50px;
  position: sticky;
  top: 0;
  width: 100%;
`;

const Navbar = ({ toggleTheme }: Props) => {
  const darkmode = useDarkMode();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  // Need to set this state and useEffect for fixing Hydration render problem.
  const [isServer, setIsServer] = useState<boolean>(true);
  useEffect(() => {
    void setIsServer(false);
  }, []);

  const handleMenu = () => {
    setToggleMenu((v) => (v = !v));
  };

  return (
    <NavbarContainer>
      <FlexContainer justifyContent="space-between">
        <Image
          onClick={toggleTheme}
          height={20}
          width={20}
          src={darkmode.value ? darkThemeIcon : lightThemeIcon}
          alt="theme-icon"
        />
        {isMobile && !isServer && (
          <Hamburger color={colors.white} rounded onToggle={handleMenu} />
        )}
        <MobMenu show={toggleMenu} />
      </FlexContainer>
    </NavbarContainer>
  );
};

export default Navbar;
