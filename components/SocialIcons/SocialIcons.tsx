import React from "react";
import { FlexContainer } from "../../styles";
import { SocialIcon } from "react-social-icons";

interface Icon {
  url: string;
  email?: boolean;
}

const icons: Icon[] = [
  { url: "https://www.linkedin.com/in/amarsmajlovic/" },
  { url: "https://github.com/AmarSmajlovic" },
  { url: "https://www.facebook.com/amar.smajlovic.334" },
  { url: "https://www.instagram.com/smajla_/" },
];

const SocialIcons = () => {
  return (
    <FlexContainer gap="5px">
      {icons.map((icon) => (
        <SocialIcon fgColor="white" url={icon.url} key={icon.url} />
      ))}
    </FlexContainer>
  );
};

export default SocialIcons;
