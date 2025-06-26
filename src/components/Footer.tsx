
import { ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Made by KARTHIKEYAN R</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://portfolio-karthi.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <span>Visit My Portfolio</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-500">
          © 2025 QuickCV. Build professional resumes instantly.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
