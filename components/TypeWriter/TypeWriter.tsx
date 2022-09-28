import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Text } from "@chakra-ui/react";

const TypeWriter = () => {
  return (
    <Text fontSize="2xl" textAlign="center">
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
    </Text>
  );
};

export default TypeWriter;
