
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-portfolio-orange animate-on-scroll opacity-0 text-sm font-medium mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-black animate-on-scroll opacity-0">Contact Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div className="animate-on-scroll opacity-0">
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
          
          <div className="animate-on-scroll opacity-0">
            <form onSubmit={handleSubmit} className="bg-portfolio-black/5 p-8 rounded-2xl h-full">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-black">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-gray-300 focus:border-portfolio-orange focus:ring-portfolio-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="border-gray-300 focus:border-portfolio-orange focus:ring-portfolio-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="border-gray-300 focus:border-portfolio-orange focus:ring-portfolio-orange resize-none h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-portfolio-orange text-white hover:bg-portfolio-orange/90 flex items-center justify-center gap-2 mt-2"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
