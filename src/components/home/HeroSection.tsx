import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden text-white py-40 md:py-60"
      style={{ backgroundColor: "#2b1055" }}
      id="hero"
    >
      {/* Background tech elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Software / Engineering */}
        <span
          className="absolute top-28 left-12 text-4xl opacity-20 blur-[1px] animate-bounce"
          style={{ animationDelay: "0s" }}
        >
          💻
        </span>
        <span
          className="absolute top-1/4 left-1/3 text-3xl opacity-20 blur-[1px] animate-bounce"
          style={{ animationDelay: "0.6s" }}
        >
          🖥️
        </span>
        <span
          className="absolute bottom-32 left-20 text-4xl opacity-20 blur-[1px] animate-bounce"
          style={{ animationDelay: "1.2s" }}
        >
          ⚙️
        </span>
        <span
          className="absolute top-1/2 left-1/4 text-3xl opacity-20 blur-[1px] animate-bounce"
          style={{ animationDelay: "1.8s" }}
        >
          🧑‍💻
        </span>

        {/* Cloud / DevOps */}
        <span
          className="absolute top-24 right-24 text-4xl opacity-20 blur-[1px] animate-bounce"
          style={{ animationDelay: "0.4s" }}
        >
          ☁️
        </span>
        <span
          className="absolute bottom-1/3 right-32 text-3xl opacity-20 blur-[1px] animate-bounce"
          style={{ animationDelay: "1.4s" }}
        >
          🗄️
        </span>
        <span
          className="absolute top-1/3 right-12 text-4xl opacity-20 blur-[1px] animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          🌐
        </span>

        {/* Mobile / Devices */}
        <span
          className="absolute bottom-24 left-1/3 text-4xl opacity-20 blur-[1px] animate-bounce"
          style={{ animationDelay: "0.8s" }}
        >
          📱
        </span>
        <span
          className="absolute bottom-16 right-1/4 text-3xl opacity-20 blur-[1px] animate-bounce"
          style={{ animationDelay: "1.6s" }}
        >
          📡
        </span>

        {/* AI / Data */}
        <span
          className="absolute top-1/4 right-1/3 text-4xl opacity-20 blur-[1px] animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          🤖
        </span>
        <span
          className="absolute bottom-1/4 right-16 text-3xl opacity-20 blur-[1px] animate-bounce"
          style={{ animationDelay: "2.2s" }}
        >
          📊
        </span>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse-slow z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-gradient">
          GrowTechAfrica — Empowering Africa’s Future with Tech Skills
        </h1>

        <p className="text-lg md:text-xl text-purple-200 mb-10 leading-relaxed">
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
            className="relative bg-gradient-to-r from-pink-500 to-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300"
          >
            Explore Programs
          </a>

          <div className="relative">
            <Link
              to="/form"
              className="relative border border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-purple-900 shadow-lg hover:shadow-white/30 transform hover:scale-105 transition-all duration-300"
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
