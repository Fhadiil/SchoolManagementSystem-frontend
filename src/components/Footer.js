import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: ["About Us", "Contact", "Admissions", "Calendar"],
    },
    {
      title: "Resources",
      links: ["Student Portal", "Parent Portal", "Library", "Career"],
    },
    {
      title: "Support",
      links: ["Help Center", "FAQs", "Technical Support", "Feedback"],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Katagum School Management System. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
