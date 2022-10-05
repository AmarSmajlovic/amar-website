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
      fontSize="2xl"
      textAlign="center"
    >
      <Typewriter
        words={[
          "Hello, here is Amar",
          "Guy-who-loves-coffe.tsx",
          "But-loves-to-code-more.tsx",
        ]}
        loop={0}
        cursor
        cursorColor="red"
        cursorStyle="|"
        typeSpeed={150}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </MotionText>
  );
};

export default TypeWriter;
