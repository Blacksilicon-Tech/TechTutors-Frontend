import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

type Program = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  ectsCredits: string;
  onlineSelfStudy: string;
  mentorship: string;
  onlineAssessments: string;
  expandable?: { bullets: string[] };
};

const programs: Program[] = [
  {
    slug: "ai-developement",
    title: "AI Developement",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "This course explores Azure AI services, natural language processing, retrieval augmented generation, and generative AI, with a focus on deploying secure, responsible, and advanced AI solutions.",
    ectsCredits: "2 credits",
    onlineSelfStudy: "54 hours",
    mentorship: "4 hours of mentor support",
    onlineAssessments: "Yes",
    expandable: {
      bullets: [
        "Introduces Azure AI Services, deployment of AI containers, and AI Language services.",
        "Explains natural language processing (NLP), conversational understanding, and CLU capabilities.",
        "Covers retrieval augmented generation (RAG) and AI search in Azure.",
        "Demonstrates generative AI development, including OpenAI, fine-tuning, and responsible AI.",
        "Summarizes advanced AI practices, from security to generating code with AI.",
      ],
    },
  },
  {
    slug: "microsoft-azure",
    title: "Microsoft Azure",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "This course introduces the fundamentals of Azure, covering infrastructure, computing services, networking, storage, and essential security measures for managing cloud resources.",
    ectsCredits: "2 credits",
    onlineSelfStudy: "54 hours",
    mentorship: "4 hours of mentor support",
    onlineAssessments: "Yes",
    expandable: {
      bullets: [
        "Covers the fundamentals of Azure, its physical and management infrastructure.",
        "Explores computing services including virtual machines and app hosting.",
        "Introduces Azure networking concepts such as virtual networks and connectivity.",
        "Discusses data, storage, and migration services in Azure.",
        "Examines security, authentication, authorization, and conditional access.",
      ],
    },
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    summary:
      "This course explores the foundations of AI, including machine learning, computer vision, natural language processing, generative AI, and the integration of these capabilities within Azure.",
    ectsCredits: "2 credits",
    onlineSelfStudy: "54 hours",
    mentorship: "4 hours of mentor support",
    onlineAssessments: "Yes",
    expandable: {
      bullets: [
        "Introduces AI fundamentals, machine learning basics, supervised and unsupervised learning.",
        "Explains how Azure integrates with AI to support intelligent applications.",
        "Covers computer vision, facial recognition, and character recognition.",
        "Examines natural language processing (NLP), conversational AI, and AI-powered speech.",
        "Introduces generative AI concepts, Azure OpenAI services, copilots, and responsible AI use.",
      ],
    },
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    summary:
      "This course covers core data concepts, relational and non-relational databases, large-scale and real-time analytics, and how Azure supports modern data management and visualization.",
    ectsCredits: "1 credit",
    onlineSelfStudy: "27 hours",
    mentorship: "4 hours of mentor support",
    onlineAssessments: "Yes",
    expandable: {
      bullets: [
        "Introduces data foundations, roles, services, and database concepts.",
        "Compares relational and non-relational databases with a focus on Azure SQL and Cosmos DB.",
        "Explains data analytics approaches—large-scale, real-time, and visualization techniques.",
        "Demonstrates how Azure supports analytics and cloud data adoption.",
        "Summarizes key data services and processing capabilities in Azure.",
      ],
    },
  },
  {
    slug: "github-workflow",
    title: "Development Workflow",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
    summary:
      "This course focuses on leveraging GitHub and GitHub Copilot to enhance collaboration, automate workflows, improve productivity, and streamline programming with AI assistance.",
    ectsCredits: "1 credit",
    onlineSelfStudy: "27 hours",
    mentorship: "4 hours of mentor support",
    onlineAssessments: "Yes",
    expandable: {
      bullets: [
        "Provides an introduction to GitHub for collaboration, administration, and permissions.",
        "Explains how to increase productivity using GitHub Copilot.",
        "Covers prompt engineering for Copilot effectiveness.",
        "Demonstrates GitHub Copilot in programming, including JavaScript, Python, and automation with GitHub Actions.",
        "Summarizes workflow acceleration through AI-powered coding tools.",
      ],
    },
  },
  {
    slug: "cosmos-db",
    title: "Cloud Native Data Storage",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    summary:
      "This course introduces global databases through Azure Cosmos DB, teaching NoSQL solution design, migration, SDK integration, and advanced features for worldwide data applications.",
    ectsCredits: "1 credit",
    onlineSelfStudy: "27 hours",
    mentorship: "4 hours of mentor support",
    onlineAssessments: "Yes",
    expandable: {
      bullets: [
        "Introduces global database services and the role of Cosmos DB in powering applications.",
        "Explores Cosmos DB components and NoSQL data models.",
        "Teaches how to develop with Azure Cosmos DB by planning and implementing NoSQL solutions.",
        "Covers data migration strategies into Cosmos DB.",
        "Explains worldwide data solutions, SDK configuration, and advanced capabilities.",
      ],
    },
  },
  {
    slug: "azure-development",
    title: "Azure Development",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    summary:
      "This course provides the foundations of Azure development, covering app services, containerized solutions, API management, security, and best practices for building scalable applications.",
    ectsCredits: "1 credit",
    onlineSelfStudy: "27 hours",
    mentorship: "4 hours of mentor support",
    onlineAssessments: "Yes",
    expandable: {
      bullets: [
        "Introduces the foundations of Azure development, including App Services and Functions.",
        "Explains how to develop solutions with unstructured data, containers, and container apps.",
        "Covers advanced concepts, including API management, security, and app configurations.",
        "Provides best practices for scalable, secure Azure development.",
      ],
    },
  },
];

const HomePage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State: only one program slug can be expanded
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggleExpand = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  useEffect(() => {
    // Smooth anchor scrolling (keeps previous behavior)
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    anchors.forEach((a) => a.addEventListener("click", handleClick));
    return () =>
      anchors.forEach((a) => a.removeEventListener("click", handleClick));
  }, []);

  return (
    <div className="bg-white text-gray-700 font-sans leading-relaxed">
      {/* Header */}
      <header
        id="site-header"
        className="sticky top-0 z-50 bg-gradient-to-r from-white/95 via-green-50/90 to-white/95 backdrop-blur-md shadow transition-all duration-300"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img
              src="/growtechafrica.png"
              width={56}
              height={56}
              alt="GrowTechAfrica Logo"
              className="rounded-xl shadow-md group-hover:rotate-3 group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/80x80/000000/FFFFFF?text=GTA";
              }}
            />
            <span className="text-2xl font-extrabold text-gray-800 ml-3 tracking-tight group-hover:text-grass-green transition-colors duration-300">
              GrowTechAfrica
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            {[
              ["About", "#about"],
              ["Programs", "#programs"],
              ["Who Should Enroll", "#who"],
              ["Career Outcomes", "#outcomes"],
              ["Partners", "#partners"],
              ["Team", "#team"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative text-gray-700 hover:text-grass-green transition-colors duration-300 group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-grass-green transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <Link
              to="/form"
              className="ml-4 bg-grass-green text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-grass-green/40 hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Enroll</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-grass-green focus:outline-none transition"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-xl animate-slideFade"
          >
            <div className="px-6 py-4 space-y-2">
              {[
                ["About", "#about"],
                ["Programs", "#programs"],
                ["Who Should Enroll", "#who"],
                ["Career Outcomes", "#outcomes"],
                ["Partners", "#partners"],
                ["Team", "#team"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="block py-2 px-3 rounded hover:bg-gray-100 hover:text-grass-green transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}

              <Link
                to="/form"
                className="block bg-grass-green text-white text-center py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enroll
              </Link>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @keyframes slideFade {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideFade {
          animation: slideFade 0.4s ease-out;
        }

        /* Shrink header on scroll */
        #site-header.scrolled {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
      `}</style>

      {/* Hero */}
      <section
        className="relative overflow-hidden text-white py-24 md:py-40"
        style={{ backgroundColor: "#0f172a" }}
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
            Self-paced learning, mentorship, and industry-recognised
            certificates.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="#programs"
              className="relative bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300"
            >
              Explore Programs
            </a>
            <a
              href="/form"
              className="relative border border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 shadow-lg hover:shadow-white/30 transform hover:scale-105 transition-all duration-300"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
            About GrowTechAfrica
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            GrowTechAfrica is dedicated to bridging the technology skills gap
            across the continent. We deliver{" "}
            <span className="font-semibold text-green-600">
              practical, employer-aligned learning
            </span>
            in partnership with global institutions. Our Microdegree
            programs—designed with
            <span className="font-semibold text-blue-600"> Microsoft</span> and
            <span className="font-semibold text-purple-600">
              {" "}
              KAMK University
            </span>
            —offer a pathway to international recognition, employment, and
            further studies in Europe and beyond.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              {/* Mission */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-3">
                  🚀 Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the founder and head of GrowTechAfrica, I believe in
                  creating accessible, world-class learning opportunities that
                  transform careers and communities. We equip learners with real
                  skills employers need.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-3">
                  🌍 Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To cultivate a generation of African tech professionals who
                  lead innovation, entrepreneurship, and economic growth across
                  the continent.
                </p>
              </div>

              {/* Core Values */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-3">
                  💡 Core Values
                </h3>
                <ul className="text-gray-700 space-y-2 list-inside">
                  <li>🤝 Inclusivity — equal access to education for all</li>
                  <li>
                    🏆 Excellence — high standards in education & mentorship
                  </li>
                  <li>
                    ⚡ Innovation — adopting modern tools and AI responsibly
                  </li>
                  <li>🌱 Community — supportive learning and mentorship</li>
                  <li>
                    📈 Impact — measurable outcomes for students and employers
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1400&auto=format&fit=crop"
                alt="GrowTechAfrica students"
                className="rounded-2xl shadow-2xl max-w-full transform hover:scale-105 transition duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://placehold.co/600x400/111827/FFFFFF?text=GrowTechAfrica";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Study With Us */}
      <section id="why" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
            Why Study with GrowTechAfrica
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Practical microdegrees built with industry partners — flexible,
            career-focused, and globally recognised.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">
                ⏱️
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Self-Paced
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Learn on your schedule with up to 12 months access to materials.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">
                👩‍🏫
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Mentorship
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Region-specific in-class mentorship to guide projects and
                assessments.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-12 h-12 bg-purple-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">
                🎓
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Verified Credentials
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Course certificates, professional certificate & LinkedIn badges
                with QR verification.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">
                💼
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Industry Outcomes
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Designed for employability: roles in AI, data, cloud, and
                DevOps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16">
        <div className="container mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Microsoft Skills for Jobs Microdegree Programs
          </h2>
          <p className="text-gray-600 max-w-3xl lg:max-w-full lg:w-screen px-4 text-justify">
            The Microsoft Skills for Jobs Microdegree Program is designed to help you build real-world tech skills that employers want and a pathway for higher studies in EU countries. Microdegree Programs focuses on in-demand technology areas like cybersecurity, cloud computing, Low code tool set, AI, data analytics, and more. The program is built around practical, job-relevant skills and uses a flexible, self-paced learning model that fits your schedule. Whether you are a student, recent graduate, freelancer, technology professional, career changer, or an individual seeking skills for employment without pursuing a full degree or diploma, this program is tailored for you. You will learn through high-quality courses jointly developed by Microsoft, KAMK University of Applied Sciences (Finland), and global tech companies. The courses follow the European Credit Transfer and Accumulation System (ECTS), meaning your credits and certificates are internationally recognized for quality international and local jobs and higher studies in EU countries. The Microsoft Skills for Job Microdegree Program is an online program designed for self-paced learning, with in-class mentorship (region-specific) to support your journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-start">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300"
            >
              {/* Image */}
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4 space-y-3 text-left">
                <h2 className="text-2xl font-bold">{program.title}</h2>
                <p className="text-gray-700">{program.summary}</p>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>Credits:</strong> {program.ectsCredits}
                  </p>
                  <p>
                    <strong>Self-study:</strong> {program.onlineSelfStudy}
                  </p>
                  <p>
                    <strong>Mentorship:</strong> {program.mentorship}
                  </p>
                  <p>
                    <strong>Online Assessments:</strong>{" "}
                    {program.onlineAssessments}
                  </p>
                </div>

                {program.expandable && (
                  <div className="mt-2">
                    <div className="flex justify-between items-center gap-2">
                      <button
                        onClick={() => toggleExpand(program.slug)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-md border border-gray-300 transition"
                      >
                        {expandedSlug === program.slug
                          ? "Show less"
                          : "Learn more"}
                      </button>

                      <Link
                        to="/form"
                        className="bg-grass-green text-white px-4 py-2 rounded font-semibold hover:bg-grass-green-dark text-sm transition"
                      >
                        Enroll
                      </Link>
                    </div>

                    {/* Expanded Content */}
                    {expandedSlug === program.slug && (
                      <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-700">
                        {program.expandable.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for / Eligibility */}
      <section id="who" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
            Who Should Enroll
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Our Microdegree programs are designed for learners from all
            backgrounds who want practical, career-focused tech skills.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">
                🌱
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-3">
                Ideal for
              </h4>
              <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
                <li>University students seeking career-relevant credentials</li>
                <li>Job seekers and career changers</li>
                <li>Freelancers & professionals upskilling</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">
                ✅
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-3">
                Eligibility
              </h4>
              <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
                <li>
                  No prior experience required (basic IT awareness helpful)
                </li>
                <li>Good command of English</li>
                <li>Laptop, tablet, or smartphone with internet</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-12 h-12 bg-purple-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">
                💻
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-3">
                Study Format
              </h4>
              <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
                <li>Self-paced online learning + scheduled mentorship</li>
                <li>Assignments, projects & pass/fail assessments</li>
                <li>3–5 months avg. completion; 12 months access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section id="outcomes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
            Career Outcomes
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Graduates will be prepared for a range of industry roles. We
            emphasise applied skills recruiters value.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-blue-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
                🤖
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                AI / Cloud Developer
              </h4>
              <p className="text-sm text-gray-700">
                Build and deploy intelligent applications using Azure AI
                services.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-green-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
                📊
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Data Engineer / Analytics Developer
              </h4>
              <p className="text-sm text-gray-700">
                Design and manage data pipelines and analytics solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-purple-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
                🧠
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                ML Practitioner / AI Solutions Architect
              </h4>
              <p className="text-sm text-gray-700">
                Develop scalable AI solutions integrated into business
                workflows.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-orange-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
                ⚙️
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                DevOps / Automation Engineer
              </h4>
              <p className="text-sm text-gray-700">
                Boost CI/CD and automation with GitHub Copilot and cloud tools.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-pink-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
                🧑‍💻
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                AI Engineer
              </h4>
              <p className="text-sm text-gray-700">
                Hands-on roles in computer vision, NLP or generative AI
                implementations.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gradient-to-br from-teal-100 to-teal-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <div className="w-14 h-14 bg-teal-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
                🎓
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Pathway to Further Study
              </h4>
              <p className="text-sm text-gray-700">
                ECTS credits and joint certificates support applications for
                higher studies in EU institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Recognition */}
      <section id="partners" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            At{" "}
            <span className="font-semibold text-grass-green">
              GrowTechAfrica
            </span>
            , we partner with world-class institutions and companies to ensure
            high-quality content, industry relevance, and globally recognized
            certifications for our learners.
          </p>

          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-10">
            <img
              src="/kamklogo.png"
              alt="KAMK University"
              className="h-16"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/200x80/000000/FFFFFF?text=KAMK";
              }}
            />
            <img
              src="/microsoft.png"
              alt="Microsoft"
              className="h-16"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/200x80/000000/FFFFFF?text=Microsoft";
              }}
            />
            {/* Add more partner logos here if needed */}
          </div>

          {/* Certification & Recognition */}
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Certification & Recognition
            </h3>
            <p className="text-gray-600 mb-6">
              Upon completion, learners earn:
            </p>
            <ul className="text-gray-700 space-y-3 max-w-2xl mx-auto text-center">
              <li>
                <span className="text-grass-green font-bold mr-2">✓</span>
                Course certificates from Microsoft & KAMK University.
              </li>
              <li>
                <span className="text-grass-green font-bold mr-2">✓</span>A
                professional certificate for completing all courses.
              </li>
              <li>
                <span className="text-grass-green font-bold mr-2">✓</span>
                Shareable LinkedIn badges to showcase your achievements.
              </li>
              <li>
                <span className="text-grass-green font-bold mr-2">✓</span>
                QR-verifiable certificates for employer validation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <style>{`
  .grass-green { color: #4ade80; }
  .bg-grass-green { background-color: #4ade80; }
  .hover\\:bg-grass-green-dark:hover { background-color: #36b37e; }
`}</style>

      {/* Team Section */}
      <section
        id="team"
        className="relative py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="relative container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
            Meet Our <span className="text-grass-green">Team</span>
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Our leadership team blends deep expertise in{" "}
            <span className="font-semibold text-gray-800">
              technology, education, and innovation
            </span>{" "}
            to empower Africa's next generation of tech leaders.
          </p>

          {/* Team Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {[
              {
                name: "Dr. George Babafemi",
                role: "Co-Founder & Educator",
                img: "/georgebabafemi.png",
                desc: "Visionary educator and tech advocate with decades of experience in driving digital transformation across Africa's academic and business sectors.",
              },
              {
                name: "Dr. Richard Omoniyi",
                role: "Technologist & Mentor",
                img: "/richard.png",
                desc: "Renowned technologist and mentor, passionate about bridging the skills gap and fostering innovation through accessible tech education.",
              },
              {
                name: "Kehinde Segun",
                role: "Program Manager",
                img: "/kehindesegun.png",
                desc: "Experienced program manager and community builder, dedicated to empowering learners and supporting their journey into tech careers.",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-xs text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Wrapper */}
                <div className="w-40 h-40 mx-auto mb-4 rounded-full border-4 border-grass-green shadow-md overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-grass-green font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
      >
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/pattern.svg')] opacity-5"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Whether you want to partner with us, mentor students, or join a
            Microdegree — we’d love to hear from you.
          </p>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left">
            {/* Contact Info */}
            <div className="space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:enquiry@growtechafrica.com"
                    className="text-grass-green hover:underline"
                  >
                    enquiry@growtechafrica.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+2348104373270"
                    className="text-grass-green hover:underline"
                  >
                    +234 810 437 3270
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> 75 CMD Rd, Magodo GRA, Lagos,
                  Nigeria
                </p>
                <p className="text-sm text-gray-400">
                  Office Hours: Mon–Fri, 9:00am – 5:00pm WAT
                </p>
              </div>
            </div>

            {/* Quick Apply Card */}
            <div className="bg-gray-700 rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center text-center hover:scale-105 transform transition">
              <h3 className="text-2xl font-semibold mb-4">Ready to Begin?</h3>
              <p className="text-gray-300 mb-6">
                Start your journey today and unlock global tech opportunities.
              </p>
              <Link
                to="/form"
                className="inline-block bg-grass-green text-white px-6 py-3 rounded-full font-semibold hover:bg-grass-green-dark transition"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-center md:items-start text-center md:text-left gap-12">
          {/* Brand */}
          <div className="flex-1 max-w-sm mx-auto md:mx-0 text-center md:text-left">
            <h4 className="text-2xl font-bold text-white mb-3">
              GrowTechAfrica
            </h4>
            <p className="text-sm text-gray-400">
              Empowering Africa with world-class tech education, skills, and
              opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 max-w-sm mx-auto md:mx-0 text-center">
            <h4 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="flex flex-col md:flex-col gap-3">
              <li>
                <a
                  href="#programs"
                  className="hover:text-grass-green transition"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-grass-green transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link to="/form" className="hover:text-grass-green transition">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex-1 max-w-sm mx-auto md:mx-0 text-center">
            <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-center gap-6">
              <a href="#" className="hover:text-grass-green transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-grass-green transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-grass-green transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-grass-green transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} GrowTechAfrica. All rights reserved.
        </div>
      </footer>

      <style>{`
  .grass-green { color: #4ade80; }
  .bg-grass-green { background-color: #4ade80; }
  .border-grass-green { border-color: #4ade80; }
  .hover\\:bg-grass-green-dark:hover { background-color: #36b37e; }
`}</style>
    </div>
  );
};

export default HomePage;
