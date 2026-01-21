import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
import GetInTouch from "@/sections/GetInTouch";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"));
const Intro = dynamic(() => import("@/sections/Intro"));
const Skills = dynamic(() => import("@/sections/Skills"));
const Projects = dynamic(() => import("@/sections/Projects"));
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"));
const ChatSystem = dynamic(() => import("@/utils/ChatSystem"));

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Jyoti&apos;s Portfolio</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta content="Jyoti's Portfolio" name="title" />
        <meta
          content="Explore the best Next.js and React.js portfolio by Jyoti. Featuring simple, dark and light theme designs and mobile responsiveness."
          name="description"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta content="website" property="og:type" />
        <meta content="https://shiv-s-portfolio.vercel.app" property="og:url" />
        <meta content="Jyoti's Portfolio" property="og:title" />
        <meta
          content="Explore the best Next.js and React.js portfolio by Jyoti. Featuring simple, dark and light theme designs and mobile responsiveness."
          property="og:description"
        />

        {/* <!-- Twitter --> */}
        <meta content="summary" property="twitter:card" />
        <meta content="Jyoti - Portfolio" property="twitter:title" />
        <meta
          content="Explore the best Next.js and React.js portfolio by Jyoti. Featuring simple, dark and light theme designs and mobile responsiveness."
          property="twitter:description"
        />

        {/* <!-- Other Meta Tags --> */}
        <meta
          content="portfolio, Next.js, React.js, web development, dark theme, light theme, best portfolio github, best next js portfolio, how to make a portfolio, best react js portfolio github, best react js portfolio, best next js portfolio, react js developer in Kota, react js developer in Jaipur, react js developer in India, react js developer in Rajasthan"
          name="keywords"
        />
        <meta content="Jyoti" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* Get In Touch */}
          <GetInTouch />
          {/* SocialMedia */}
          <SocialMedia />
          <div className="z-40">
            {/* tawk.to Chat System */}
            <ChatSystem />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
