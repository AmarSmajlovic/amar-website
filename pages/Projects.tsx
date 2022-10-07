/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  AngularIcon,
  CssIcon,
  HtmlIcon,
  JavaScriptIcon,
  MySQLIcon,
  NodeJSIcon,
  ReactIcon,
  TypescriptIcon,
} from "../assets";
import { ITAcademyProject, NetflixClone } from "../assets";
import { ProjectCard } from "../components";
import { ContainerPage } from "../styles/ContainerPage";

const projectsData = [
  {
    projectName: "E-Commerce Fullstack Web app",
    projectImage: ITAcademyProject,
    techUsed: [
      { alt: "html-icon", image: HtmlIcon },
      { alt: "css-icon", image: CssIcon },
      { alt: "js-icon", image: JavaScriptIcon },
      { alt: "angular-icon", image: AngularIcon },
      { alt: "ts-icon", image: TypescriptIcon },
      { alt: "nodejs-icon", image: NodeJSIcon },
      { alt: "mysql-icon", image: MySQLIcon },
    ],
    description:
      "There is my first complex full-stack web application with many features such as game search, filtering, and sorting, where users can create accounts, login, and purchase games.",
    codeUrl: "https://github.com/AmarSmajlovic/AlfaGaming-website-for-games",
  },
  {
    projectName: "Netflix Clone",
    projectImage: NetflixClone,
    techUsed: [
      { alt: "html-icon", image: HtmlIcon },
      { alt: "css-icon", image: CssIcon },
      { alt: "js-icon", image: JavaScriptIcon },
      { alt: "react-icon", image: ReactIcon },
    ],
    description:
      "This project is a simplified front end clone of Netflix. It was created with React and CSS. It uses The MovieDB Api to search for movies and display details.",
    codeUrl: "https://github.com/AmarSmajlovic/Netflix-clone",
  },
];

const Projects: NextPage = () => {
  return (
    <ContainerPage id="projects" minWidth="full" pt="50px">
      <Head>
        <title>Amar's Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" justifyContent="space-between" gap="10px">
        <Text textAlign="center" fontSize="3xl">
          Projects
        </Text>
        <Text as="i" fontSize={14} textAlign="center">
          Some Of My Distinguished Works
        </Text>
        <Flex
          scrollSnapType="x mandatory"
          gap="10px"
          width="full"
          overflowX="scroll"
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.projectName}
              projectImage={project.projectImage}
              projectName={project.projectName}
              techUsed={project.techUsed}
              description={project.description}
              codeUrl={project.codeUrl}
            />
          ))}
        </Flex>
      </Flex>
    </ContainerPage>
  );
};

export default Projects;
