import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import Image, { StaticImageData } from "next/image";
import { TechImage } from "../../types";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

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
    <MotionBox
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      scrollSnapAlign="center"
      minWidth="full"
    >
      <Flex
        flexDirection="column"
        padding="10px"
        alignItems="center"
        justifyContent="space-around"
        scrollSnapAlign="center"
        minWidth="full"
        h="calc(78vh)"
      >
        <Box height="50%" width="100%" position="relative">
          <Image
            layout="fill"
            objectFit="contain"
            src={projectImage}
            alt="it-academy"
          />
        </Box>
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
            <Box key={tech.alt} height="40px" width="40px" position="relative">
              <Image fill objectFit="cover" src={tech.image} alt={tech.alt} />
            </Box>
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
    </MotionBox>
  );
};

export default ProjectCard;
