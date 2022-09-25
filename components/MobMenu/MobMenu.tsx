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
  useColorMode,
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
  { text: "Experience", url: "#experience" },
  { text: "Projects", url: "#projects" },
];

const MobMenu = () => {
  const { colorMode } = useColorMode();

  return (
    <Menu>
      <MenuButton as="div">
        <IconButton
          variant="outline"
          border="1px solid #E2E8F0"
          color={useColorModeValue("#1a202c", "E2E8F0")}
          aria-label="Hamburger-menu"
          icon={<HamburgerIcon />}
        />
      </MenuButton>
      <MenuList>
        <Tabs variant="unstyled">
          <TabList flexDirection="column">
            {links.map((link) => (
              <Tab
                color={colorMode == "light" ? "#1a202c" : "white"}
                as="a"
                href={link.url}
                key={link.url}
              >
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
