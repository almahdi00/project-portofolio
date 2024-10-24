'use client'
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  gradient: string;
}

interface Project {
  title: string;
  description: string;
  gradient: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, gradient }) => (
  <div className="relative flex w-80 flex-col rounded-xl bg-gray-800 bg-clip-border text-gray-300 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className={`relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gray-700 bg-clip-border text-white shadow-lg shadow-gray-900/40 ${gradient} transition-all duration-300 hover:shadow-2xl group`}>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased transition-colors duration-300 hover:text-blue-400">
        {title}
      </h5>
      <p className="block font-sans text-base font-light leading-relaxed text-gray-400 antialiased">
        {description}
      </p>
    </div>
    <div className="p-6 pt-0">
      <button
        data-ripple-light="true"
        type="button"
        className="select-none rounded-lg bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/40 hover:-translate-y-1 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
        Read More
      </button>
    </div>
  </div>
);

const ProjectSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Web Development",
      description: "Membuat Web responsif menggunakan react dan tailwind.",
      gradient: "bg-gradient-to-r from-blue-600 to-blue-800"
    },
    {
      title: "Game Development",
      description: "Membuat aplikasi game dengan Gdevelop, Unity.",
      gradient: "bg-gradient-to-r from-purple-600 to-purple-800"
    },
    {
      title: "Web Development",
      description: "Membuat Web portofolio dengan menggunakan react dan tailwind.",
      gradient: "bg-gradient-to-r from-teal-600 to-teal-800"
    }
  ];

  return (
    <section className="py-16 bg-gray-900" id="project">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in text-white">Our Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                gradient={project.gradient}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
`;

const ProjectSectionWithStyles: React.FC = () => (
  <>
    <style>{styles}</style>
    <ProjectSection />
  </>
);

export default ProjectSectionWithStyles;