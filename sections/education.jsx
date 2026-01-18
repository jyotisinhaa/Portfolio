"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { IoSchoolSharp } from "react-icons/io5";
import { MdSchool } from "react-icons/md";

import { EducationData } from "@/constants/EducationData";

const Education = () => {
  const [isEducation, setIsEducation] = useState(false);
  const educationRef = useRef();
  const educationBoxesRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const educationObserver = new IntersectionObserver(
      ([educationEntry]) => {
        setIsEducation(educationEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
      },
    );

    educationObserver.observe(educationRef.current);

    if (isEducation) {
      educationBoxesRef.current.classList.add("pop-up-child");
    } else {
      educationBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isEducation]);

  return (
    <Fragment>
      <section
        className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-x-hidden"
        id="education"
        ref={educationRef}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 flex justify-center items-center gap-3">
              <MdSchool size={40} className="text-blue-600" />
              Education
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div
            className="pop-down-child flex flex-col gap-8"
            ref={educationBoxesRef}
          >
            {EducationData.map((education, index) => (
              <div
                key={education.name}
                className={`group transition-all duration-700 hover:shadow-2xl rounded-xl overflow-hidden ${
                  index % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800"
                } shadow-lg dark:shadow-2xl border border-blue-100 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500`}
              >
                <div className="flex flex-col md:flex-row gap-0">
                  {/* Image Section */}
                  <div className="md:w-1/3 overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center min-h-64 md:min-h-auto">
                    <Image
                      alt={education.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      height={300}
                      src={education.image}
                      width={300}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {education.name}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {education.schoolOrCollege}
                    </p>

                    {education.description && (
                      <div className="flex flex-col gap-3 mt-2">
                        {education.description.map((desc, idx) => (
                          <div key={idx} className="flex gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs font-bold">
                                ✓
                              </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Education;
