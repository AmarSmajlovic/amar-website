/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Tabs, TabList, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-scroll";
import styled from "@emotion/styled";
import { LinkType } from "../../types";

const StyledLink = styled(Link)`
  padding-top: 3px;
  padding-bottom: 3px;
  cursor: pointer;
`;

const links: LinkType[] = [
  { url: "home", text: "Home" },
  { url: "about", text: "About" },
  { url: "skills", text: "Skills" },
  { url: "experience", text: "Experience" },
  { url: "projects", text: "Projects" },
  { url: "contact", text: "Contact me" },
];

const DesktopMenu = () => {
  const color = useColorModeValue("black", "white");

  return (
    <Tabs>
      <TabList fontSize="lg" gap="15px" color={color}>
        {links.map((link) => (
          <StyledLink spy={true} key={link.url} to={link.url}>
            {link.text}
          </StyledLink>
        ))}
      </TabList>
    </Tabs>
  );
};

export default DesktopMenu;
