import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden text-white py-40 md:py-60"
      style={{ backgroundColor: "#0f172a" }}
      id="hero"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse-slow" />

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-green-500 bg-clip-text text-transparent animate-gradient">
          GrowTechAfrica — Empowering Africa’s Future with Tech Skills
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          We partner with{" "}
          <span className="font-semibold text-white">Microsoft</span> and{" "}
          <span className="font-semibold text-white">KAMK University</span> to
          deliver world-class Microdegree programs that prepare Africans for
          global tech careers.
          <br className="hidden md:block" />
          Self-paced learning, mentorship, and industry-recognised certificates.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 items-center">
          <a
            href="#programs"
            className="relative bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300"
          >
            Explore Programs
          </a>

          {/* Enroll Now Button */}
          <div
            className="relative"
            //  ref={heroEnrollRef}
          >
            <Link
              to="/form"
              className="relative border border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 shadow-lg hover:shadow-white/30 transform hover:scale-105 transition-all duration-300"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
