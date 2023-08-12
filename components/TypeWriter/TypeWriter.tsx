import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const TypeWriter = () => {
  return (
    <MotionText
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      fontSize={["small", "2xl"]}
      textAlign="center"
    >
      <Typewriter
        words={[
          "crafting-delightful-user-experiences.ts",
          "passionate-about-frontend-development.tsx",
          "bringing-ideas-to-life-with-code.tsx",
        ]}
        loop={0}
        cursor
        cursorColor="red"
        cursorStyle="|"
        typeSpeed={250}
        deleteSpeed={100}
        delaySpeed={1000}
      />
    </MotionText>
  );
};

export default TypeWriter;
