import React from "react";
import { Text } from "../../styles";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <Text as="h1" textAlign="center">
      <Typewriter
        words={[
          "Hello, here is Amar",
          "Guy-who-loves-coffe.tsx",
          "<ButLovesToCodeMore/>",
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
