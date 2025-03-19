
import { GithubIcon, LinkedinIcon, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-black text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">
              <span className="text-portfolio-orange">K</span>austubh <span className="text-portfolio-orange" >D</span>esale
            </h3>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/kaustubh5716" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-orange transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kaustubh-desale-03b840285/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-orange transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>
            <a 
              href="https://leetcode.com/u/kaustubhdesale/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-orange transition-colors"
              aria-label="LeetCode"
            >
              <Code size={22} />
            </a>
            <a 
              href="https://www.geeksforgeeks.org/user/user_ue7c5hkywro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-orange transition-colors"
              aria-label="LeetCode"
            >
              <Code size={22} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Kaustubh Desale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
