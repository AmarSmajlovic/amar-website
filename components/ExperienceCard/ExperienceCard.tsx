import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { ExperienceCardType } from "../../types";
function ExperienceCard({
  companyLogo,
  workDate,
  role,
  techUsed,
  description,
}: ExperienceCardType) {
  return (
    <Box
      minWidth="xs"
      borderWidth="1px"
      borderRadius="lg"
      padding="0 10px 10px 10px"
      scrollSnapAlign="center"
    >
      <Flex flexDirection="column" gap="10px">
        <>
          <Center height={70}>{companyLogo}</Center>
          <Text>{role}</Text>
          <Text>{workDate}</Text>
          <Flex
            flexDirection="row"
            alignItems="center"
            flexWrap="wrap"
            gap="10px"
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
                <Text fontSize={12}>{des}</Text>
              </li>
            ))}
          </ul>
        </>
      </Flex>
    </Box>
  );
}

export default ExperienceCard;
