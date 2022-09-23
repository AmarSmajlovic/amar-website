/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import About from "./About";
import Experience from "./Experience";
import Hero from "./Hero";
import Skills from "./Skills";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Amar's Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      * <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <Projects/> */}
      {/* <Contact/> */}
    </div>
  );
};

export default Home;
