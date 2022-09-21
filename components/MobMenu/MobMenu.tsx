import React from "react";
import {
  Menu,
  MenuButton,
  IconButton,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface Link {
  text: string;
  url: string;
}

const links: Link[] = [
  { text: "Home", url: "#home" },
  { text: "About", url: "#about" },
  { text: "Skills", url: "#skills" },
];

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
      <MenuList>
        <Tabs variant="unstyled">
          <TabList flexDirection="column">
            {links.map((link) => (
              <Tab as="a" href={link.url} key={link.url}>
                <MenuItem justifyContent="center">{link.text}</MenuItem>
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </MenuList>
    </Menu>
  );
};

export default MobMenu;
