
import { useEffect, useRef } from 'react';

const Skills = () => {
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

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-portfolio-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-portfolio-orange animate-on-scroll opacity-0 text-sm font-medium mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white animate-on-scroll opacity-0">My Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-on-scroll opacity-0">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-2 bg-portfolio-orange rounded-full mr-2"></span>
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Java', 'C#', 'SQL', 'HTML', 'CSS', 'JavaScript'].map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-2 bg-portfolio-orange rounded-full mr-2"></span>
                Technologies & Frameworks
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'ASP.NET Core (MVC)', 'Entity Framework'].map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-2 bg-portfolio-orange rounded-full mr-2"></span>
                Database & Tools
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['MySQL', 'Firebase', 'VS Code', 'GitHub', 'IntelliJ', 'Google Colab'].map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                <span className="inline-block w-2 h-2 bg-portfolio-orange rounded-full mr-2"></span>
                Other Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Responsive Design', 'API Development', 'Authentication', 'CRUD Operations', 'UI Optimization', 'Database Design'].map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillPill = ({ name }: { name: string }) => (
  <div className="bg-gradient-to-r from-portfolio-orange/20 to-portfolio-orange/10 text-white py-2 px-4 rounded-full text-sm flex items-center justify-center card-hover-effect border border-white/10">
    {name}
  </div>
);

export default Skills;
