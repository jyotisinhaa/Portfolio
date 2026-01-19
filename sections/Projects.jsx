"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

import { ProjectsData } from "@/constants";

const Project = () => {
  const [height1, setHeight1] = useState("");
  const [isProjects, setIsProjects] = useState(false);
  const projectRef = useRef();
  const projectBoxesRef = useRef();

  useEffect(() => {
    if (projectRef.current) {
      const projectsObserver = new IntersectionObserver(
        ([projectsEntry]) => {
          setIsProjects(projectsEntry.isIntersecting);
        },
        {
          rootMargin: "-100px",
        },
      );

      projectsObserver.observe(projectRef.current);

      if (isProjects) {
        projectBoxesRef.current.classList.add("pop-up-child");
      } else {
        projectBoxesRef.current.classList.remove("pop-up-child");
      }
    }
  }, [isProjects, projectRef]);

  return (
    <Fragment>
      <section id="project" ref={projectRef}>
        <h2 className="text-4xl md:text-5xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3 text-gray-900 dark:text-white">
          <CgWebsite size={40} className="text-blue-600" /> Projects
        </h2>

        <div
          className="min-h-[300px] pop-down-child pb-[30px] flex flex-col gap-8 items-center px-[20px] shadow-sm shadow-zinc-300 dark:shadow-zinc-700"
          ref={projectBoxesRef}
        >
          {ProjectsData.map((project) => (
            <div
              className="w-full max-w-3xl flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-800"
              key={project.projectName}
            >
              {/* Project Image */}
              <div className="md:w-2/5 w-full h-56 md:h-auto flex-shrink-0">
                <img
                  src={project?.projectImage?.imageUrl || ""}
                  alt={project.projectName}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Project Info */}
              <div className="flex flex-col justify-center p-6 md:w-3/5 w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.projectName}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                  {project.description.split("\n")[0]}
                </p>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg bg-pink-600 text-white font-semibold shadow hover:bg-pink-700 transition"
                    >
                      Try it Now
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white font-semibold shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition flex items-center gap-2"
                    >
                      <BsGithub /> View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Project;
