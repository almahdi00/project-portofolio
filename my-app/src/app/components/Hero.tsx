'use client'
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const TypeWriter = ({ words = ["Web Development"], speed = 100, delay = 1500 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const shouldDelete = isDeleting;

      setCurrentText(prev => {
        if (shouldDelete) {
          // Deleting text
          if (prev.length === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            return '';
          }
          return prev.slice(0, -1);
        } else {
          // Typing text
          if (prev === currentWord) {
            setIsDeleting(true);
            return prev;
          }
          return currentWord.slice(0, prev.length + 1);
        }
      });

      timer = setTimeout(
        handleTyping,
        isDeleting ? speed / 2 : currentText === words[currentWordIndex] ? delay : speed
      );
    };

    timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Portfolio = () => {
  const titles = [
    "Web Development and Game Development"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Enhanced Header/Hero Section */}
      <header className="container mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image Section */}
          <div className="relative">
            <div className="w-64 h-64 relative">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" 
                style={{ filter: 'blur(40px)', opacity: 0.4 }} 
              />
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="image/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hello,I&apos;m
              Muhammad Al Mahdi
            </h1>

            <div className="text-2xl lg:text-3xl text-gray-300 mb-6 min-h-[3rem]">
              <TypeWriter
                words={titles}
                speed={100} // Kecepatan mengetik
                delay={1500} // Waktu menunggu sebelum menghapus teks
              />
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionate about creating exceptional digital experiences that combine 
              elegant design with robust functionality. Specialized in building modern 
              web applications using cutting-edge technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium 
                          hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Hubungi Saya
              </a>
              
              <a
                href="#resume"
                className="px-8 py-3 bg-gray-800 rounded-full text-gray-300 font-medium hover:bg-gray-700 
                          hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2
                          transform hover:-translate-y-1"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 hover:rotate-6 duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Portfolio;