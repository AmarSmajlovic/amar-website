import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const MotionDiv = motion(Flex);

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
  const bgColor = useColorModeValue("#1a202c", "white");
  const fgColor = useColorModeValue("white", "#1a202c");

  return (
    <MotionDiv gap="10px">
      {icons.map((icon, i) => (
        <motion.button
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: `0.${i + 3}` }}
          whileTap={{ scale: 0.9 }}
          key={icon.url}
        >
          <SocialIcon
            bgColor={bgColor}
            fgColor={fgColor}
            target="_blank"
            url={icon.url}
          />
        </motion.button>
      ))}
    </MotionDiv>
  );
};

export default SocialIcons;
