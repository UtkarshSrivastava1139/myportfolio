"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 overflow-x-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16">
            {/* Profile Picture - Centered and Optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 shadow-2xl">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                      {/* Professional placeholder - replace with actual photo */}
                      <svg className="w-24 h-24 lg:w-32 lg:h-32 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 max-w-3xl"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Full Stack Developer & Problem Solver
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>

                {/* Condensed Introduction */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Utkarsh Srivastava</span>, 
                    a passionate Computer Science Engineering student specializing in <span className="font-semibold">full-stack development</span>, 
                    <span className="font-semibold"> UI/UX design</span>, and <span className="font-semibold">creative problem-solving</span>.
                  </p>
                </div>

                {/* Key Highlights in Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Technical Expertise
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      MERN Stack, UI/UX Design, AI-based platforms, and scalable web applications
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Leadership Roles
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Webmaster at IEEE JSSUN, Technical Head at EDC JSSUN, IEEE Global Ambassador
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Recognition
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      YESIST12 Finalist, Ambassador for CSIS 2025 & IEEEXtreme programs
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      Passion Projects
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      National-level hackathons, university portals, sustainability platforms
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats and Skills Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Projects Completed</div>
              <div className="text-sm text-blue-200 mt-2">From web apps to AI platforms</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-purple-100">Years Experience</div>
              <div className="text-sm text-purple-200 mt-2">Full-stack development journey</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-green-100">Leadership Roles</div>
              <div className="text-sm text-green-200 mt-2">Community & technical positions</div>
            </motion.div>
          </div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12"
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Technology Stack
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "React", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
                { name: "Node.js", color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" },
                { name: "TypeScript", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
                { name: "MongoDB", color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" },
                { name: "Express", color: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300" },
                { name: "Next.js", color: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300" },
                { name: "Python", color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300" },
                { name: "C++", color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300" }
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`px-4 py-2 ${tech.color} rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default shadow-sm`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
