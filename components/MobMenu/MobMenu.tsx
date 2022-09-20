import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const MobMenu = () => {
  return (
    <Menu>
      <MenuButton as="div">
        <IconButton
          variant="outline"
          colorScheme={useColorModeValue("#1a202c", "white")}
          color={useColorModeValue("#1a202c", "white")}
          aria-label="Hamburger-menu"
          icon={<HamburgerIcon />}
        />
      </MenuButton>
      <Portal>
        <MenuList>
          <MenuItem>Menu 1</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default MobMenu;
