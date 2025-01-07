import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  return (
    <div>
      {/* Navbar Section */}
      <nav className="sticky top-0 bg-white shadow-lg z-20">
        <div className="container mx-auto flex justify-between items-center px-4 py-6">
          <div className="text-2xl font-bold tracking-wide">
            <span className="bg-white text-blue-500 px-2 py-1 rounded-md">
              Katagum School
            </span>
          </div>
          <div className="hidden lg:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-200 transition">
              About
            </a>
            <a href="#programs" className="hover:text-indigo-200 transition">
              Programs
            </a>
            <a href="#features" className="hover:text-indigo-200 transition">
              Features
            </a>
            <a href="#contact" className="hover:text-indigo-200 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/R.f843c05a241db66faf4171e326395f58?rik=TiFY0NhdEZw%2bjw&riu=http%3a%2f%2fbuzznigeria.com%2fwp-content%2fuploads%2f2015%2f05%2fNTIS1-1024x552.jpg&ehk=ukv0Vlp%2bdfRZH9T5qZ8%2bEH5DcL8tDNeWwcyN4bR0imY%3d&risl=&pid=ImgRaw&r=0')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10 py-32 px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Katagum School</h1>
          <p className="text-xl mb-6">
            Unlocking potential through excellence in education.
          </p>
          <a
            href="#about"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md text-lg transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">
            About Katagum School
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Katagum School is committed to providing high-quality education,
            fostering innovation, and nurturing the minds of tomorrow's leaders.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-5xl text-blue-500 mb-2">🏫</div>
              <h3 className="font-semibold text-xl">Experienced Teachers</h3>
              <p className="text-gray-700 mt-2">
                Our educators are passionate and dedicated to your success.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-blue-500 mb-2">🎓</div>
              <h3 className="font-semibold text-xl">Academic Excellence</h3>
              <p className="text-gray-700 mt-2">
                We prioritize academic rigor and innovative learning methods.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-blue-500 mb-2">🌍</div>
              <h3 className="font-semibold text-xl">Global Perspective</h3>
              <p className="text-gray-700 mt-2">
                We provide students with the skills needed for success in the
                global economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-4">Primary School</h3>
              <p className="text-gray-700 mb-4">
                A strong foundation for lifelong learning and success.
              </p>
              <a href="#contact" className="text-blue-500 hover:underline">
                Learn More
              </a>
            </div>
            <div className="bg-gray-200 p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-4">Secondary School</h3>
              <p className="text-gray-700 mb-4">
                Preparing students for academic excellence and future careers.
              </p>
              <a href="#contact" className="text-blue-500 hover:underline">
                Learn More
              </a>
            </div>
            <div className="bg-gray-200 p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Extracurricular Activities
              </h3>
              <p className="text-gray-700 mb-4">
                From sports to arts, we offer a variety of extracurricular
                programs.
              </p>
              <a href="#contact" className="text-blue-500 hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Testimonials Section */}
      <section
        id="testimonials"
        className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-blue-600 text-center mb-12">
            What Our Parents & Students Say
          </h2>
          <Slider {...sliderSettings}>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-4 transition transform hover:scale-105">
                <p className="text-gray-700 italic mb-6">
                  "Katagum School has transformed my child's education. They are
                  now more engaged and excited about learning!"
                </p>
                <h4 className="font-semibold text-lg text-blue-600">
                  Jane Doe
                </h4>
                <p className="text-gray-500">Parent</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-4 transition transform hover:scale-105">
                <p className="text-gray-700 italic mb-6">
                  "The teachers at Katagum School are incredibly dedicated, and
                  the curriculum is always challenging and rewarding."
                </p>
                <h4 className="font-semibold text-lg text-blue-600">
                  John Smith
                </h4>
                <p className="text-gray-500">Student</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-4 transition transform hover:scale-105">
                <p className="text-gray-700 italic mb-6">
                  "The extracurricular activities at Katagum School are amazing.
                  My child has developed new skills and confidence!"
                </p>
                <h4 className="font-semibold text-lg text-blue-600">
                  Emily Davis
                </h4>
                <p className="text-gray-500">Parent</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <h3 className="font-semibold text-xl mb-2">
                Admission Open Dates
              </h3>
              <p className="text-gray-700">
                Admissions are open from March 1st to April 15th. Enroll now!
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <h3 className="font-semibold text-xl mb-2">
                Parent-Teacher Meeting
              </h3>
              <p className="text-gray-700">
                Join us for the Parent-Teacher meeting on February 20th.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <h3 className="font-semibold text-xl mb-2">Sports Day</h3>
              <p className="text-gray-700">
                Annual Sports Day is on March 25th. Don't miss the fun!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section id="blog" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">
            Latest News & Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="font-semibold text-xl mb-4">Science Fair 2025</h3>
              <p className="text-gray-700">
                Katagum School's Science Fair was a huge success!
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="font-semibold text-xl mb-4">
                New Library Resources
              </h3>
              <p className="text-gray-700">
                We've added 500 new books to our library collection.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Enroll?</h2>
        <p className="text-lg mb-8">
          Join Katagum School today and start your journey towards excellence!
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-500 hover:bg-gray-100 py-3 px-8 rounded-md text-lg transition"
        >
          Get Started
        </a>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Katagum School. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-blue-500">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-500">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-500">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
