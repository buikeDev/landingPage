import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-agency-dark text-white pt-32 pb-8">
      {/* Wavy Border SVG */}

      {/* Footer Content Container */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Office Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Office</h3>
            <div className="space-y-4 text-gray-400">
              <p>Germany —</p>
              <p>785 15h Street, Office 478</p>
              <p>Berlin, De 81566</p>
              <a
                href="mailto:info@email.com"
                className="block hover:text-white transition-colors"
              >
                info@email.com
              </a>
              <p className="text-white font-semibold">+1 840 841 25 69</p>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Socials</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full bg-navy-800 text-white px-4 py-3 pr-12 rounded-lg border border-gray-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 bg-agency-dark"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-violet-500 hover:text-violet-400"
                >
                  →
                </button>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="footer-privacy"
                  className="mt-1.5 rounded border-gray-700 bg-navy-800 text-violet-500 focus:ring-violet-500/20"
                />
                <label
                  htmlFor="footer-privacy"
                  className="text-sm text-gray-400"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-white underline hover:text-violet-400"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            AxiomThemes © 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
