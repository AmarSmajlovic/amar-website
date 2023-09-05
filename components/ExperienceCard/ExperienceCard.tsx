import { Box, Center, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { ExperienceCardType } from "../../types";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function ExperienceCard({
  companyLogo,
  workDate,
  role,
  techUsed,
  description,
}: ExperienceCardType) {
  const bgColor = useColorModeValue("#fff", "#1a202c");
  const textColor = useColorModeValue("#1a202c", "#fff");
  return (
    <MotionBox
      height="full"
      bg={bgColor}
      borderRadius="lg"
      padding="20px"
      scrollSnapAlign="center"
    >
      <Flex flexDirection="column" gap="10px">
        <Center height={70}>{companyLogo}</Center>
        <Text color={textColor}>{role}</Text>
        <Text color={textColor}>{workDate}</Text>
        <Flex
          flexDirection="row"
          alignItems="center"
          alignContent="flex-start"
          flexWrap="wrap"
        >
          {techUsed.map((tech) => (
            <div
              key={tech.alt}
              style={{ width: "40px", height: "40px", position: "relative" }}
            >
              <Image
                layout="fill"
                objectFit="contain"
                src={tech.image}
                alt={tech.alt}
              />
            </div>
          ))}
        </Flex>
        <ul style={{ paddingLeft: "15px" }}>
          {description.map((des) => (
            <li style={{ textAlign: "start" }} key={des}>
              <Text color={textColor} fontSize={14}>
                {des}
              </Text>
            </li>
          ))}
        </ul>
      </Flex>
    </MotionBox>
  );
}

export default ExperienceCard;
