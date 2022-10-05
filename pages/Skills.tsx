/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";
import { ContainerPage } from "../styles/ContainerPage";
import { Skill } from "../components";
import { motion } from "framer-motion";
import {
  CssIcon,
  FirebaseIcon,
  HtmlIcon,
  JavaScriptIcon,
  JestJSIcon,
  MySQLIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  TypescriptIcon,
  AngularIcon,
  ProblemSolvingIcon,
  CreativeIdeaIcon,
  HighQualityIcon,
} from "../assets";

const MotionBox = motion(Grid);

const Skills: NextPage = () => {
  return (
    <ContainerPage id="skills" height="100vh" pt="70px">
      <Head>
        <title>Amar's Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" gap="10px">
        <Text textAlign="center" fontSize="3xl">
          Skills
        </Text>
        <Text textAlign="center" fontSize={14} as="i">
          Let's see my skills
        </Text>
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          placeItems="center"
          templateColumns="repeat(3, 1fr)"
          gap="10px"
        >
          <Skill src={HtmlIcon} />
          <Skill src={CssIcon} />
          <Skill src={JavaScriptIcon} />
          <Skill src={TypescriptIcon} />
          <Skill src={AngularIcon} />
          <Skill src={ReactIcon} />
          <Skill src={NextJSIcon} />
          <Skill src={NodeJSIcon} />
          <Skill src={MySQLIcon} />
          <Skill src={FirebaseIcon} />
          <Skill src={JestJSIcon} />
        </MotionBox>
        <Flex flexDirection="column">
          <Skill
            animated
            index={1}
            title="1. Problem Solving"
            image={<ProblemSolvingIcon />}
          />
          <Skill
            animated
            index={2}
            title="2. Creative Idea"
            image={<CreativeIdeaIcon />}
          />
          <Skill
            animated
            index={3}
            title="3. High Quality"
            image={<HighQualityIcon />}
          />
        </Flex>
      </Flex>
    </ContainerPage>
  );
};

export default Skills;
