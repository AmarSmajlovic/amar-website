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
      <Grid placeItems="center" templateColumns="repeat(6, 1fr)" gap="10px">
        {techUsed.map((tech) => (
          <Image key={tech.alt} src={tech.image} alt={tech.alt} />
        ))}
      </Grid>
      <Text textAlign="center">{description}</Text>
    </Flex>
  );
};

export default ProjectCard;
