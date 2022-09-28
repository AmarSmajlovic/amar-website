import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { TechImage } from "../../types";
import { SocialIcon } from "react-social-icons";

interface Props {
  projectName: string;
  projectImage: StaticImageData;
  techUsed: TechImage[];
  description: string;
}

const ProjectCard = ({
  projectName,
  projectImage,
  techUsed,
  description,
}: Props) => {
  return (
    <Box scrollSnapAlign="center" minWidth="full" minHeight="full">
      <Flex
        flexDirection="column"
        // gap="10px"
        padding="10px"
        alignItems="center"
        justifyContent="space-around"
        scrollSnapAlign="center"
        minWidth="full"
        h="calc(78vh)"
      >
        <Image src={projectImage} alt="it-academy" />
        <Text fontSize="xl" textAlign="center">
          {projectName}
        </Text>
        <Flex
          flexDirection="row"
          alignItems="center"
          alignContent="flex-start"
          flexWrap="wrap"
          justifyContent="center"
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
        <Text textAlign="justify">{description}</Text>
        <SocialIcon
          target="_blank"
          style={{ width: "40px", height: "40px" }}
          fgColor="white"
          url="https://github.com/AmarSmajlovic/AlfaGaming-website-for-games"
        />
      </Flex>
    </Box>
  );
};

export default ProjectCard;
