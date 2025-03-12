
import { useEffect, useRef } from 'react';
import { FileDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Education = () => {
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

  const education = [
    {
      id: 1,
      institution: "Don Bosco Institute of Technology, Mumbai",
      degree: "B.E - Computer Science and Engineering",
      duration: "2021 - 2025",
      score: "Overall CGPA: 8.73",
    },
    {
      id: 2,
      institution: "G.V. Khade Vidyalaya Shahapur",
      degree: "10th Grade, SSC",
      duration: "2018 - 2019",
      score: "Percentage: 94%",
    },
    {
      id: 3,
      institution: "S. V. Joshi High School & Junior College, Dombivli",
      degree: "12th Grade, HSC, Science Stream",
      duration: "2019 - 2021",
      score: "Percentage: 90%",
    }
  ];

  const internship = {
    title: "Web Developer Intern",
    company: "Don Bosco Institute of Technology",
    duration: "August 2023 - August 2024",
    location: "Mumbai, India",
    certificate: "/Internship_Certificate_2024.pdf",
    responsibilities: [
      "Designed and implemented responsive web pages for the EXTC department, ensuring cross-browser compatibility and optimal performance.",
      "Enhanced user experience through the development of user-friendly layouts and efficient front-end code using HTML, CSS, and JavaScript.",
      "Certificate: Web Developer Intern"
    ]
  };

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-portfolio-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-portfolio-orange animate-on-scroll opacity-0 text-sm font-medium mb-2">My Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white animate-on-scroll opacity-0">Education & Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="inline-block w-2 h-2 bg-portfolio-orange rounded-full mr-2"></span>
              Education
            </h3>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-[1px] before:h-full before:bg-portfolio-orange/30 pl-10">
              {education.map((item, index) => (
                <div 
                  key={item.id} 
                  className="relative before:absolute before:left-[-29px] before:top-1 before:w-6 before:h-6 before:bg-portfolio-black before:border-2 before:border-portfolio-orange before:rounded-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                    <h4 className="text-lg font-medium text-white">{item.institution}</h4>
                    <p className="text-portfolio-orange mt-1">{item.degree}</p>
                    <div className="flex justify-between mt-2 text-sm text-gray-300">
                      <span>{item.duration}</span>
                      <span>{item.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll opacity-0">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="inline-block w-2 h-2 bg-portfolio-orange rounded-full mr-2"></span>
              Experience
            </h3>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h4 className="text-lg font-medium text-white">{internship.title}</h4>
              <p className="text-portfolio-orange mt-1">{internship.company}</p>
              
              <div className="flex justify-between mt-2 text-sm text-gray-300">
                <span>{internship.duration}</span>
                <span>{internship.location}</span>
              </div>
              
              <div className="mt-4 space-y-2">
                <h5 className="text-white text-sm font-medium">Key Responsibilities:</h5>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                  {internship.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6">
                <Button 
                  variant="default" 
                  size="sm"
                  className="text-xs bg-portfolio-orange text-white hover:bg-portfolio-orange/90 flex items-center gap-1.5"
                  onClick={() => window.open(internship.certificate, '_blank')}
                >
                  <FileDown size={14} /> Download Certificate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
