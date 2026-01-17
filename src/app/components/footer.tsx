import { Mail, Phone } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl mb-4" style={{ fontWeight: 800, color: '#14b8a6' }}>
              Rezpitch
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The fintech-powered B2B platform connecting luxury hospitality with elite destination management companies worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontWeight: 700 }}>Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-teal-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-teal-400 transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-teal-400 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-teal-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontWeight: 700 }}>Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-teal-400 transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontWeight: 700 }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <a href="mailto:support@rezpitch.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                  support@rezpitch.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">+1 (234) 567-890</span>
              </li>
              <li className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM EST</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 Rezpitch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
