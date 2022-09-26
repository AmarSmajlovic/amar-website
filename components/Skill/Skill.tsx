import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Text, Flex } from "@chakra-ui/react";

interface Props {
  title?: string;
  src?: string | StaticImageData;
  image?: React.ReactNode;
}

const Skill = ({ title, src, image }: Props) => {
  const techSkillStyle = {
    width: "70px",
    height: "70px",
    border: !title ? "1px solid #1a202c" : "none",
    borderRadius: !title ? "50%" : undefined,
    overflow: "hidden",
    backgroundColor: !title ? "white" : undefined,
    display: "flex",
    justifyContent: "center",
    padding: !title ? "10px" : undefined,
  };

  return (
    <Flex gap="10px" justifyContent="space-between" alignItems="flex-end">
      {title && <Text>{title}</Text>}
      <motion.div style={techSkillStyle}>
        {src && <Image src={src} alt="html" />}
        {image && image}
      </motion.div>
    </Flex>
  );
};

export default Skill;
