"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";

const About = () => {
  const [isAbout, setIsAbout] = useState(false);
  const aboutRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      const aboutObserver = new IntersectionObserver(
        ([entry]) => setIsAbout(entry.isIntersecting),
        { rootMargin: "-100px" },
      );
      aboutObserver.observe(aboutRef.current);

      if (contentRef.current) {
        if (isAbout) {
          contentRef.current.classList.add("slide-in");
        } else {
          contentRef.current.classList.remove("slide-in");
        }
      }

      return () => {
        if (aboutRef.current) {
          try {
            aboutObserver.unobserve(aboutRef.current);
          } catch (e) {}
          aboutObserver.disconnect();
        }
      };
    }
  }, [isAbout]);

  return (
    <Fragment>
      <section
        id="about"
        ref={aboutRef}
        className="relative px-6 pb-20 pt-20 bg-white dark:bg-gray-900 z-20"
      >
        <div className="max-w-4xl mx-auto -mt-48">
          {/* About Card */}
          <div
            ref={contentRef}
            className="transform transition-all duration-700 translate-y-20 opacity-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 md:p-12 shadow-2xl border border-blue-100 dark:border-gray-600"
            style={{
              transform: isAbout ? "translateY(-200px)" : "translateY(100px)",
              opacity: isAbout ? 1 : 0,
            }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              {/* Left: Text Content */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  About Me
                </h2>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  I'm a backend and platform engineer focused on building
                  systems that scale cleanly and operate reliably in production.
                  I enjoy working on problems where performance, correctness,
                  and long-term maintainability matter as much as shipping
                  features.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  My work is centered around designing backend services and data
                  platforms that support large workloads and evolving product
                  needs. I spend a lot of time thinking about system boundaries,
                  failure modes, and operational simplicity—how services
                  communicate, how data flows, and how platforms can grow
                  without becoming fragile or expensive to run.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I'm particularly interested in platform engineering and
                  infrastructure-aware backend design. I like building shared
                  services and internal foundations that make other teams more
                  productive, whether that's improving latency and throughput,
                  introducing better observability, or enabling new capabilities
                  like AI-driven features in a way that fits naturally into
                  existing systems.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  With a strong background in computer science and applied AI, I
                  enjoy bridging theory with real-world constraints. I value
                  clear abstractions, pragmatic trade-offs, and engineering
                  decisions backed by data rather than assumptions.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I'm motivated by high engineering standards, thoughtful system
                  design, and teams that take ownership of the platforms they
                  build.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Let’s connect if you’re passionate about tech, big ideas, or
                  just great coffee!
                </p>

                <div className="flex gap-4">
                  <a
                    href="#getInTouch"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1uk-tv12y8PK-WrE4oX2xRtmSy4PUVSsE/view"
                    target="_blank"
                    className="px-6 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                  >
                    View CV
                  </a>
                </div>
              </div>

              {/* Right: Circular Photo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 relative">
                  <Image
                    src="/images/MyPhoto.jpeg"
                    alt="Jyoti Sinha"
                    fill
                    priority
                    className="rounded-full object-cover shadow-lg border-4 border-blue-200 dark:border-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
