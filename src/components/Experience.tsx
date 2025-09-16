"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      position: "Web Developer Intern",
      company: "Starkseek",
      location: "Remote",
      period: "Dec 2024 - Present",
      duration: "2+ months",
      description: [
        "Developed responsive, user-friendly websites using the MERN stack and Tailwind CSS",
        "Integrated APIs and implemented SEO strategies, increasing traffic by 65% and speed by 40%",
        "Collaborated with cross-functional teams to ensure smooth UX and maintainable code",
        "Focused on clean UI design, performance optimization, and mobile responsiveness"
      ],
      technologies: ["MERN Stack", "HTML", "CSS", "JavaScript", "Tailwind", "REST APIs", "Git"],
      isCurrentJob: true,
      icon: "🌐"
    },
    {
      id: 2,
      position: "Unreal Engine Game Developer Intern",
      company: "Gaurav Go Technologies",
      location: "Remote",
      period: "June 2025 - July 2025",
      duration: "1 month",
      description: [
        "Designed and implemented gameplay mechanics using Blueprints and C++ in Unreal Engine 5",
        "Created and optimized interactive levels with smooth flow, animations, and environmental logic",
        "Enhanced user experience through responsive mechanics, dynamic elements, and game polish",
        "Collaborated with designers to refine puzzle logic, transitions, and performance for the final build"
      ],
      technologies: ["Unreal Engine 5", "Blueprints", "C++", "Level Design"],
      isCurrentJob: false,
      icon: "🎮"
    }
  ];

  return (
    <section id="experience" className="py-8 bg-white dark:bg-gray-900 overflow-x-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in web development and game development, building real-world solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200 dark:from-blue-800 dark:via-purple-800 dark:to-blue-800"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className={`relative mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex flex-col md:flex items-center`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg mr-3 border border-blue-100 dark:border-blue-800/30">
                      <span className="text-lg">{experience.icon}</span>
                    </div>
                    {experience.isCurrentJob && (
                      <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-700 dark:text-green-400 rounded-full text-xs font-medium border border-green-200 dark:border-green-800">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-2">
                    {experience.position}
                  </h3>
                  
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mb-3 text-sm">
                    {experience.company}
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-600 dark:text-gray-400">
                    <div className="flex items-center bg-gray-50 dark:bg-gray-800/50 px-2 py-1 rounded-md">
                      <Calendar className="w-3 h-3 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center bg-gray-50 dark:bg-gray-800/50 px-2 py-1 rounded-md">
                      <MapPin className="w-3 h-3 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start text-sm leading-snug">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {experience.technologies.map((tech, techIdx) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium border border-blue-200/50 dark:border-blue-700/50 hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership & Volunteering Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Leadership & Volunteering
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Leadership Positions */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg mr-3">
                  <span className="text-lg">👑</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Leadership</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Webmaster</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">IEEE JSSUN Student Branch</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Technical Head</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">EDC JSSUN</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Student Coordinator</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">CSE Technical Council (Research Activity Cell)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteering */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg mr-3">
                  <span className="text-lg">🤝</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Volunteering</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Web Developer</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Hack4Bihar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Global Ambassador</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">IEEE Yesist12 2025, IEEE Xtreme 19.0, IEEE CSIS 2025, IIT BHU, BITS Pilani APOGEE, etc.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Creative Team</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Editorial Board, JSS University, Noida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
