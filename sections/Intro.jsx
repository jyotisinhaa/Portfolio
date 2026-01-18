"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef(null);
  const introRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    let homeObserver;
    if (homeRef.current) {
      homeObserver = new IntersectionObserver(
        ([entry]) => setIsHome(entry.isIntersecting),
        { rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}` },
      );
      homeObserver.observe(homeRef.current);
    }

    if (isHome) {
      profileRef.current?.classList.add("slide-in");
      introRef.current?.classList.add("slide-in");
    } else {
      profileRef.current?.classList.remove("slide-in");
      introRef.current?.classList.remove("slide-in");
    }

    return () => {
      if (homeObserver && homeRef.current) {
        try {
          homeObserver.unobserve(homeRef.current);
        } catch (e) {}
        homeObserver.disconnect();
      }
    };
  }, [isHome]);

  return (
    <Fragment>
      <Head>
        <title>Jyoti&apos;s Portfolio</title>
      </Head>

      <section id="home">
        <div
          className="min-h-screen w-full relative flex items-center"
          ref={homeRef}
        >
          {/* full-screen background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/MyPhoto.jpeg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/40" />

          <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center">
            <div className="text-center text-white" ref={introRef}>
              <p className="text-sm uppercase tracking-widest mb-4 opacity-90 text-center">
                Hello, I AM
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-center">
                Jyoti Sinha
              </h1>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
