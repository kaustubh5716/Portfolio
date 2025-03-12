import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
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
    <section id="contact" ref={sectionRef} className="flex items-center justify-center min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-portfolio-orange animate-on-scroll opacity-0 text-sm font-medium mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-black animate-on-scroll opacity-0">Contact Me</h2>
        </div>

        <div className="flex justify-center">
          <div className="animate-on-scroll opacity-0 max-w-lg w-full">
            <div className="bg-portfolio-black p-8 rounded-2xl text-white h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-orange/20 p-3 rounded-full">
                    <Mail size={20} className="text-portfolio-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-300 mb-1">Email</h4>
                    <a href="mailto:kaustubhdesale100@gmail.com" className="text-white hover:text-portfolio-orange transition-colors">
                      kaustubhdesale100@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-orange/20 p-3 rounded-full">
                    <Phone size={20} className="text-portfolio-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-300 mb-1">Phone</h4>
                    <a href="tel:+91-7796795716" className="text-white hover:text-portfolio-orange transition-colors">
                      +91-7796795716
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-orange/20 p-3 rounded-full">
                    <MapPin size={20} className="text-portfolio-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-300 mb-1">Location</h4>
                    <p className="text-white">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-300 text-sm">
                  I'm open to job opportunities where I can contribute, learn, and grow. Feel free to reach out if you have any questions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;