import { Box, Center, Flex, Text } from "@chakra-ui/react";
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
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      minWidth={["full", "full", "350px", "450px"]}
      w={["full", "full", "250px", "350px"]}
      borderWidth="1px"
      borderRadius="lg"
      padding="0 10px 10px 10px"
      scrollSnapAlign="center"
      h="calc(78vh)"
    >
      <Flex flexDirection="column" gap="10px">
        <>
          <Center height={70}>{companyLogo}</Center>
          <Text>{role}</Text>
          <Text>{workDate}</Text>
          <Flex
            flexDirection="row"
            alignItems="center"
            alignContent="flex-start"
            flexWrap="wrap"
            minHeight="80px"
          >
            {techUsed.map((tech) => (
              <Image
                width="40px"
                height="40px"
                key={tech.alt}
                src={tech.image}
                alt={tech.alt}
              />
            ))}
          </Flex>
          <ul style={{ paddingLeft: "15px" }}>
            {description.map((des) => (
              <li key={des}>
                <Text fontSize={14}>{des}</Text>
              </li>
            ))}
          </ul>
        </>
      </Flex>
    </MotionBox>
  );
}

export default ExperienceCard;
