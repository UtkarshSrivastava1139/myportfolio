"use client";

import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Utkarsh Srivastava - Resume
              </h1>
              
              <a
                href="/resume.pdf"
                download="Utkarsh_Srivastava_Resume.pdf"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Resume Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="max-w-4xl mx-auto">
          {/* PDF Viewer */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Resume Preview
                </h2>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Click and drag to pan • Scroll to zoom
                </div>
              </div>
            </div>
            
            {/* PDF Embed */}
            <div className="relative" style={{ height: "80vh" }}>
              <iframe
                src="/resume.pdf"
                className="w-full h-full border-0"
                title="Utkarsh Srivastava Resume"
              />
            </div>
          </div>

          {/* Alternative Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can't view the resume above?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Download the PDF directly to view it in your preferred application.
              </p>
              <a
                href="/resume.pdf"
                download="Utkarsh_Srivastava_Resume.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Download size={20} />
                Download Resume PDF
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumePage;
