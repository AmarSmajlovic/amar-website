import React from "react";
import { FlexContainer } from "../../styles";
import { SocialIcon } from "react-social-icons";

const icons = [
  { url: "https://www.linkedin.com/in/amarsmajlovic/" },
  { url: "https://github.com/AmarSmajlovic" },
  { url: "https://www.instagram.com/smajla_/" },
];

const SocialIcons = () => {
  return (
    <FlexContainer gap="5px">
      {icons.map((icon) => (
        <SocialIcon fgColor="white" key={icon.url} url={icon.url} />
      ))}
    </FlexContainer>
  );
};

export default SocialIcons;
