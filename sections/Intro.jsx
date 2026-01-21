"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Intro = () => {
  const [isHome, setIsHome] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");
  const [bubbles, setBubbles] = useState([]);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const homeRef = useRef(null);
  const introRef = useRef(null);
  const profileRef = useRef(null);
  const bubbleIdCounter = useRef(0);

  const textSequence = [
    { line1: "I AM", line2: "Jyoti Sinha" },
    { line1: "I AM A", line2: "Software Engineer" },
    { line1: "", line2: "Building scalable AI-powered backend systems" },
  ];

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

  // Text transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out");

      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % textSequence.length);
        setFadeState("fade-in");
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Mouse movement bubble effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const newBubble = {
        id: bubbleIdCounter.current++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 30 + 20,
        color:
          Math.random() > 0.5
            ? "rgba(99, 102, 241, 0.4)"
            : "rgba(139, 92, 246, 0.4)",
      };

      setBubbles((prev) => [...prev, newBubble]);

      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, 1500);
    };

    const throttledMouseMove = (e) => {
      if (Math.random() > 0.7) {
        handleMouseMove(e);
      }
    };

    if (homeRef.current) {
      homeRef.current.addEventListener("mousemove", throttledMouseMove);
    }

    return () => {
      if (homeRef.current) {
        homeRef.current.removeEventListener("mousemove", throttledMouseMove);
      }
    };
  }, []);

  // Hide scroll indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Jyoti&apos;s Portfolio</title>
      </Head>

      <section id="home" className="scroll-mt-20 md:scroll-mt-[80px]">
        <div
          className="min-h-screen w-full relative flex items-center overflow-hidden"
          ref={homeRef}
        >
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950" />

          {/* Floating orbs for depth */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300/30 dark:bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/30 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-400/10 rounded-full filter blur-3xl" />

          {/* Gentle wave pattern */}
          <div
            className="absolute inset-0 opacity-20 dark:opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              rgba(99, 102, 241, 0.03) 60px,
              rgba(99, 102, 241, 0.03) 120px
            )`,
            }}
          />

          {/* Mouse movement bubbles */}
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="absolute pointer-events-none rounded-full animate-bubble"
              style={{
                left: bubble.x,
                top: bubble.y,
                width: bubble.size,
                height: bubble.size,
                backgroundColor: bubble.color,
                transform: "translate(-50%, -50%)",
                animation: "bubbleFloat 1.5s ease-out forwards",
              }}
            />
          ))}

          <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center">
            <div
              className="text-center min-h-[200px] flex flex-col items-center justify-center"
              ref={introRef}
            >
              <div
                className={`transition-all duration-700 text-center ${fadeState === "fade-in" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
              >
                {textSequence[textIndex].line1 && (
                  <p className="text-lg md:text-xl uppercase tracking-widest mb-4 text-indigo-600 dark:text-indigo-300 font-semibold text-center">
                    {textSequence[textIndex].line1}
                  </p>
                )}
                <h1
                  className={`font-extrabold leading-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent text-center ${
                    textIndex === 2
                      ? "text-3xl md:text-5xl px-4"
                      : "text-5xl md:text-7xl"
                  }`}
                >
                  {textSequence[textIndex].line2}
                </h1>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div
              className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500 ${
                showScrollIndicator
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <p className="text-sm text-indigo-600 dark:text-indigo-300 font-medium animate-pulse">
                Scroll to explore
              </p>
              <div className="w-6 h-10 border-2 border-indigo-600 dark:border-indigo-300 rounded-full flex justify-center p-1">
                <div className="w-1.5 h-2 bg-indigo-600 dark:bg-indigo-300 rounded-full animate-scroll-down"></div>
              </div>
              <svg
                className="w-6 h-6 text-indigo-600 dark:text-indigo-300 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes bubbleFloat {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -150%) scale(0.5);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
      `}</style>
    </Fragment>
  );
};

export default Intro;
