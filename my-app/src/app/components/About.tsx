"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Code2, Brain, Rocket, Gamepad2Icon } from "lucide-react";

const AboutMe = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Automatically start animation on page load
    controls.start("visible");
  }, [controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Pengalaman saya membuat Web UI/UX.",
    },
    {
      icon: <Gamepad2Icon className="w-8 h-8" />,
      title: "Game Developement",
      description: "Saya mempunya pengalaman membuat game menggunakan Unity",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Quick Learner",
      description:
        "Saya bisa beradaptasi terhadap situasi dan cepat belajar.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Inovasi akan terus membuat saya berkembang.",
    },
  ];

  return (
    <section className="py-20 bg-gray-800" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! Saya Muhammad Al Mahdi, Saya adalah seorang pemula di dunia
                pemrograman yang antusias untuk terus belajar dan berkembang.
                Meskipun baru memulai perjalanan ini, saya sudah memiliki dasar
                dalam beberapa bahasa pemrograman dan konsep pengembangan web.
                Saya senang mengeksplorasi teknologi baru dan mencari tantangan
                yang dapat membantu saya meningkatkan keterampilan saya. Dengan
                semangat belajar yang tinggi, saya berkomitmen untuk menguasai
                lebih banyak keterampilan teknis dan terus memperbaiki diri
                sebagai pengembang yang lebih baik setiap hari.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Saya memiliki beberapa pengalaman seperti membuat Web UI/UX dan Game Sederhana.
              </p>

              {/* Experience Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-700 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-3xl font-bold text-blue-400">5</h3>
                  <p className="text-gray-300">Projects Completed</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
              <ul className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.li
                    variants={fadeInUp}
                    key={index}
                    className="flex items-center gap-4">
                    {skill.icon}
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {skill.title}
                      </h4>
                      <p className="text-gray-300">{skill.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
