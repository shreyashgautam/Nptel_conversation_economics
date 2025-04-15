import React from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="relative text-white">
      {/* Particle Background */}
      <footer className="py-12 mt-auto relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Left Section */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Conversation Economics</h2>
              <p className="text-gray-400 mb-4 max-w-md">
                Developer of the NPTEL Quiz Tracker Platform — built to simplify quiz access and help students stay on track, one week at a time.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/shreyashgautam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:scale-150 transition-transform duration-200"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:scale-150 transition-transform duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/shreyash-gautam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:scale-150 transition-transform duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-right">
              <h3 className="font-medium mb-4">Get in Touch</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex justify-end items-center gap-2 hover:text-white transition-colors duration-200">
                  <MapPin className="h-4 w-4" />
                 Chennai, Tamil Nadu
                </li>
               
                <li className="flex justify-end items-center gap-2 hover:text-white transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                 shreyashgautam2007@gmail.com
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-700">
            <p className="text-gray-400 text-sm text-left">
              © {new Date().getFullYear()} NPTEL Quiz Tracker. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-right mt-4 md:mt-0">
              Made with ❤️ by Shreyash Gautam
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
