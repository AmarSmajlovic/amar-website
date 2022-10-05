import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Text, Flex } from "@chakra-ui/react";

const MotionBox = motion(Flex);

interface Props {
  title?: string;
  src?: string | StaticImageData;
  image?: React.ReactNode;
  animated?: boolean;
  index?: number;
}

const Skill = ({ title, src, image, animated, index }: Props) => {
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

  const initialAnimation = () => {
    if (animated && index) {
      if (index % 2 == 0) {
        return {
          x: 10,
          opacity: 0,
        };
      } else {
        return {
          x: -10,
          opacity: 0,
        };
      }
    }
  };

  return (
    <MotionBox
      initial={initialAnimation}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      gap="10px"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      {title && <Text pb={2}>{title}</Text>}
      <motion.div style={techSkillStyle}>
        {src && <Image src={src} alt="html" />}
        {image && image}
      </motion.div>
    </MotionBox>
  );
};

export default Skill;
