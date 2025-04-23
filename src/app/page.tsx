"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const name = "Utkarsh Srivastava";
  
  const title = "Aspiring Full Stack Developer";
  
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const taglineText = "Creating digital experiences that matter.";
  
  // Social media links
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/utkarshsri1139",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/UtkarshSrivastava1139",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/utkarshsri1139",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com/utkarshsri1139",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.044-.977-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"></path>
        </svg>
      ),
    },
  ];

  // Static background component to prevent hydration mismatch
  function AnimatedBackground() {
    if (!isClient) {
      // Server-side or initial render - return minimal content to avoid hydration issues
      return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
        </div>
      );
    }
    
    // Only render the full animated background on the client after hydration
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Dark themed animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black animate-gradient-slow"></div>
        
        {/* Animated lines */}
        <div className="absolute inset-0">
          <div className="grid-lines"></div>
        </div>
        
        {/* Subtle stars effect - Only rendered client-side */}
        <div className="stars-container absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i}
              className="star"
              style={{
                width: `${(i % 2) + 1}px`,
                height: `${(i % 2) + 1}px`,
                top: `${(i % 100)}%`,
                left: `${(i % 100)}%`,
                animationDelay: `${(i % 10)}s`,
                animationDuration: `${(i % 5) + 5}s`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Glow effects */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-900/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/20 rounded-full filter blur-3xl opacity-30"></div>
        
        {/* Dark noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.015] mix-blend-soft-light"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden relative text-white isolation-auto">
      {/* Dynamic Background */}
      <AnimatedBackground />
      
      {/* Main content with dark glassmorphism */}
      <div className="relative z-10 max-w-4xl w-full">
        {/* Dark glass card */}
        <div className="glass-card backdrop-blur-xl bg-black/30 border border-gray-800/50 rounded-3xl overflow-hidden shadow-neon">
          {/* Header with subtle glow */}
          <div className="relative py-12 px-6 flex flex-col items-center overflow-hidden">
            {/* Subtle glow behind name */}
            <div className="absolute w-60 h-60 rounded-full bg-indigo-600/10 filter blur-3xl opacity-20"></div>
            
            {/* Profile picture with gradient border */}
            <div className="w-24 h-24 rounded-full mb-5 p-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-lg overflow-hidden">
              {/* Replace with your LinkedIn profile picture */}
              <Image
                src="/images/profile.png" 
                alt={name}
                width={96}
                height={96}
                className="rounded-full object-cover"
                priority
              />
            </div>
            
            {/* Your name with neon effect */}
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-cyan-200 to-white neon-text">
                {name}
              </h1>
              <div className="neon-underline"></div>
            </div>
            
            {/* Professional title */}
            <p className="text-xl text-gray-300 mt-2">{title}</p>
            
            {/* Static tagline with cursor */}
            <p className="h-8 text-lg md:text-xl text-cyan-300 font-light mt-1">
              {taglineText}
              <span className="inline-block w-0.5 h-5 ml-1 bg-cyan-300 animate-blink"></span>
            </p>
            
            {/* Status badge with dark theme */}
            <div className="mt-6 flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800/50">
              <span className="pulse-dot relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-200">Coming Soon — May 2025</span>
            </div>
          </div>
          
          {/* Content section */}
          <div className="p-8 md:p-10 pt-4">
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto">
                My portfolio is currently under construction. Something amazing is coming soon!
              </p>
            </div>
            
            {/* Social icons with neon hover effects */}
            <div className="flex justify-center gap-5 mb-12">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="social-icon-wrapper">
                    <div className="social-icon bg-black/50 border border-gray-800/50 hover:border-cyan-500/50">
                      {link.icon}
                    </div>
                    <span className="social-label text-cyan-400">{link.name}</span>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Animated progress bar with neon effect */}
            <div className="flex justify-center mt-10">
              <div className="relative w-full max-w-sm">
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full neon-bar"></div>
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-400">
                  <span>Development</span>
                  <span>Launch</span>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="text-center mt-10 text-sm text-gray-500">
              <p>© 2025 {name}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
