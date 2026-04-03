import { useState, useEffect, useRef } from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaFlask, FaBook } from "react-icons/fa";

import LearnMoreImg from "../assets/images/Happy_Healthcare_Team.jpeg";
import ExploreProgramsImg from "../assets/images/Degrees_happiness.jpeg";
import StJosephImg from "../assets/images/stjoseph.jpg";
import NursingImg from "../assets/images/IMG_6362-scaled.jpg";
import PharmacyImg from "../assets/images/Happy_Healthcare_Team.jpeg";
import LabImg from "../assets/images/lab.jpeg";

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

  // 🔥 ST JOSEPH SCROLL
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // 🔥 COUNTER SCROLL
  const [counterVisible, setCounterVisible] = useState(false);
  const counterRef = useRef(null);

  // Counter values
  const [counts, setCounts] = useState({
    students: 0,
    instructors: 0,
    labs: 0,
    subjects: 0,
  });

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 🔥 ST JOSEPH OBSERVER
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // 🔥 COUNTER OBSERVER
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setCounterVisible(true),
      { threshold: 0.3 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, []);

  // 🔥 COUNTING ANIMATION
  useEffect(() => {
    if (!counterVisible) return;

    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    const targets = {
      students: 1200,
      instructors: 75,
      labs: 15,
      subjects: 25,
    };

    let step = 0;

    const counter = setInterval(() => {
      step++;
      setCounts({
        students: Math.floor((targets.students / steps) * step),
        instructors: Math.floor((targets.instructors / steps) * step),
        labs: Math.floor((targets.labs / steps) * step),
        subjects: Math.floor((targets.subjects / steps) * step),
      });

      if (step >= steps) clearInterval(counter);
    }, intervalTime);

    return () => clearInterval(counter);
  }, [counterVisible]);

  return (
    <div className="relative w-full overflow-hidden">

      {/* 🔥 HERO */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 mb-6">
                {slide.subtitle}
              </p>
              <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* 🏫 ST JOSEPH */}
      <section
        ref={sectionRef}
        className={`relative h-[550px] md:h-[650px] flex justify-center items-center mt-20 bg-fixed bg-center bg-cover transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
        style={{ backgroundImage: `url(${StJosephImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div
          className={`relative z-10 bg-white bg-opacity-80 backdrop-blur-md p-8 md:p-16 rounded-xl max-w-3xl text-center shadow-xl transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src="/logo.jpg"
            alt="logo"
            className={`mx-auto mb-6 w-28 h-28 ${
              isVisible ? "animate-bounce" : "opacity-0"
            }`}
          />

          {[
            "St Joseph College of Health Sciences was established to address the growing demand for skilled healthcare professionals in Malawi.",
            "The college’s mission is to advance health education, research, and practical training, fostering a new generation of compassionate, knowledgeable, and innovative practitioners.",
            "Through cutting-edge programs and community engagement, the college aims to improve healthcare delivery, promote wellness, and contribute to the sustainable development of the nation.",
          ].map((line, i) => (
            <p
              key={i}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 200 + 300}ms` }}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* 🔢 COUNTER SECTION */}
      <section
        ref={counterRef}
        className={`py-20 px-6 text-center transition-all duration-1000 ${
          counterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div className="grid md:grid-cols-4 gap-8">

          <div className="p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaUserGraduate className="text-4xl mx-auto mb-4 text-accent" />
            <h2 className="text-3xl font-bold">{counts.students}+</h2>
            <p className="text-gray-600">Students</p>
          </div>

          <div className="p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaChalkboardTeacher className="text-4xl mx-auto mb-4 text-accent" />
            <h2 className="text-3xl font-bold">{counts.instructors}+</h2>
            <p className="text-gray-600">Instructors</p>
          </div>

          <div className="p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaFlask className="text-4xl mx-auto mb-4 text-accent" />
            <h2 className="text-3xl font-bold">{counts.labs}+</h2>
            <p className="text-gray-600">Modern Labs</p>
          </div>

          <div className="p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <FaBook className="text-4xl mx-auto mb-4 text-accent" />
            <h2 className="text-3xl font-bold">{counts.subjects}+</h2>
            <p className="text-gray-600">Subjects</p>
          </div>

        </div>
      </section>

      {/* 📚 PROGRAMS */}
<section className="py-20 px-6 text-center bg-gray-50">
  <h2 className="text-3xl md:text-4xl font-bold mb-10">
    Our Diploma Programs
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* 🏥 NURSING */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl hover:-translate-y-2 duration-300">
      <div className="overflow-hidden">
        <img
          src={NursingImg}
          alt="Nursing"
          className="w-full h-56 object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6 text-left">
        <h3 className="text-xl font-bold mb-3">Diploma in Nursing</h3>
        <p className="text-gray-600 mb-4">
          This program equips students with essential clinical skills, patient care techniques,
          and professional ethics required to become compassionate and competent nurses
          ready to serve in hospitals and communities.
        </p>

        <button className="bg-accent text-white px-4 py-2 rounded-lg font-semibold transition hover:bg-primary hover:scale-105">
          Read More
        </button>
      </div>
    </div>

    {/* 💊 PHARMACY */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl hover:-translate-y-2 duration-300">
      <div className="overflow-hidden">
        <img
          src={PharmacyImg}
          alt="Pharmacy"
          className="w-full h-56 object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6 text-left">
        <h3 className="text-xl font-bold mb-3">Diploma in Pharmacy</h3>
        <p className="text-gray-600 mb-4">
          Students gain in-depth knowledge of medicines, drug management,
          and pharmaceutical practices, preparing them to work in pharmacies,
          hospitals, and healthcare institutions.
        </p>

        <button className="bg-accent text-white px-4 py-2 rounded-lg font-semibold transition hover:bg-primary hover:scale-105">
          Read More
        </button>
      </div>
    </div>

    {/* 🧪 MIDWIFERY / LAB */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl hover:-translate-y-2 duration-300">
      <div className="overflow-hidden">
        <img
          src={LabImg}
          alt="Midwifery"
          className="w-full h-56 object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6 text-left">
        <h3 className="text-xl font-bold mb-3">Diploma in Public health</h3>
        <p className="text-gray-600 mb-4">
          This program focuses on maternal and newborn care, equipping students
          with practical skills and knowledge to support safe pregnancies,
          childbirth, and postnatal care.
        </p>

        <button className="bg-accent text-white px-4 py-2 rounded-lg font-semibold transition hover:bg-primary hover:scale-105">
          Read More
        </button>
      </div>
    </div>

  </div>
</section>
    </div>
  );
}

export default Home;