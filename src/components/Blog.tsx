"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const Blog = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices and Patterns",
      excerpt: "Learn the essential patterns and best practices for building large-scale React applications that are maintainable, performant, and scalable.",
      content: "In this comprehensive guide, I'll share my experience building React applications at scale, covering component architecture, state management, performance optimization, and more...",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Architecture", "Performance"],
      featured: true,
      image: "/api/placeholder/600/400",
    },
    {
      id: 2,
      title: "The Future of Web Development: AI Integration and Beyond",
      excerpt: "Exploring how artificial intelligence is transforming web development and what it means for developers in 2024 and beyond.",
      content: "As we step into 2024, the landscape of web development continues to evolve rapidly. One of the most significant trends is the integration of AI technologies...",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["AI", "WebDev", "Future", "Trends"],
      featured: false,
      image: "/api/placeholder/600/400",
    },
    {
      id: 3,
      title: "Mastering Next.js 14: App Router and Server Components",
      excerpt: "A deep dive into Next.js 14's new App Router and Server Components, with practical examples and migration strategies.",
      content: "Next.js 14 brings significant improvements to the App Router and Server Components. In this article, I'll walk you through the key features and show you how to leverage them...",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["Next.js", "React", "SSR", "Performance"],
      featured: true,
      image: "/api/placeholder/600/400",
    },
    {
      id: 4,
      title: "TypeScript Tips for React Developers",
      excerpt: "Essential TypeScript patterns and techniques that every React developer should know to write better, more maintainable code.",
      content: "TypeScript has become an essential tool for React developers. In this post, I'll share some advanced TypeScript patterns that can make your React code more robust...",
      date: "2023-12-28",
      readTime: "5 min read",
      tags: ["TypeScript", "React", "Tips", "Best Practices"],
      featured: false,
      image: "/api/placeholder/600/400",
    },
    {
      id: 5,
      title: "Building a Real-time Chat Application with WebSockets",
      excerpt: "Step-by-step guide to creating a real-time chat application using WebSockets, Node.js, and React.",
      content: "Real-time applications are increasingly important in today's web landscape. In this tutorial, I'll show you how to build a chat application from scratch...",
      date: "2023-12-20",
      readTime: "12 min read",
      tags: ["WebSockets", "Node.js", "React", "Real-time"],
      featured: false,
      image: "/api/placeholder/600/400",
    },
    {
      id: 6,
      title: "Database Design Patterns for Modern Web Applications",
      excerpt: "Exploring different database design patterns and when to use them in your web applications.",
      content: "Choosing the right database design pattern is crucial for the success of any web application. In this article, I'll discuss various patterns and their use cases...",
      date: "2023-12-15",
      readTime: "7 min read",
      tags: ["Database", "Design Patterns", "Architecture", "Backend"],
      featured: false,
      image: "/api/placeholder/600/400",
    },
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTagColor = (tag: string) => {
    const colors = {
      React: "bg-blue-100 text-blue-800",
      JavaScript: "bg-yellow-100 text-yellow-800",
      TypeScript: "bg-indigo-100 text-indigo-800",
      "Next.js": "bg-black text-white",
      AI: "bg-purple-100 text-purple-800",
      WebDev: "bg-green-100 text-green-800",
      Performance: "bg-red-100 text-red-800",
      Architecture: "bg-gray-100 text-gray-800",
      "Node.js": "bg-emerald-100 text-emerald-800",
      Database: "bg-orange-100 text-orange-800",
    };
    return colors[tag as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Insights
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sharing my thoughts, experiences, and insights about web development, technology trends, and best practices.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            Featured Articles
          </motion.h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover group"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-4xl opacity-20 font-bold">
                    {post.title.split(' ').slice(0, 2).join(' ')}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Recent Articles
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm card-hover group"
              >
                <div className="relative h-32 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-white text-2xl opacity-20 font-bold">
                    {post.title.split(' ').slice(0, 2).join(' ')}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium group-hover:gap-1 transition-all">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to get notified about new articles, tutorials, and insights about web development.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
