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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia assumenda minima obcaecati quae asperiores, laborum iste vitaererum. Officiis aspernatur minus ipsa deleniti dicta ab laudantium,consectetur non ut illo esse optio asperiores numquam blanditiis enimdoloremque nobis nihil.",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia assumenda minima obcaecati quae asperiores, laborum iste vitaererum. Officiis aspernatur minus ipsa deleniti dicta ab laudantium,consectetur non ut illo esse optio asperiores numquam blanditiis enimdoloremque nobis nihil.",
  },
];

const Projects: NextPage = () => {
  return (
    <ContainerPage id="projects" height="100vh" pt="50px">
      <Head>
        <title>Amar's Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" justifyContent="space-between" gap="10px">
        <Text textAlign="center" fontSize="3xl">
          Projects
        </Text>
        <Text as="i" fontSize={12} textAlign="center">
          Some Of My Distinguished Works
        </Text>
        <Flex
          scrollSnapType="x mandatory"
          gap="5px"
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
            />
          ))}
        </Flex>
      </Flex>
    </ContainerPage>
  );
};

export default Projects;
