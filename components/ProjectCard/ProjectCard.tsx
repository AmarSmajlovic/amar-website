import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { TechImage } from "../../types";

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
    <Flex
      flexDirection="column"
      minWidth="xs"
      gap="10px"
      padding="10px"
      scrollSnapAlign="center"
    >
      <Image src={projectImage} alt="it-academy" />
      <Text fontSize="xl" textAlign="center">
        {projectName}
      </Text>
      <Flex
        flexDirection="row"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
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
      <Text textAlign="center">{description}</Text>
    </Flex>
  );
};

export default ProjectCard;
