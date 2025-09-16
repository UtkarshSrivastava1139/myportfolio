"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-12 bg-white dark:bg-gray-900 overflow-x-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div>
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-8">
            {/* Left Column - Profile Picture and Stats (Desktop) */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              {/* Profile Picture - Modern and Clean */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center lg:justify-start mb-3 lg:mb-6"
              >
                <div className="relative">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                    <Image
                      src="/profile.png"
                      alt="Utkarsh Srivastava Profile"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl opacity-75 blur-lg -z-10"></div>
                </div>
              </motion.div>

              {/* Modern Stats Section - Desktop only */}
              <div className="hidden lg:grid grid-cols-1 gap-4 max-w-sm mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50"
                >
                  <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-1">10+</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Projects Completed</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Web apps to AI platforms</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200/50 dark:border-purple-700/50"
                >
                  <div className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-1">3+</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Years Experience</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Full-stack development</div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1"
            >
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Full Stack Developer & UI/UX Designer
                  </h3>
                </div>

                {/* Modern Introduction */}
                <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 p-4 rounded-2xl border border-blue-100/50 dark:border-blue-800/30">
                  <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Hi, I'm <span className="font-medium text-blue-600 dark:text-blue-400">Utkarsh Srivastava</span>, 
                    a passionate Computer Science Engineering student with a strong focus on full-stack web development and UI/UX design. I love turning ideas into functional, impactful digital experiences — always excited to tackle real-world problems through clean code, thoughtful design, and creative problem-solving.
                  </p>
                </div>

                {/* Modern Cards Layout - Full width utilization */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                  <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Technical Expertise
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      MERN Stack, UI/UX Design, AI-based platforms, and scalable web applications
                    </p>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600 transition-colors">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      Leadership Roles
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Webmaster at IEEE JSSUN, Technical Head at EDC JSSUN, IEEE Global Ambassador
                    </p>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-green-300 dark:hover:border-green-600 transition-colors">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Recognition
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      YESIST12 Finalist, Ambassador for CSIS 2025 & IEEEXtreme programs
                    </p>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-orange-300 dark:hover:border-orange-600 transition-colors">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Passion Projects
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      National-level hackathons, university portals, sustainability platforms
                    </p>
                  </div>
                </div>

                {/* Additional Content - Skills & Interests */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 p-5 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                      Current Focus
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        Building scalable web applications with React & Node.js
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                        Exploring AI/ML integration in web platforms
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        Contributing to open-source projects
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 p-5 rounded-xl border border-gray-200/50 dark:border-gray-600/50">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></div>
                      Beyond Coding
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                        Participating in hackathons and coding competitions.
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                        Organizing tech events and workshops
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                        Exploring UI/UX design trends and tools
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Stats Section - At the bottom */}
          <div className="lg:hidden grid grid-cols-2 gap-4 max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50"
            >
              <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-1">10+</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Projects Completed</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Web apps to AI platforms</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200/50 dark:border-purple-700/50"
            >
              <div className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-1">1+</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Years Experience</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Full-stack development</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
