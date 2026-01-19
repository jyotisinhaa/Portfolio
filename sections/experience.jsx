"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { MdWork } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsArrowDownCircle } from "react-icons/bs";

import { ExperienceData } from "@/constants/ExperienceData";

const Experience = () => {
  const [desc, setDesc] = useState("");
  const [isExpe, setIsExpe] = useState(false);
  const expeRef = useRef();
  const expeBoxesRef = useRef();

  useEffect(() => {
    const expeObserver = new IntersectionObserver(
      ([expeEntry]) => {
        setIsExpe(expeEntry.isIntersecting);
      },
      {
        rootMargin: "-100px",
      },
    );

    expeObserver.observe(expeRef.current);

    if (isExpe) {
      expeBoxesRef.current.classList.add("pop-up-child");
    } else {
      expeBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isExpe]);

  return (
    <Fragment>
      <section id="experience" ref={expeRef} className="py-12 bg-[#0A0A0A]">
        <h2 className="text-4xl md:text-5xl font-bold text-center p-6 flex justify-center items-center gap-3 text-gray-900 dark:text-white">
          <MdWork size={40} className="text-blue-600" /> Experience
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-8"></div>

        <div
          className="pop-down-child pb-[20px] px-[20px] md:px-[60px] lg:px-[150px]"
          ref={expeBoxesRef}
        >
          {ExperienceData.map((experience, index) =>
            experience.side === "left" ? (
              <div
                className={`md:flex gap-2 items-end transition-all duration-500 ${
                  index !== 0 ? "mt-7" : ""
                }`}
                key={experience.companyName}
              >
                <div
                  className="md:w-[45%] cursor-pointer p-4 border border-blue-200 dark:border-gray-600 shadow-md dark:shadow-lg rounded-lg hover:shadow-lg transition-all hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-gray-800"
                  onClick={() =>
                    setDesc(
                      desc === experience.description
                        ? ""
                        : experience.description,
                    )
                  }
                >
                  <div className="flex justify-between gap-2">
                    <p className="text-lg md:text-xl font-bold text-blue-700 dark:text-blue-400">
                      {experience.companyName}
                    </p>
                    <p className="flex gap-2 items-center text-blue-600 dark:text-blue-300 text-sm">
                      <ImLocation size={14} /> {experience.location}
                    </p>
                  </div>

                  <div className="flex justify-between text-gray-600 dark:text-gray-400 gap-2 mt-2 text-sm">
                    <p className="font-semibold text-gray-700 dark:text-gray-300">
                      {experience.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {experience.fromTo}
                    </p>
                  </div>

                  <p
                    className="mt-3 text-justify transition-all duration-500 overflow-hidden text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                    style={
                      desc == experience.description
                        ? { maxHeight: "400px" }
                        : { maxHeight: "0px" }
                    }
                  >
                    {experience.description}
                  </p>
                </div>
                <button
                  className="transition-all duration-500 hidden md:block"
                  onClick={() =>
                    setDesc(
                      desc === experience.description
                        ? ""
                        : experience.description,
                    )
                  }
                  style={
                    desc === experience.description
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                >
                  <BsArrowDownCircle size={22} />
                </button>
              </div>
            ) : (
              <div
                className="md:flex justify-end items-end mt-7 gap-2 transition-all duration-500 "
                key={experience.companyName}
              >
                <button
                  className="hidden md:block"
                  onClick={() =>
                    setDesc(
                      desc === experience.description
                        ? ""
                        : experience.description,
                    )
                  }
                  style={
                    desc === experience.description
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                >
                  <BsArrowDownCircle size={22} />
                </button>
                <div
                  className="md:w-[45%] cursor-pointer transition-all duration-500 p-4 border border-blue-200 dark:border-gray-600 shadow-md dark:shadow-lg rounded-lg hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-gray-800"
                  onClick={() =>
                    setDesc(
                      desc === experience.description
                        ? ""
                        : experience.description,
                    )
                  }
                >
                  <div className="flex justify-between gap-2">
                    <p className="text-lg md:text-xl font-bold text-blue-700 dark:text-blue-400">
                      {experience.companyName}
                    </p>
                    <p className="flex gap-2 items-center text-blue-600 dark:text-blue-300 text-sm">
                      <ImLocation size={14} /> {experience.location}
                    </p>
                  </div>

                  <div className="flex justify-between text-gray-600 dark:text-gray-400 mt-2 gap-2 text-sm">
                    <p className="font-semibold text-gray-700 dark:text-gray-300">
                      {experience.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {experience.fromTo}
                    </p>
                  </div>
                  <p
                    className="mt-3 overflow-hidden transition-all duration-500 text-justify text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                    style={
                      desc == experience.description
                        ? { maxHeight: "400px" }
                        : { maxHeight: "0px" }
                    }
                  >
                    {experience.description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Experience;
