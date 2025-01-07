import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Calendar,
  Book,
  Users,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-blue-200 hover:bg-blue-400 transition-colors" />
    ),
  };

  return (
    <div className="relative">
      {/* Enhanced Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollPosition > 50
            ? "bg-white shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span
                className={`text-2xl font-bold ${
                  scrollPosition > 50 ? "text-blue-600" : "text-white"
                }`}
              >
                Katagum School
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {["About", "Programs", "Features", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors hover:text-blue-500 ${
                    scrollPosition > 50 ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4">
              {["About", "Programs", "Features", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-blue-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70 z-10" />
            <img
              src="https://th.bing.com/th/id/R.f843c05a241db66faf4171e326395f58?rik=TiFY0NhdEZw%2bjw&riu=http%3a%2f%2fbuzznigeria.com%2fwp-content%2fuploads%2f2015%2f05%2fNTIS1-1024x552.jpg&ehk=ukv0Vlp%2bdfRZH9T5qZ8%2bEH5DcL8tDNeWwcyN4bR0imY%3d&risl=&pid=ImgRaw&r=0"
              alt="School building"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Shaping Tomorrow's Leaders Today
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience excellence in education at Katagum School, where every
              student's potential is unleashed through innovative learning and
              dedicated mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105">
                Explore Programs
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (New) */}
      <section className="relative -mt-20 z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Students", value: "1,200+" },
            { icon: Book, title: "Programs", value: "25+" },
            { icon: Calendar, title: "Years of Excellence", value: "15+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6 transform hover:-translate-y-2 transition-all"
            >
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-4xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Katagum School
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At Katagum School, we believe in nurturing not just academic
                excellence, but the complete development of every student. Our
                innovative curriculum, combined with dedicated educators and
                state-of-the-art facilities, creates an environment where
                learning thrives and futures are shaped.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Expert Faculty",
                  "Modern Facilities",
                  "Innovative Curriculum",
                  "Global Perspective",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-100 h-48 rounded-lg transform hover:scale-105 transition-all" />
                <div className="bg-blue-200 h-64 rounded-lg transform hover:scale-105 transition-all" />
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-blue-300 h-64 rounded-lg transform hover:scale-105 transition-all" />
                <div className="bg-blue-400 h-48 rounded-lg transform hover:scale-105 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Primary Education",
                description:
                  "Building strong foundations through engaging learning experiences.",
                features: [
                  "Interactive Learning",
                  "Core Subjects",
                  "Creative Arts",
                  "Physical Education",
                ],
              },
              {
                title: "Secondary Education",
                description:
                  "Preparing students for academic excellence and future success.",
                features: [
                  "Advanced Curriculum",
                  "Science Labs",
                  "Career Guidance",
                  "Sports Programs",
                ],
              },
              {
                title: "Special Programs",
                description:
                  "Enriching experiences beyond the traditional curriculum.",
                features: [
                  "Music & Arts",
                  "Technology",
                  "Leadership",
                  "Community Service",
                ],
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all"
              >
                <div className="h-48 bg-blue-100 group-hover:bg-blue-200 transition-colors" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center text-gray-700"
                      >
                        <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gray-50 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Community Says
          </h2>
          <Slider {...sliderSettings}>
            {[
              {
                text: "Katagum School has transformed my child's education journey. The teachers' dedication and innovative approach to learning have made a remarkable difference.",
                author: "Sarah Johnson",
                role: "Parent",
                image: "/api/placeholder/64/64",
              },
              {
                text: "The quality of education and personal attention each student receives here is exceptional. My children have flourished academically and personally.",
                author: "Michael Chen",
                role: "Parent",
                image: "/api/placeholder/64/64",
              },
              {
                text: "As a student, I appreciate how the teachers make learning engaging and fun. The school's facilities and resources are outstanding.",
                author: "Emma Thompson",
                role: "Student",
                image: "/api/placeholder/64/64",
              },
            ].map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-xl shadow-lg p-8 mx-4">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Begin Your Journey With Us
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join our community of learners and discover the difference that
            quality education can make in your child's future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Continuing from the previous grid container */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Katagum School provides excellence in education, nurturing
                future leaders through innovative learning approaches.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Admissions", "Programs", "Calendar", "News", "Careers"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  123 School Street, Katagum
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-2" />
                  +234 123 456 7890
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-2" />
                  info@katagumschool.edu
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Katagum School. All rights
                reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
