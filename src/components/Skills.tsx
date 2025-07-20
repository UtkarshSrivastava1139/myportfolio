"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiTailwindcss, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs,
  SiPython,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiCplusplus,
  SiC,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCoreldraw,
  SiCanva,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiNotion
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface SkillCategory {
  icon: string;
  color: string;
  skills: Skill[];
}

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData: Record<string, SkillCategory> = {
    "Frontend": {
      icon: "🎨",
      color: "blue",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React JS", icon: SiReact, color: "#61DAFB" },
        { name: "Next JS", icon: SiNextdotjs, color: "#000000" }
      ]
    },
    "Backend & Database": {
      icon: "⚡",
      color: "green",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
      ]
    },
    "Programming Expertise": {
      icon: "💻",
      color: "purple",
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }
      ]
    },
    "UI/UX & Graphic Design": {
      icon: "🎯",
      color: "orange",
      skills: [
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
        { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
        { name: "CorelDraw", icon: SiCoreldraw, color: "#00A86B" },
        { name: "Canva", icon: SiCanva, color: "#00C4CC" }
      ]
    },
    "Other": {
      icon: "🛠️",
      color: "gray",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Github", icon: SiGithub, color: "#181717" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
        { name: "VSCode", icon: VscCode, color: "#007ACC" },
        { name: "Notion", icon: SiNotion, color: "#000000" }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
          border: "border-blue-200/50 dark:border-blue-700/50",
          text: "text-blue-600 dark:text-blue-400",
          pill: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
        };
      case "green":
        return {
          bg: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
          border: "border-green-200/50 dark:border-green-700/50",
          text: "text-green-600 dark:text-green-400",
          pill: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
        };
      case "purple":
        return {
          bg: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
          border: "border-purple-200/50 dark:border-purple-700/50",
          text: "text-purple-600 dark:text-purple-400",
          pill: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
        };
      case "orange":
        return {
          bg: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
          border: "border-orange-200/50 dark:border-orange-700/50",
          text: "text-orange-600 dark:text-orange-400",
          pill: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
        };
      default:
        return {
          bg: "from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20",
          border: "border-gray-200/50 dark:border-gray-600/50",
          text: "text-gray-600 dark:text-gray-400",
          pill: "bg-gray-100 text-gray-700 dark:bg-gray-700/30 dark:text-gray-300"
        };
    }
  };

  return (
    <section id="skills" className="py-12 bg-white dark:bg-gray-900 overflow-x-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Skills & Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div>
          {/* Skill Categories */}
          <div className="space-y-6">
            {Object.entries(skillsData).map(([category, data], index) => {
              const colors = getColorClasses(data.color);
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${colors.bg} p-6 rounded-2xl border ${colors.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{data.icon}</span>
                    <h3 className={`text-lg lg:text-xl font-semibold ${colors.text}`}>
                      {category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon;
                      return (
                        <motion.span
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.1 + skillIndex * 0.05 
                          }}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium ${colors.pill} hover:scale-105 transition-transform duration-200 flex items-center gap-1.5`}
                        >
                          <IconComponent 
                            className="text-sm" 
                          />
                          <span>{skill.name}</span>
                        </motion.span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Two-Row Sliding Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Tech Stack Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Technologies I work with daily
              </p>
            </div>

            {/* First Row - Right to Left */}
            <div className="relative overflow-hidden py-4 mb-4">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-8 whitespace-nowrap"
                style={{ width: "200%" }}
              >
                {/* First set */}
                {[
                  { name: "React", icon: SiReact, color: "#61DAFB" },
                  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
                  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                  { name: "Python", icon: SiPython, color: "#3776AB" },
                  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
                  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
                  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                  { name: "Django", icon: SiDjango, color: "#092E20" },
                  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
                  { name: "MySQL", icon: SiMysql, color: "#4479A1" }
                ].map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={`row1-${tech.name}-${index}`}
                      className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <IconComponent 
                        className="text-2xl" 
                        style={{ color: tech.color }}
                      />
                      <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
                
                {/* Duplicate set for seamless loop */}
                {[
                  { name: "React", icon: SiReact, color: "#61DAFB" },
                  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
                  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                  { name: "Python", icon: SiPython, color: "#3776AB" },
                  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
                  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
                  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                  { name: "Django", icon: SiDjango, color: "#092E20" },
                  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
                  { name: "MySQL", icon: SiMysql, color: "#4479A1" }
                ].map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={`row1-dup-${tech.name}-${index}`}
                      className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <IconComponent 
                        className="text-2xl" 
                        style={{ color: tech.color }}
                      />
                      <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Second Row - Left to Right */}
            <div className="relative overflow-hidden py-4">
              <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-8 whitespace-nowrap"
                style={{ width: "200%" }}
              >
                {/* First set */}
                {[
                  { name: "Git", icon: SiGit, color: "#F05032" },
                  { name: "GitHub", icon: SiGithub, color: "#181717" },
                  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
                  { name: "VSCode", icon: VscCode, color: "#007ACC" },
                  { name: "Vercel", icon: SiVercel, color: "#000000" },
                  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
                  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
                  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
                  { name: "C++", icon: SiCplusplus, color: "#00599C" },
                  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" }
                ].map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={`row2-${tech.name}-${index}`}
                      className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <IconComponent 
                        className="text-2xl" 
                        style={{ color: tech.color }}
                      />
                      <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
                
                {/* Duplicate set for seamless loop */}
                {[
                  { name: "Git", icon: SiGit, color: "#F05032" },
                  { name: "GitHub", icon: SiGithub, color: "#181717" },
                  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
                  { name: "VSCode", icon: VscCode, color: "#007ACC" },
                  { name: "Vercel", icon: SiVercel, color: "#000000" },
                  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
                  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
                  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
                  { name: "C++", icon: SiCplusplus, color: "#00599C" },
                  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" }
                ].map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={`row2-dup-${tech.name}-${index}`}
                      className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <IconComponent 
                        className="text-2xl" 
                        style={{ color: tech.color }}
                      />
                      <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl border border-blue-100/50 dark:border-blue-800/30">
              <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-1">30+</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Technologies</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Across all stacks</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl border border-green-100/50 dark:border-green-800/30">
              <div className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-1">5</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Core Areas</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Frontend to Backend</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-xl border border-purple-100/50 dark:border-purple-800/30">
              <div className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-1">3+</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Years Experience</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Continuous learning</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
