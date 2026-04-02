import { useState, useEffect } from "react";
import LearnMoreImg from "../assets/images/Happy_Healthcare_Team.jpeg";
import ExploreProgramsImg from "../assets/images/Degrees_happiness.jpeg";
import StJosephImg from "../assets/images/stjoseph.jpg"; // ✅ your new background

function Home() {
  const slides = [
    {
      img: LearnMoreImg,
      title: "Join Our Caring Healthcare Team",
      subtitle: "Become part of a community that heals and inspires.",
      buttonText: "Learn More",
    },
    {
      img: ExploreProgramsImg,
      title: "Explore Our Academic Programs",
      subtitle: "Offering Nursing, Pharmacy, Laboratory Science and more.",
      buttonText: "Explore Programs",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(false); // For animation of the new section

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Trigger fade-in after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 500); // small delay for smooth effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000
              ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 mb-6">
                {slide.subtitle}
              </p>
              <button className="
                bg-accent text-white px-6 py-3 rounded-lg font-semibold
                transition-all duration-300
                hover:bg-white hover:text-primary hover:scale-105
              ">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}

        {/* Navigation dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`
                w-3 h-3 rounded-full cursor-pointer transition
                ${currentSlide === idx ? "bg-accent" : "bg-white bg-opacity-50"}
              `}
              onClick={() => setCurrentSlide(idx)}
            ></span>
          ))}
        </div>
      </section>

      {/* 🏫 ST. JOSEPH SECTION */}
      <section
        className={`
          relative h-[500px] md:h-[600px] flex justify-center items-center
          bg-center bg-cover transition-opacity duration-1000
          ${fadeIn ? "opacity-100" : "opacity-0"}
        `}
        style={{ backgroundImage: `url(${StJosephImg})` }}
      >
        <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 md:p-16 rounded-xl max-w-3xl text-center shadow-xl animate-fadeIn">
          {/* Logo */}
          <img
            src="/logo.jpg"
            alt="St Joseph College Logo"
            className="mx-auto mb-6 w-32 h-32 object-contain"
          />

          {/* Text content */}
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
            St Joseph College of Health Sciences was established to address the growing demand for skilled healthcare professionals in Malawi. The college’s mission is to advance health education, research, and practical training, fostering a new generation of compassionate, knowledgeable, and innovative practitioners. Through cutting-edge programs and community engagement, the college aims to improve healthcare delivery, promote wellness, and contribute to the sustainable development of the nation.
          </p>
        </div>
      </section>

      {/* 📚 PROGRAMS SECTION */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Programs</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Nursing</h3>
            <p className="text-gray-600">
              Training compassionate and skilled nurses.
            </p>
          </div>

          <div className="shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Pharmacy</h3>
            <p className="text-gray-600">
              Preparing experts in medication and healthcare.
            </p>
          </div>

          <div className="shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Laboratory Science</h3>
            <p className="text-gray-600">
              Developing professionals in diagnostics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;