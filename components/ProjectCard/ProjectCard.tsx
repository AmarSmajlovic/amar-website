import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import Image, { StaticImageData } from "next/image";
import { TechImage } from "../../types";

interface Props {
  projectName: string;
  projectImage: StaticImageData;
  techUsed: TechImage[];
  description: string;
  codeUrl: string;
}

const ProjectCard = ({
  projectName,
  projectImage,
  techUsed,
  description,
  codeUrl,
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
        <Flex
          cursor="pointer"
          as="a"
          href={codeUrl}
          target="_blank"
          alignItems="center"
          gap="10px"
        >
          <LinkIcon />
          See Code
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
