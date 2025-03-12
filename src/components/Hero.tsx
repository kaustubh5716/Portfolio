
import { FileDown, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-portfolio-black px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-portfolio-orange/20 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-portfolio-orange/10 rounded-full filter blur-3xl opacity-30" />
      
      <div className="container mx-auto text-center relative z-10">
        {/* <p className="text-portfolio-orange mb-3 animate-fade-in inline-block border border-portfolio-orange/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          Software Developer
        </p> */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-down tracking-tight">
          Kaustubh <span className="text-portfolio-orange">Desale</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 animate-slide-up text-balance leading-relaxed text-lg">
        Aspiring software developer passionate about full-stack development, skilled in modern web technologies. Dedicated to building efficient, user-friendly applications with a focus on performance and scalability
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
        <a 
            href="/Kaustubh_Desale_Resume.pdf" 
            download="Kaustubh_Desale_Resume.pdf"
            className="bg-portfolio-orange text-white hover:bg-portfolio-orange/90 border-portfolio-orange hover:border-portfolio-orange/90 flex items-center gap-2 px-4 py-2 rounded"
          >
            <FileDown size={16} /> Resume
          </a>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 bg-portfolio-orange hover:bg-portfolio-orange/90 flex items-center gap-2"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown size={16} /> Explore My Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
