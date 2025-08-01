// src/components/Footer.jsx
import { EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-auto border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Copyright */}
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Smart AI Companion. All rights reserved.
        </div>

        {/* Center: Social Icons */}
        <div className="flex justify-center gap-5">
          <a
            href="mailto:smartisaac@gmail.com"
            className="hover:text-indigo-500"
            title="Email"
          >
            <EnvelopeIcon className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/SmartZikky"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
              className="h-5 w-5"
              alt="Twitter"
            />
          </a>
          <a
            href="https://linkedin.com/in/isaac-david-ikpe-22a304103"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              className="h-5 w-5"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Smartzikky"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              className="h-5 w-5"
              alt="GitHub"
            />
          </a>
          <a
            href="https://facebook.com/smartisaac"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              className="h-5 w-5"
              alt="Facebook"
            />
          </a>
        </div>

        {/* Right: Signature */}
        <p className="text-xs text-center md:text-right">
          Built with ❤️ by Smartisaac
        </p>
      </div>
    </footer>
  );
}
