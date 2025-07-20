"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Award, Trophy, Users, Download, ExternalLink, ChevronDown, ChevronUp, Medal, Eye, X } from "lucide-react";

interface AchievementItem {
  title: string;
  description: string;
  date: string;
  award: string;
  details: string;
  downloadLink?: string;
  verifyLink?: string;
}

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
}

interface AchievementSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  items: AchievementItem[];
}

const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openSections, setOpenSections] = useState<string[]>([]);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [certificateFilter, setCertificateFilter] = useState<string>("all");

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  // Certificate data - you can expand this array as needed
  const certificates: Certificate[] = [
    {
      id: "1",
      name: "Python (Basic)",
      issuer: "HackerRank",
      date: "2024",
      image: "/certificates/Certificate Python(Basic).png",
      category: "Programming"
    },
    {
      id: "2", 
      name: "GSSoC 2024 Extended Contributor",
      issuer: "GirlScript Summer of Code",
      date: "2024",
      image: "/certificates/Utkarsh_Srivastava_Badge_Contributor_GSSoC2024-Extd.png",
      category: "Open Source"
    },
    {
      id: "3",
      name: "Build with India",
      issuer: "Build with India",
      date: "2024",
      image: "/certificates/Build with India.png",
      category: "Hackathon"
    },
    {
      id: "4",
      name: "Campus Ambassador - BITS Pilani",
      issuer: "BITS Pilani",
      date: "2024",
      image: "/certificates/Campus Ambassdor - BITS.jpg",
      category: "Ambassador"
    },
    {
      id: "5",
      name: "University Conclave Volunteer",
      issuer: "JSS University",
      date: "2024",
      image: "/certificates/Certificate for Volunterring - University Conclave.png",
      category: "Volunteer"
    },
    {
      id: "6",
      name: "Campus Ambassador - IIT BHU CodeFest",
      issuer: "IIT BHU",
      date: "2025",
      image: "/certificates/Certificate IIT BHU CA Code Fest.jpeg",
      category: "Ambassador"
    },
    {
      id: "7",
      name: "2nd Prize - Poster Presentation",
      issuer: "JSS University",
      date: "2024",
      image: "/certificates/Certificate of Achievement Poster Presentation 2nd prize.png",
      category: "Award"
    },
    {
      id: "8",
      name: "Appreciation - CashKaro",
      issuer: "CashKaro",
      date: "2024",
      image: "/certificates/Certificate of Appreciation - CashKaro.png",
      category: "Appreciation"
    },
    {
      id: "9",
      name: "IEEE GitHub Event Participation",
      issuer: "IEEE",
      date: "2024",
      image: "/certificates/Certificate of Appreciation - IEEE Github Event.png",
      category: "Workshop"
    },
    {
      id: "10",
      name: "CSE Department Conclave",
      issuer: "JSS University - CSE Dept",
      date: "2024",
      image: "/certificates/Certificate of Participation - Conclave of Dept. of CSE.png",
      category: "Event"
    },
    {
      id: "11",
      name: "School of Science & Humanities Conclave",
      issuer: "JSS University",
      date: "2024",
      image: "/certificates/Certificate of Participation - Conclave of School of Science & Humanities.png",
      category: "Event"
    },
    {
      id: "12",
      name: "TOP 10 Teams - Convergex Hackathon",
      issuer: "Convergex",
      date: "2024",
      image: "/certificates/Certificate of Participation - TOP 10 Teams Covergex Hackathon Dec 2024.png",
      category: "Hackathon"
    },
    {
      id: "13",
      name: "Poster Presentation Participation",
      issuer: "JSS University",
      date: "2024",
      image: "/certificates/Certificate of Participation Poster Presentation.png",
      category: "Event"
    },
    {
      id: "14",
      name: "IEEE WebMaster Volunteer",
      issuer: "IEEE",
      date: "2024",
      image: "/certificates/Certificate of Volunteer - IEEE WebMaster.jpg",
      category: "Volunteer"
    },
    {
      id: "15",
      name: "Samsung Solve for Tomorrow",
      issuer: "Samsung",
      date: "2024",
      image: "/certificates/Certificate-of-Participation Samsung Solve for Tomorrow.jpg",
      category: "Competition"
    },
    {
      id: "16",
      name: "Creative Member Newsletter",
      issuer: "JSS University",
      date: "2024",
      image: "/certificates/Creative Member Newsletter Certificate.png",
      category: "Creative"
    },
    {
      id: "17",
      name: "CSIS Ambassador",
      issuer: "CSIS",
      date: "2025",
      image: "/certificates/CSIS ambassdor.png",
      category: "Ambassador"
    },
    {
      id: "18",
      name: "Hack4Bihar Internship Offer",
      issuer: "Hack4Bihar",
      date: "2025",
      image: "/certificates/Hack4Bihar Offer Letter.jpeg",
      category: "Internship"
    },
    {
      id: "19",
      name: "IEEE India Council Participation",
      issuer: "IEEE India Council",
      date: "2024",
      image: "/certificates/IEEE INDIA COUNCIL participation.jpg",
      category: "Workshop"
    },
    {
      id: "20",
      name: "IEEE Xtreme Programming Contest",
      issuer: "IEEE",
      date: "2024",
      image: "/certificates/ieee xtreme.jpg",
      category: "Competition"
    },
    {
      id: "21",
      name: "IGDTUW Hackathon",
      issuer: "IGDTUW",
      date: "2024",
      image: "/certificates/IGDTUW Hackathon.png",
      category: "Hackathon"
    },
    {
      id: "22",
      name: "StarkSeek Internship Offer",
      issuer: "StarkSeek",
      date: "2024",
      image: "/certificates/StarkSeek Offer Letter.jpeg",
      category: "Internship"
    },
    {
      id: "23",
      name: "YESIST12 Ambassador",
      issuer: "IEEE YESIST12",
      date: "2025",
      image: "/certificates/yesist ambassdor.jpeg",
      category: "Ambassador"
    },
    // Add more certificates here as you get them
  ];

  const certificateCategories = ["all", ...Array.from(new Set(certificates.map(cert => cert.category)))];
  const filteredCertificates = certificateFilter === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === certificateFilter);

  const achievements: AchievementSection[] = [
    {
      id: "awards",
      title: "Awards & Competitions",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      items: [
        {
          title: "🥇 1st Prize – Project Presentation, IEEE JSS Noida",
          description: "Recognized for innovation and technical clarity in presenting the ROOTS platform",
          date: "2024",
          award: "Winner",
          details: "Presented ROOTS – For a Better Earth at intra-university IEEE event with technical excellence",
        },
        {
          title: "🥈 2nd Prize – Poster Presentation, JSS University Day 2024",
          description: "Awarded for excellence in visual storytelling and technical explanation of AI in healthcare",
          date: "2024",
          award: "2nd Place",
          details: "Demonstrated AI applications in healthcare through compelling visual presentation",
          verifyLink: "/certificates/Certificate of Achievement Poster Presentation 2nd prize.png",
        },
        {
          title: "🌍 Finalist – IEEE YESIST12 2025 (Malaysia)",
          description: "Selected among top 30 global teams for Grand Finale at IEEE SB UKM, Malaysia",
          date: "2025",
          award: "Global Finalist",
          details: "Out of 1000+ entries, ROOTS project reached Grand Finale for sustainable innovation",
          verifyLink: "/certificates/yesist ambassdor.jpeg",
        },
        {
          title: "🏅 Top 5 – Convergex Hackathon 2024",
          description: "Recognized for innovative solutions in sustainable tech",
          date: "2024",
          award: "Top 5",
          details: "ROOTS project reached pre-final and final rounds in competitive sustainability hackathon",
          verifyLink: "/certificates/Certificate of Participation - TOP 10 Teams Covergex Hackathon Dec 2024.png",
        },
      ],
    },
    {
      id: "leadership",
      title: "Leadership & Campus Roles",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-400 to-purple-500",
      items: [
        {
          title: "👨‍💻 Webmaster & Technical Head – IEEE JSSUN Student Branch",
          description: "Led website development and technical strategy for student engagement",
          date: "2024 - Present",
          award: "Leadership Role",
          details: "Spearheaded official website development and coordinated with event teams for technical initiatives",
          verifyLink: "/certificates/Certificate of Volunteer - IEEE WebMaster.jpg",
        },
        {
          title: "💡 Technical Head – Entrepreneurship Development Cell, JSS University",
          description: "Foundational role in setting up newly launched EDC",
          date: "2024 - Present",
          award: "Leadership Role",
          details: "Led cross-functional technical initiatives to promote startup culture and innovation",
        },
        {
          title: "🏅 Creative Excellence – Editorial Board, JSS University",
          description: "Creative Team Head for university publications and digital media",
          date: "2024",
          award: "Creative Head",
          details: "Led design, editing, and production of university newsletter earning multiple recognitions",
          verifyLink: "/certificates/Creative Member Newsletter Certificate.png",
        },
        {
          title: "🎖 Event Organization – 10+ University Conclaves",
          description: "Key roles in planning and executing high-impact university events",
          date: "2023 - 2025",
          award: "Event Lead",
          details: "Managed logistics, design, and execution for tech summits and IEEE-hosted competitions",
          verifyLink: "/certificates/Certificate for Volunterring - University Conclave.png",
        },
      ],
    },
    {
      id: "ambassadorships",
      title: "Global Ambassador Roles",
      icon: <Award className="w-6 h-6" />,
      color: "from-green-400 to-blue-500",
      items: [
        {
          title: "🚀 IEEE YESIST12 2025 Campus Ambassador",
          description: "Campus representative for IEEE's premier innovation challenge",
          date: "2025",
          award: "Ambassador",
          details: "Promoted participation and guided students for global sustainability competition",
          verifyLink: "/certificates/yesist ambassdor.jpeg",
        },
        {
          title: "🚀 IEEE Xtreme 19.0 Campus Ambassador",
          description: "Representative for IEEE's 24-hour programming competition",
          date: "2024",
          award: "Ambassador",
          details: "Facilitated student participation in world's largest programming contest",
          verifyLink: "/certificates/ieee xtreme.jpg",
        },
        {
          title: "🚀 IIT BHU Tech Fest – Codefest '25 Ambassador",
          description: "Campus ambassador for premier IIT technical festival",
          date: "2025",
          award: "Ambassador",
          details: "Promoted technical competitions and workshops for student community",
        },
        {
          title: "🚀 BITS Pilani – APOGEE Tech Fest Ambassador",
          description: "Representative for BITS Pilani's flagship technical festival",
          date: "2025",
          award: "Ambassador",
          details: "Guided students for participation in national-level technical competitions",
        },
      ],
    },
    {
      id: "certifications",
      title: "Certifications & Open Source",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      items: [
        {
          title: "✔️ Python (Verified) – HackerRank",
          description: "Verified Python developer badge for programming proficiency",
          date: "2024",
          award: "Certification",
          details: "Demonstrated core Python programming skills and problem-solving ability",
          verifyLink: "#",
        },
        {
          title: "💻 Open Source Contributor – GSSoC 2024",
          description: "Contributed to platforms under GirlScript Summer of Code",
          date: "2024",
          award: "Contributor",
          details: "Engaged in issue resolution, UI fixes, and community interaction on GitHub",
        },
        {
          title: "💻 Open Source Contributor – SWOC 2025",
          description: "Active contributor in Social Winter of Code",
          date: "2025",
          award: "Contributor",
          details: "Contributed to social impact projects with code improvements and feature additions",
        },
      ],
    },
    {
      id: "certificates",
      title: "Certificates Gallery",
      icon: <Medal className="w-6 h-6" />,
      color: "from-indigo-400 to-cyan-500",
      items: [], // This will be handled separately
    },
  ];

  return (
    <section id="achievements" className="py-8 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my accomplishments, awards, and recognition in the tech community.
          </p>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * sectionIndex }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-5 flex items-center justify-between hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${section.color} text-white mr-3`}>
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">{section.title}</h3>
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {openSections.includes(section.id) ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openSections.includes(section.id) ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {section.id === "certificates" ? (
                  // Certificates Gallery
                  <div className="p-5 pt-0">
                    {/* Certificate Filter */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {certificateCategories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setCertificateFilter(category)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                            certificateFilter === category
                              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                          }`}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                      ))}
                    </div>

                    {/* Certificates Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                      {filteredCertificates.map((certificate, index) => (
                        <motion.div
                          key={certificate.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={
                            openSections.includes(section.id)
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.9 }
                          }
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                          className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg cursor-pointer"
                          onClick={() => setSelectedCertificate(certificate)}
                        >
                          <div className="aspect-[4/3] relative overflow-hidden">
                            <img
                              src={certificate.image}
                              alt={certificate.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, sans-serif' font-size='12'%3E%E2%9A%A0%EF%B8%8F Certificate%3C/text%3E%3C/svg%3E";
                              }}
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <Eye className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div className="p-2">
                            <h5 className="font-semibold text-xs text-gray-900 dark:text-white truncate mb-1">
                              {certificate.name}
                            </h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400 truncate mb-1">
                              {certificate.issuer}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500 dark:text-gray-500">
                                {certificate.date}
                              </span>
                              <span className="px-1.5 py-0.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium border border-blue-200/50 dark:border-blue-700/50">
                                {certificate.category}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {filteredCertificates.length === 0 && (
                      <div className="text-center py-8">
                        <Medal className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 dark:text-gray-400">No certificates found in this category</p>
                      </div>
                    )}

                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Showing {filteredCertificates.length} of {certificates.length} certificates
                      </p>
                    </div>
                  </div>
                ) : (
                  // Regular achievement items
                  <div className="p-5 pt-0">
                    <div className="grid gap-4">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            openSections.includes(section.id) 
                              ? { opacity: 1, y: 0 } 
                              : { opacity: 0, y: 20 }
                          }
                          transition={{ duration: 0.5, delay: 0.1 * itemIndex }}
                          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-5 shadow-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="text-md font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-2">
                                {item.title}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">{item.description}</p>
                              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                                <span>{item.date}</span>
                                <span className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium border border-blue-200/50 dark:border-blue-700/50">
                                  {item.award}
                                </span>
                              </div>
                            </div>
                            
                            {(item.downloadLink || item.verifyLink) && (
                              <div className="flex gap-2 mt-4 md:mt-0">
                                {item.downloadLink && (
                                  <a
                                    href={item.downloadLink}
                                    download
                                    className="flex items-center gap-1 px-3 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm"
                                  >
                                    <Download className="w-4 h-4" />
                                    Download
                                  </a>
                                )}
                                {item.verifyLink && (
                                  <a
                                    href={item.verifyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 px-3 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors text-sm"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                    {item.verifyLink.includes('/certificates/') ? 'View Certificate' : 'Verify'}
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                          
                          <p className="text-gray-700 dark:text-gray-400 text-xs leading-snug">
                            {item.details}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="text-center p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl text-white">
            <div className="text-2xl font-bold mb-1">4+</div>
            <div className="text-yellow-100 text-sm">Awards Won</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl text-white">
            <div className="text-2xl font-bold mb-1">6+</div>
            <div className="text-blue-100 text-sm">Ambassador Roles</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl text-white">
            <div className="text-2xl font-bold mb-1">10+</div>
            <div className="text-green-100 text-sm">Events Organized</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-indigo-400 to-cyan-500 rounded-xl text-white">
            <div className="text-2xl font-bold mb-1">{certificates.length}+</div>
            <div className="text-indigo-100 text-sm">Certificates</div>
          </div>
        </motion.div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedCertificate.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedCertificate.issuer} • {selectedCertificate.date}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              <div className="p-6">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, sans-serif' font-size='16'%3E%E2%9A%A0%EF%B8%8F Certificate Image Not Available%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
