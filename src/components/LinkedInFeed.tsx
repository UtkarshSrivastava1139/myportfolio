"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const LinkedInFeed = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [useEmbeds, setUseEmbeds] = useState(false);
  const [showAllEmbeds, setShowAllEmbeds] = useState(false);

  // Real LinkedIn posts data with embed capability
  const linkedInPosts = [
    {
      id: 1,
      content: "🎓 From Stepping in with Curiosity to Stepping Out with Confidence — My First Year Journey at JSS University 🚀 On 21st August 2024, I entered the MPH of JSS UNIVERSITY, NOIDA, dressed formally, knowing no one but full of dreams. I sat front-row during ABHYUDAY Orientation program, eager to dive in — and what a year it's been! #FirstYearRecap #StudentLife #Hackathons",
      date: "3 days ago",
      postUrl: "https://www.linkedin.com/posts/utkarshsri1139_firstyearrecap-studentlife-hackathons-activity-7345987098518220801-_HP_?utm_source=share&utm_medium=member_desktop",
      embedUrl: "",
      embedHeight: "",
      engagement: "high",
      hashtags: ["#FirstYearRecap", "#StudentLife", "#Hackathons"],
    },
    {
      id: 2,
      content: "🎉 From Curiosity to Malaysia: Our First-Year Leap into IEEE YESIST12 Grande Finale! 🌍🚀 As a first-year student, I've been exploring every opportunity—participating, learning, and challenging myself to grow beyond the classroom. #IEEEYESIST12 #InnovationChallenge #IEEE",
      date: "2 weeks ago",
      postUrl: "https://www.linkedin.com/posts/utkarshsri1139_ieeeyesist12-innovationchallenge-ieee-activity-7334906758479388672-RVfR?utm_source=share&utm_medium=member_desktop",
      embedUrl: "",
      embedHeight: "",
      engagement: "high",
      hashtags: ["#IEEEYESIST12", "#InnovationChallenge", "#IEEE"],
    },
    {
      id: 3,
      content: "🚀 From Idea to Impact – Winning 1st Prize at Zealicon 2025! Zealicon 2025 wasn't just about tech and fun — it was a platform to share real ideas that matter. I had the incredible opportunity to present my project ROOTS – For a Better Earth at the IEEE JSSATEN Student Branch Project/Paper Presentation event, and I'm thrilled to share that I won the 1st prize! 🌱✨ #Zealicon2025 #IEEE #PaperPresentation",
      date: "3 weeks ago",
      postUrl: "https://www.linkedin.com/posts/utkarshsri1139_zealicon2025-ieee-paperpresentation-activity-7331506848602234880-LmL9?utm_source=share&utm_medium=member_desktop",
      embedUrl: "",
      embedHeight: "",
      engagement: "high",
      hashtags: ["#Zealicon2025", "#IEEE", "#PaperPresentation"],
    },
    {
      id: 1,
      content: "� Just completed an amazing project - ROOTS! A comprehensive platform connecting students with opportunities, featuring real-time chat, advanced search, and seamless user experience. Built with React, Node.js, and MongoDB. Excited to share this journey of turning ideas into reality! #WebDevelopment #React #FullStack #StudentPlatform",
      date: "3 weeks ago",
      postUrl: "https://www.linkedin.com/in/utkarshsri1139/",
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7339575204282605569?collapsed=1",
      embedHeight: "543",
      engagement: "high",
      hashtags: ["#WebDevelopment", "#React", "#FullStack"],
    },
    {
      id: 2,
      content: "🏆 Proud to announce our Top 5 finish at Convergex Hackathon! 36 hours of intense coding, problem-solving, and teamwork. Our solution focused on revolutionizing digital healthcare through innovative UI/UX design. Grateful for this incredible learning experience! #Hackathon #Innovation #Healthcare #UIUXDesign",
      date: "2 weeks ago",
      postUrl: "https://www.linkedin.com/in/utkarshsri1139/",
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7342246580357386243?collapsed=1",
      embedHeight: "670",
      engagement: "high",
      hashtags: ["#Hackathon", "#Innovation", "#Healthcare"],
    },
    {
      id: 3,
      content: "🎖️ Honored to receive the 2nd Prize in Poster Presentation at our university symposium! Presenting research on sustainable technology solutions was an incredible experience. Grateful for the recognition and the opportunity to contribute to meaningful discussions about our future. #Research #Sustainability #Innovation #AcademicExcellence",
      date: "1 month ago",
      postUrl: "https://www.linkedin.com/in/utkarshsri1139/",
      embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7304940111207571456?collapsed=1",
      embedHeight: "613",
      engagement: "high",
      hashtags: ["#Research", "#Sustainability", "#Innovation"],
    },
    // Add the remaining 6 unique posts here to reach 9 total
    {
      id: 4,
      content: "🚀 Thrilled to share my experience as IEEE YESIST12 Campus Ambassador! Leading sustainability initiatives and promoting innovation challenges has been incredibly rewarding. Connecting students with global opportunities and fostering environmental consciousness through technology. #IEEE #YESIST12 #Sustainability #Innovation",
      date: "1 week ago",
      postUrl: "https://www.linkedin.com/in/utkarshsri1139/",
      embedUrl: "", // Placeholder - need actual embed URL
      embedHeight: "",
      engagement: "high",
      hashtags: ["#IEEE", "#YESIST12", "#Sustainability"],
    },
    {
      id: 5,
      content: "🌟 Exciting update from my role as IEEE JSSUN Webmaster! Successfully launched our new interactive website with enhanced user experience and modern design. Leading technical initiatives and coordinating with event teams has been an amazing journey of growth and learning. #IEEE #WebDevelopment #Leadership #StudentLife",
      date: "1 month ago",
      postUrl: "https://www.linkedin.com/in/utkarshsri1139/",
      embedUrl: "", // Website screenshots - can't be embedded
      embedHeight: "",
      engagement: "medium",
      hashtags: ["#IEEE", "#WebDevelopment", "#Leadership"],
    },
    {
      id: 6,
      content: "🎯 Excited to share my latest project accomplishment! Working on innovative solutions that bridge the gap between technology and user experience. #TechInnovation #UserExperience #Development",
      date: "2 months ago",
      postUrl: "https://www.linkedin.com/in/utkarshsri1139/",
      embedUrl: "", // Placeholder - need actual embed URL
      embedHeight: "",
      engagement: "medium",
      hashtags: ["#TechInnovation", "#UserExperience"],
    },
    {
      id: 7,
      content: "📊 Data-driven insights are transforming how we approach problem-solving in tech. Sharing my thoughts on the importance of analytics in modern development. #DataScience #Analytics #TechStrategy",
      date: "2 months ago",
      postUrl: "https://www.linkedin.com/in/utkarshsri1139/",
      embedUrl: "", // Placeholder - need actual embed URL
      embedHeight: "",
      engagement: "medium",
      hashtags: ["#DataScience", "#Analytics"],
    },
    {
      id: 8,
      content: "🌐 The future of web development is here! Exploring cutting-edge frameworks and methodologies that are reshaping how we build digital experiences. #WebDev #Innovation #FutureTech",
      date: "3 months ago",
      postUrl: "https://www.linkedin.com/in/utkarshsri1139/",
      embedUrl: "", // Placeholder - need actual embed URL
      embedHeight: "",
      engagement: "high",
      hashtags: ["#WebDev", "#Innovation"],
    },
    {
      id: 9,
      content: "🔧 Continuous learning is key in technology. Sharing my journey of exploring new tools and technologies that enhance development efficiency. #ContinuousLearning #TechGrowth #Development",
      date: "3 months ago",
      postUrl: "https://www.linkedin.com/in/utkarshsri1139/",
      embedUrl: "", // Placeholder - need actual embed URL
      embedHeight: "",
      engagement: "medium",
      hashtags: ["#ContinuousLearning", "#TechGrowth"],
    },
  ];

  const postsToShow = linkedInPosts.slice(0, 3);
  const embeddablePosts = linkedInPosts.filter(post => post.embedUrl);
  const initialEmbedCount = 3;
  const embedsToShow = showAllEmbeds ? embeddablePosts : embeddablePosts.slice(0, initialEmbedCount);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % postsToShow.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [postsToShow.length]);

  const getEngagementColor = (engagement: string) => {
    switch (engagement) {
      case "high": return "from-green-400 to-blue-500";
      case "medium": return "from-yellow-400 to-orange-500";
      default: return "from-gray-400 to-gray-600";
    }
  };

  const truncateContent = (content: string, maxLength: number) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  return (
    <section id="linkedin-feed" className="py-12 bg-white dark:bg-gray-900 overflow-x-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Latest from LinkedIn
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Stay updated with my latest thoughts, projects, and insights from the world of web development.
          </p>
          
          {/* Toggle between Custom and Embed View */}
          <div className="flex items-center justify-center mt-8 gap-3">
            <span className={`text-sm font-medium ${!useEmbeds ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
              Custom Design
            </span>
            <button
              onClick={() => setUseEmbeds(!useEmbeds)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                useEmbeds ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  useEmbeds ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${useEmbeds ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
              Real LinkedIn Posts
            </span>
          </div>
        </motion.div>

        {/* LinkedIn Embed View */}
        {useEmbeds ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {embeddablePosts.length > 0 ? (
              <>
                {/* Embed Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                  {embedsToShow.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-full max-w-sm"
                    >
                      <iframe 
                        src={post.embedUrl}
                        height={post.embedHeight} 
                        width="504" 
                        frameBorder="0" 
                        allowFullScreen={true}
                        title={`Embedded LinkedIn post ${index + 1}`}
                        className="w-full rounded-lg shadow-lg"
                        style={{ maxWidth: '100%', minHeight: post.embedHeight + 'px' }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* View More Button */}
                {embeddablePosts.length > initialEmbedCount && (
                  <div className="text-center">
                    <button
                      onClick={() => setShowAllEmbeds(!showAllEmbeds)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium"
                    >
                      {showAllEmbeds ? (
                        <>
                          <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          Show Less
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          View More ({embeddablePosts.length - initialEmbedCount} more posts)
                        </>
                      )}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  No embeddable posts available. Most LinkedIn posts with multiple images or complex content can't be embedded.
                </p>
                <button
                  onClick={() => setUseEmbeds(false)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  Switch to Custom Design
                </button>
              </div>
            )}
            
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {embeddablePosts.length > 0 
                  ? `Real LinkedIn posts embedded directly from the platform (${embeddablePosts.length} embeddable posts)`
                  : "LinkedIn only allows embedding of simple posts (text-only or single image)"
                }
              </p>
              <a
                href="https://www.linkedin.com/in/utkarshsri1139/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                View Full LinkedIn Profile
              </a>
            </div>
          </motion.div>
        ) : (
          <>
        {/* Mobile Carousel */}
        <div className="md:hidden overflow-x-hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {postsToShow.map((post, index) => (
                <div key={post.id} className="w-full flex-shrink-0 px-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 * index }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg card-hover"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                          <Image
                            src="/profile.png"
                            alt="Utkarsh Srivastava"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                              const target = e.target as HTMLElement;
                              target.style.display = 'none';
                              target.parentElement!.innerHTML = '<div class="text-white font-bold text-sm">US</div>';
                            }}
                          />
                        </div>
                        <div className="ml-3">
                          <h3 className="font-semibold text-gray-900 dark:text-white">Utkarsh Srivastava</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getEngagementColor(post.engagement)}`}></div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {truncateContent(post.content, 200)}
                    </p>
                    
                    <div className="flex items-center justify-end pt-4 border-t border-gray-100 dark:border-gray-700">
                      <a
                        href={post.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View on LinkedIn
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {postsToShow.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-blue-600 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsToShow.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                    <Image
                      src="/profile.png"
                      alt="Utkarsh Srivastava"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '<div class="text-white font-bold text-sm">US</div>';
                      }}
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Utkarsh Srivastava</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getEngagementColor(post.engagement)}`}></div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {truncateContent(post.content, 250)}
              </p>
              
              <div className="flex items-center justify-end pt-4 border-t border-gray-100 dark:border-gray-700">
                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View on LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to see more updates?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Follow me on LinkedIn for regular updates about my projects, insights, and the latest in web development.
            </p>
            <a
              href="https://www.linkedin.com/in/utkarshsri1139/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow on LinkedIn
            </a>
          </div>
        </motion.div>
        </>
        )}
      </div>
    </section>
  );
};

export default LinkedInFeed;
