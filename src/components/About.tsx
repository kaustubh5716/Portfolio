
import { useEffect, useRef } from 'react';
import { GithubIcon, LinkedinIcon, Mail, MapPin, Code } from 'lucide-react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-portfolio-orange animate-on-scroll opacity-0 text-sm font-medium mb-2">Get To Know</p>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-black animate-on-scroll opacity-0">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="bg-portfolio-black/5 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-black">Profile</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
              I am pursuing a B.E. in Computer Science and Engineering from Don Bosco Institute of Technology, Mumbai. I'm passionate about creating efficient, user-friendly applications and constantly exploring new technologies to enhance my skill set.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-portfolio-orange" />
                  <span className="text-gray-700">Mumbai, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-portfolio-orange" />
                  <a href="mailto:kaustubhdesale100@gmail.com" className="text-gray-700 hover:text-portfolio-orange transition-colors">
                    kaustubhdesale100@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <GithubIcon size={18} className="text-portfolio-orange" />
                  <a href="https://github.com/kaustubh5716" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-portfolio-orange transition-colors">
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <LinkedinIcon size={18} className="text-portfolio-orange" />
                  <a href="https://www.linkedin.com/in/kaustubh-desale-03b840285/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-portfolio-orange transition-colors">
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Code size={18} className="text-portfolio-orange" />
                  <a href="https://leetcode.com/u/kaustubhdesale/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-portfolio-orange transition-colors">
                    LeetCode
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Code size={18} className="text-portfolio-orange" />
                  <a href="https://www.geeksforgeeks.org/user/user_ue7c5hkywro/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-portfolio-orange transition-colors">
                    GFG
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0">
            <div className="bg-portfolio-black/5 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-black">My Approach</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I believe in writing clean, maintainable code that solves real-world problems. My experience spans from front-end technologies like React and Tailwind CSS to back-end development with Node.js and ASP.NET Core.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I'm particularly interested in creating intuitive user interfaces and implementing robust database solutions. My goal is to develop software that not only meets technical requirements but also delivers an exceptional user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
