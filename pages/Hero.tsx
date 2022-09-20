/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HeroImageAmar } from "../assets";
import { SocialIcons, TypeWriter } from "../components";
import { Flex, Text, Button, Box } from "@chakra-ui/react";
import { ContainerPage } from "../styles/ContainerPage";

const Hero: NextPage = () => {
  return (
    <ContainerPage height="100vh" pt="50px">
      <Head>
        <title>Amar's Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        height="100%"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        direction="column"
      >
        <Box
          position="relative"
          width={{ base: 250, md: 300, lg: 350 }}
          height={{ base: 350, md: 400, lg: 450 }}
        >
          <Image
            layout="fill"
            priority
            quality={100}
            src={HeroImageAmar}
            alt="amar-hero-image"
          />
        </Box>
        <Text textAlign="center" as="i">
          SOFTWARE DEVELOPER
        </Text>
        <TypeWriter />
        <SocialIcons />
        <Button variant="outline" size="md" colorScheme="white">
          GET IN TOUCH
        </Button>
      </Flex>
    </ContainerPage>
  );
};

export default Hero;
