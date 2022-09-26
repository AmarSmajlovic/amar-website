import { Box, Center, Flex, Text, Grid } from "@chakra-ui/react";
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
          <Grid placeItems="center" templateColumns="repeat(6, 1fr)" gap="10px">
            {techUsed.map((tech) => (
              <Image key={tech.alt} src={tech.image} alt={tech.alt} />
            ))}
          </Grid>
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
