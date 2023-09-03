import React, { useState, useEffect } from "react";
import { MobMenu } from "../MobMenu";
import {
  useColorMode,
  Flex,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { DesktopMenu } from "../DesktopMenu";

const Nav = styled(Flex)``;

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const [isServer, setIsServer] = useState<boolean>(true);
  const menu = useBreakpointValue({
    base: <MobMenu />,
    md: <DesktopMenu />,
  });

  useEffect(() => {
    void setIsServer(false);
  }, []);

  return (
    <Nav
      alignItems="center"
      as="header"
      justifyContent="space-between"
      zIndex={1}
      position="fixed"
      bg={useColorModeValue("white", "#1a202c")}
      w="100%"
      p={4}
      style={{ zIndex: "9999" }}
      color="white"
      paddingInline="50px"
      boxShadow={`0 0 10px ${useColorModeValue(
        "rgba(0, 0, 0, 0.09)",
        "rgba(130, 130, 130, 0.09)"
      )}`}
    >
      <IconButton
        variant="outline"
        border="1px solid #E2E8F0"
        color={useColorModeValue("#1a202c", "white")}
        aria-label="Toggle theme"
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      />
      {!isServer && menu}
    </Nav>
  );
};

export default Navbar;
