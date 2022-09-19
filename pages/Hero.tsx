/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { HeroImageAmar } from "../assets";
import { FlexContainer, Text } from "../styles";
import { SocialIcons, TypeWriter } from "../components";

const ImageComponent = styled(Image)`
  filter: drop-shadow(5px 10px 5px rgb(0 0 0 / 0.4));
`;

const Hero: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Amar's Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlexContainer gap="10px" flexDirection="column">
        <ImageComponent
          priority
          quality={100}
          src={HeroImageAmar}
          alt="amar-hero-image"
        />
        <Text as="i" bolder>
          SOFTWARE DEVELOPER
        </Text>
        <TypeWriter />
        <SocialIcons />
        <button>GET IN TOUCH</button>
      </FlexContainer>
    </div>
  );
};

export default Hero;