"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";

import { TechStackData } from "@/constants/SkillsData";

const TechStack = () => {
  const categories = Object.keys(TechStackData[0]);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [sectionData, setSectionData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const techStackRef = useRef();
  const techBoxesRef = useRef();
  const tabsRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const techStackObserver = new IntersectionObserver(
      ([techStackEntry]) => {
        setIsVisible(techStackEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}`,
      },
    );

    techStackObserver.observe(techStackRef.current);

    if (isVisible) {
      techBoxesRef.current.classList.add("fade-in-up");
      tabsRef.current.classList.add("slide-in");
    } else {
      techBoxesRef.current.classList.remove("fade-in-up");
      tabsRef.current.classList.remove("slide-in");
    }
  }, [isVisible]);

  useEffect(() => {
    setSectionData(TechStackData[0][activeCategory] || []);

    // Reset animation
    techBoxesRef.current.classList.remove("fade-in-up");
    setTimeout(() => {
      techBoxesRef.current.classList.add("fade-in-up");
    }, 50);
  }, [activeCategory]);

  return (
    <Fragment>
      <section
        className="shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-hidden bg-[#0A0A0A] py-8 pb-12"
        id="techStack"
        ref={techStackRef}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center p-4 flex justify-center items-center gap-3 text-white mb-8">
          <FaLaptopCode className="animate-pulse" /> Tech Stack
        </h2>

        {/* Tabs Container */}
        <div
          className="w-full max-w-7xl mx-auto px-4 mb-8 opacity-0"
          ref={tabsRef}
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`relative px-4 md:px-8 py-3 md:py-4 font-bold text-sm md:text-base rounded-2xl transition-all duration-500 transform overflow-hidden ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-2xl shadow-blue-500/50 scale-110 -translate-y-1"
                    : "bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 hover:from-gray-700 hover:to-gray-800 hover:scale-105 hover:shadow-xl hover:shadow-gray-700/50"
                }`}
                onClick={() => {
                  setActiveCategory(category);
                }}
              >
                <span className="relative z-10">{category}</span>
                {activeCategory === category && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Cards Container */}
        <div
          className="flex min-h-[320px] py-6 pb-8 px-4 md:px-16 flex-wrap justify-center items-start gap-4 md:gap-6 opacity-0"
          ref={techBoxesRef}
        >
          {sectionData.map((tech, index) => (
            <div
              className="group relative transition-all duration-700 hover:scale-110 hover:-translate-y-2 px-4 py-5 w-[135px] md:w-[160px] bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 border-2 border-gray-700/50 hover:border-cyan-400 rounded-2xl flex flex-col gap-3 items-center cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 overflow-hidden"
              key={tech.name}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`,
              }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl"></div>

              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-600/0 group-hover:from-cyan-500/15 group-hover:via-blue-500/15 group-hover:to-purple-600/15 transition-all duration-700"></div>

              {/* Icon container with enhanced glow */}
              <div className="relative transform group-hover:rotate-[8deg] group-hover:scale-125 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
                {tech.icon}
              </div>

              {/* Tech name with gradient on hover */}
              <p className="relative text-white text-center text-xs md:text-sm font-bold tracking-wide group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                {tech.name}
              </p>

              {/* Bottom border glow effect with pulse */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 group-hover:animate-pulse"></div>

              {/* Side glow effect */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </Fragment>
  );
};

export default TechStack;
