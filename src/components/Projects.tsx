import { useEffect, useRef } from 'react';
import { ExternalLink, GithubIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "BookNest - Online Bookstore",
      description: "Developed and deployed BookNest, a book e-commerce platform using ASP.NET MVC for efficient book management and transactions.",
      skills: ["ASP.NET MVC", "Entity Framework", "SQL Server", "Authentication", "Razor views"],
      github: "https://github.com/kaustubh5716/Bookly",
      demo: "https://bookly-atddhmeahmhnecgm.centralindia-01.azurewebsites.net/",
      showDemo: true
    },
    {
      id: 2,
      title: "AI Travel Planner",
      description: "Developed an AI-powered trip planning platform allowing users to create personalized travel itineraries based on destinations, budget, and timelines with detailed daily plan and recommendations.",
      skills: ["React", "Firebase", "Gemini 1.5 Pro Model", "Tailwind CSS"],
      github: "https://github.com/kaustubh5716/AI-Travel-Plan",
      demo: "https://ai-travel-plan-iota.vercel.app/",
      showDemo: true
    },
    {
      id: 3,
      title: "Employee Management System",
      description: "Developed a comprehensive employee management system utilizing React for the front end and Node.js for the backend, with MySQL for database management.",
      skills: ["React", "Node.js", "MySQL", "Axios", "JWT Authentication"],
      github: "https://github.com/kaustubh5716/EMS",
      demo: "#",
      showDemo: false
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-portfolio-orange animate-on-scroll opacity-0 text-sm font-medium mb-2">
            My Recent Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-black animate-on-scroll opacity-0">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-xl shadow-md animate-on-scroll opacity-0 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-portfolio-black">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-portfolio-orange/10 text-portfolio-orange px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 text-xs border border-portfolio-black/20 text-portfolio-black hover:bg-portfolio-black hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded transition-all"
                  >
                    <GithubIcon size={14} /> GitHub
                  </a>

                  {project.showDemo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 text-xs bg-portfolio-orange text-white hover:bg-portfolio-orange/90 flex items-center gap-1.5 px-3 py-1.5 rounded transition-all"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
