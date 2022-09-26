import React, { useState, useEffect } from "react";
import { MobMenu } from "../MobMenu";
import {
  useColorMode,
  Flex,
  Spacer,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

const Nav = styled(Flex)``;

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const [isServer, setIsServer] = useState<boolean>(true);

  useEffect(() => {
    void setIsServer(false);
  }, []);

  return (
    <Nav
      alignItems="center"
      as="header"
      zIndex={1}
      position="fixed"
      bg={useColorModeValue("white", "#1a202c")}
      w="100%"
      p={4}
      color="white"
    >
      <IconButton
        variant="outline"
        border="1px solid #E2E8F0"
        color={useColorModeValue("#1a202c", "white")}
        aria-label="Toggle theme"
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      />
      <Spacer />
      {!isServer && <MobMenu />}
    </Nav>
  );
};

export default Navbar;
