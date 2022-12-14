import React from "react";
import {
  Menu,
  MenuButton,
  IconButton,
  useColorModeValue,
  Tabs,
  TabList,
  MenuList,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import { LinkType } from "../../types";

const links: LinkType[] = [
  { text: "Home", url: "home" },
  { text: "About", url: "about" },
  { text: "Skills", url: "skills" },
  { text: "Experience", url: "experience" },
  { text: "Projects", url: "projects" },
  { text: "Contact", url: "contact" },
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
              <MenuItem
                color={colorMode === "light" ? "#1a202c" : "E2E8F0"}
                key={link.text}
                justifyContent="center"
              >
                <Link
                  color="red"
                  spy={true}
                  activeClass="activeMob"
                  to={link.url}
                >
                  {link.text}
                </Link>
              </MenuItem>
            ))}
          </TabList>
        </Tabs>
      </MenuList>
    </Menu>
  );
};

export default MobMenu;
