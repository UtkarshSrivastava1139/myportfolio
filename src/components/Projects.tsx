"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "ROOTS – For a Better Earth",
      description: "AI-powered sustainability platform promoting eco-friendly actions through gamification and community participation. Features eco-points, AI-based deed verification, weather updates, pledges, and leaderboard system.",
      image: "/projects/Roots.png",
      technologies: ["Next.js", "Tailwind CSS", "Flask", "Python", "MongoDB", "YoloV8", "Gemini API", "AI/ML"],
      liveLink: "https://root4abetterearth.xyz",
      githubLink: "#",
      featured: true,
      date: "Nov 2024",
      achievement: "🏆 Selected in Top 30/3000+ teams globally for IEEE YESIST12 2025 Grand Finale in Malaysia"
    },
    {
      id: 2,
      title: "Hack4Bihar – Official Website",
      description: "Official website for a national-level hackathon focused on seamless registration and large-scale visibility. Designed 70%+ frontend, improved SEO & performance (+40%), and sign-ups (+80%).",
      image: "/projects/hack4bihar.png",
      technologies: ["Next.js", "Tailwind CSS", "Django", "Python", "Figma"],
      liveLink: "https://hack4bihar.live",
      githubLink: "#",
      featured: true,
      date: "Jan 2025",
      achievement: "Contributed 100+ Git commits; handles thousands of visits daily"
    },
    {
      id: 3,
      title: "ClubVerse – Campus Community Platform",
      description: "Centralized hub for discovering societies, clubs, and events with real-time updates. Features favorites system, community chat, secure OTP verification, and personalized dashboard for complete campus experience.",
      image: "/projects/clubverse.png",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      liveLink: "https://www.figma.com/proto/Q4C41HR3GwmGdrWtWyBGcE/ClubVerse?node-id=43-67&t=VYhOjv9UvyaPqTOh-1&starting-point-node-id=43%3A65",
      featured: false,
      date: "Mar 2025",
      achievement: "Complete prototype with all-in-one campus solution"
    },
    {
      id: 4,
      title: "Starkseek – Company Website",
      description: "Responsive and SEO-optimized company site with focus on UI/UX and performance. Integrated APIs and improved user engagement through smooth navigation.",
      image: "/projects/starkseek.png",
      technologies: ["React", "Tailwind CSS",  "Javascript", "CSS", "HTML"],
      liveLink: "https://starkseek.com",
      githubLink: "#",
      featured: false,
      date: "Dec 2024"
    },
    {
      id: 5,
      title: "IEEE JSSUN SB – Official Website",
      description: "Official website for the IEEE JSS University Student Branch to showcase events, announcements, and team activities with real-time updates and responsive design.",
      image: "/projects/ieee jssun sb.png",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      liveLink: "https://ieeejssuninoida.vercel.app",
      githubLink: "#",
      featured: false,
      date: "Jan 2025"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-8 bg-gray-50 dark:bg-gray-800 overflow-x-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github size={16} className="text-white" />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">{project.title}</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{project.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-snug">{project.description}</p>
                {project.achievement && (
                  <div className="mb-3 p-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800/30 rounded-lg">
                    <p className="text-green-700 dark:text-green-400 text-xs font-medium">{project.achievement}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium border border-blue-200/50 dark:border-blue-700/50 hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-2 right-2 flex gap-1.5">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={14} className="text-white" />
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github size={14} className="text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-md font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">{project.title}</h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{project.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 leading-snug">{project.description}</p>
                  {project.achievement && (
                    <div className="mb-3 p-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800/30 rounded-md">
                      <p className="text-blue-700 dark:text-blue-400 text-xs font-medium">{project.achievement}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium border border-blue-200/50 dark:border-blue-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium border border-blue-200/50 dark:border-blue-700/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/UtkarshSrivastava1139"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
