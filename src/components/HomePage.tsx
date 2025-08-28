import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Program = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  courses: string[];
  ectsCredits: string;
  onlineSelfStudy: string;
  portalAccessDuration: string;
  studyMaterialAndResources: string;
  mentorship: string;
  courseCompletion: string;
  professionalCertificateExam: string;
  programProfessionalCertificate: string;
  expandable?: { bullets: string[] };
};
const programs: Program[] = [
  {
    slug: "cloud-and-cybersecurity",
    title: "Cloud and Cybersecurity",
    image: "cloud&cybersecurity.jpg",
    summary:
      "The Cloud and Cybersecurity program equips learners with the knowledge and skills to design, secure, and manage modern cloud environments using Microsoft Azure and cybersecurity best practices. It covers foundational concepts, hands-on administration, security technologies, and advanced architectural strategies to protect data, applications, and infrastructure from evolving cyber threats.",
    courses: [
      "Elements of Cloud & Cybersecurity",
      "Azure Fundamentals",
      "Cybersecurity Fundamentals",
      "Azure Administrator",
      "Azure Security Technologies",
      "Cybersecurity Architect",
    ],
    ectsCredits: "12 Credits",
    onlineSelfStudy: "324 Hours",
    portalAccessDuration: "12 Months",
    studyMaterialAndResources: "Yes",
    mentorship: "Solid Mentorship Support",
    courseCompletion: "Assessment based",
    professionalCertificateExam: "Online",
    programProfessionalCertificate: "1",
    expandable: {
      bullets: [
        "Covers cloud computing essentials and cybersecurity fundamentals for building a solid foundation.",
        "Explains Azure services, identity management, storage, networking, and core Azure components.",
        "Introduces security frameworks, threat analysis, and best practices for safeguarding systems.",
        "Provides hands-on training in managing Azure resources, workloads, and enterprise environments.",
        "Focuses on implementing Azure security controls, compliance, and threat protection strategies.",
        "Explores advanced cybersecurity architecture for designing secure, scalable, and resilient systems.",
      ],
    },
  },
  {
    slug: "ai-developer",
    title: "AI Developer",
    image: "aidev.jpg",
    summary:
      "The AI Developer program equips learners with the technical expertise to design, build, and deploy intelligent solutions using Microsoft Azure and modern AI frameworks. It covers core AI principles, data analytics, development workflows, cloud-native data storage, and advanced AI development practices to prepare learners for real-world AI-driven projects and solutions.",
    courses: [
      "Microsoft Azure",
      "Artificial Intelligence",
      "Data and Analytics",
      "Development Workflow",
      "Cloud Native Data Storage",
      "Azure Development",
      "AI Development",
    ],
    ectsCredits: "10 Credits",
    onlineSelfStudy: "270 Hours",
    portalAccessDuration: "12 Months",
    studyMaterialAndResources: "Yes",
    mentorship: "Solid Mentorship Support",
    courseCompletion: "Assessment based",
    professionalCertificateExam: "Online",
    programProfessionalCertificate: "1",
    expandable: {
      bullets: [
        "Covers Microsoft Azure fundamentals, services, and integrations for AI-driven development.",
        "Introduces artificial intelligence concepts, frameworks, and machine learning models.",
        "Explains data analytics techniques for preparing, processing, and visualizing datasets.",
        "Teaches efficient development workflows and modern DevOps practices for AI solutions.",
        "Covers cloud-native data storage solutions for scalability, performance, and security.",
        "Provides hands-on training in Azure development and advanced AI solution deployment.",
      ],
    },
  },
  {
    slug: "power-platform",
    title: "Power Platform (PP)",
    image: "powerplatform.jpg",
    summary:
      "The Power Platform (PP) program equips learners with the knowledge and practical skills needed to design, build, and deploy business solutions using Microsoft Power Platform tools. It covers core fundamentals, app development, solution architecture, and functional consulting to help learners create efficient, low-code applications and automate business processes seamlessly.",
    courses: [
      "Microsoft PP Fundamentals",
      "Microsoft PP App Maker",
      "Microsoft PP Functional Consultant",
      "Microsoft PP Solution Architect",
    ],
    ectsCredits: "10 Credits",
    onlineSelfStudy: "270 Hours",
    portalAccessDuration: "12 Months",
    studyMaterialAndResources: "Yes",
    mentorship: "Solid Mentorship Support",
    courseCompletion: "Assessment based",
    professionalCertificateExam: "Online",
    programProfessionalCertificate: "1",
    expandable: {
      bullets: [
        "Introduces Microsoft Power Platform fundamentals, tools, and core capabilities.",
        "Teaches app development using Power Apps for creating low-code business solutions.",
        "Covers automation and process optimization using Power Automate and related tools.",
        "Explains data analysis, reporting, and visualization using Power BI within the platform.",
        "Provides hands-on training for functional consulting and business solution deployment.",
        "Explores solution architecture and strategies for scaling enterprise-grade applications.",
      ],
    },
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    image: "dataengineer.jpg",
    summary:
      "The Data Engineer program equips learners with the technical expertise to design, build, and manage scalable data solutions using Microsoft Azure and modern data engineering tools. It covers core Azure services, data analytics, AI integration, and advanced engineering techniques to prepare learners for real-world data-driven projects and enterprise solutions.",
    courses: [
      "Exploring Microsoft Azure",
      "Exploring Artificial Intelligence",
      "Exploring Data and Analytics",
      "Data Analytics with Power BI",
      "Data Engineering with Azure",
      "Data Engineering with Fabric",
    ],
    ectsCredits: "12 Credits",
    onlineSelfStudy: "324 Hours",
    portalAccessDuration: "12 Months",
    studyMaterialAndResources: "Yes",
    mentorship: "Solid Mentorship Support",
    courseCompletion: "Assessment based",
    professionalCertificateExam: "Online",
    programProfessionalCertificate: "1",
    expandable: {
      bullets: [
        "Introduces core Microsoft Azure services and infrastructure for data engineering solutions.",
        "Explores artificial intelligence integration within modern data-driven architectures.",
        "Covers data analytics principles, data processing techniques, and business insights generation.",
        "Provides hands-on training in building interactive dashboards and reports with Power BI.",
        "Teaches advanced data engineering practices using Azure pipelines, storage, and compute services.",
        "Explores Microsoft Fabric for managing, transforming, and scaling enterprise data solutions.",
      ],
    },
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    image: "dataanalyst.jpg",
    summary:
      "The Data Analyst program equips learners with the skills to collect, process, analyze, and visualize data using Microsoft Azure, Power BI, and modern analytics tools. It focuses on transforming raw data into actionable insights, building dynamic reports, and leveraging AI and Fabric for advanced data analytics and business intelligence solutions.",
    courses: [
      "Exploring Microsoft Azure",
      "Exploring Artificial Intelligence",
      "Exploring Data and Analytics",
      "Data Analytics with Power BI",
      "Data Analytics with Azure",
      "Data Analytics with Fabric",
    ],
    ectsCredits: "12 Credits",
    onlineSelfStudy: "324 Hours",
    portalAccessDuration: "12 Months",
    studyMaterialAndResources: "Yes",
    mentorship: "Solid Mentorship Support",
    courseCompletion: "Assessment based",
    professionalCertificateExam: "Online",
    programProfessionalCertificate: "1",
    expandable: {
      bullets: [
        "Introduces Microsoft Azure services and tools essential for modern data analytics.",
        "Explores the role of artificial intelligence in enhancing data-driven decision-making.",
        "Covers data analytics concepts, data processing techniques, and business intelligence strategies.",
        "Provides hands-on experience with Power BI to build interactive dashboards and reports.",
        "Teaches Azure-based analytics solutions for scalable, enterprise-grade data processing.",
        "Explores Microsoft Fabric for advanced data modeling, integration, and analytics workflows.",
      ],
    },
  },
];

const HomePage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const toggleExpand = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };
  // State & refs for each mobile tooltip
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const [mobileHeaderTooltipVisible, setMobileHeaderTooltipVisible] =
    useState(false);
  const mobileHeaderRef = useRef<HTMLDivElement>(null);
  const [mobileHeroTooltipVisible, setMobileHeroTooltipVisible] =
    useState(false);
  const heroEnrollRef = useRef<HTMLDivElement>(null);

  const [mobileProgramsTooltipVisible, setMobileProgramsTooltipVisible] =
    useState<Record<string, boolean>>({});
  const programsEnrollRef = useRef<Record<string, HTMLDivElement | null>>({});

  const [mobileContactTooltipVisible, setMobileContactTooltipVisible] =
    useState(false);
  const contactEnrollRef = useRef<HTMLDivElement>(null);

  const [mobileFooterTooltipVisible, setMobileFooterTooltipVisible] =
    useState(false);
  const footerEnrollRef = useRef<HTMLDivElement>(null);

  // Click outside handlers for each tooltip
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileHeaderRef.current &&
        !mobileHeaderRef.current.contains(e.target as Node)
      ) {
        setMobileHeaderTooltipVisible(false);
      }
      if (
        heroEnrollRef.current &&
        !heroEnrollRef.current.contains(e.target as Node)
      ) {
        setMobileHeroTooltipVisible(false);
      }
      if (
        contactEnrollRef.current &&
        !contactEnrollRef.current.contains(e.target as Node)
      ) {
        setMobileContactTooltipVisible(false);
      }
      if (
        footerEnrollRef.current &&
        !footerEnrollRef.current.contains(e.target as Node)
      ) {
        setMobileFooterTooltipVisible(false);
      }
      Object.keys(programsEnrollRef.current).forEach((slug) => {
        const ref = programsEnrollRef.current[slug];
        if (ref && !ref.contains(e.target as Node)) {
          setMobileProgramsTooltipVisible((prev) => ({
            ...prev,
            [slug]: false,
          }));
        }
      });
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Mobile tooltip click handlers
  const handleHeroClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!mobileHeroTooltipVisible) {
      e.preventDefault();
      setMobileHeroTooltipVisible(true);
    }
  };

  const handleProgramClick = (
    slug: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (!mobileProgramsTooltipVisible[slug]) {
      e.preventDefault();
      setMobileProgramsTooltipVisible((prev) => ({ ...prev, [slug]: true }));
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!mobileContactTooltipVisible) {
      e.preventDefault();
      setMobileContactTooltipVisible(true);
    }
  };

  const handleFooterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!mobileFooterTooltipVisible) {
      e.preventDefault();
      setMobileFooterTooltipVisible(true);
    }
  };

  const handleMobileHeaderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!mobileHeaderTooltipVisible) {
      e.preventDefault(); // prevent navigation until tooltip is dismissed
      setMobileHeaderTooltipVisible(true);
    }
  };

  const navLinks: [string, string][] = [
    ["About", "/#about"],
    ["Programs", "/#programs"],
    ["Who Should Apply", "/#who"],
    ["Career Outcomes", "/#outcomes"],
    ["Partners", "/#partners"],
    ["Team", "/#team"],
    ["Contact", "/#contact"],
  ];

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
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative text-gray-700 hover:text-grass-green transition-colors duration-300 group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-grass-green transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Header Enroll Button with Tooltip */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredButton("headerEnroll")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Link
                to="/webinar"
                className="ml-4 bg-grass-green text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-grass-green/40 hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Enroll</span>
              </Link>
              {hoveredButton === "headerEnroll" && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 md:w-80 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20">
                  <h3 className="font-bold text-lg mb-1">
                    Enrollment not started yet!
                  </h3>
                  <p className="text-sm">
                    Enrollment for the programs have not started yet. But there
                    is an upcoming
                    <strong>webinar</strong>webinar on{" "}
                    <strong>6th September</strong>. Click Enroll to register for
                    the webinar.
                  </p>
                </div>
              )}
            </div>
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
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="block py-2 px-3 rounded hover:bg-gray-100 hover:text-grass-green transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}

              {/* Mobile Enroll Button */}
              <div className="relative" ref={mobileHeaderRef}>
                <Link
                  to="/webinar"
                  className="block bg-grass-green text-white text-center py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
                  onClick={handleMobileHeaderClick}
                >
                  Enroll
                </Link>

                {mobileHeaderTooltipVisible && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 md:w-80 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20">
                    <h3 className="font-bold text-lg mb-1">
                      Enrollment not started yet!
                    </h3>
                    <p className="text-sm">
                      Enrollment for the programs have not started yet. But
                      there is an upcoming
                      <strong>webinar</strong>webinar on{" "}
                      <strong>6th September</strong>. Click Enroll to register
                      for the webinar.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
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
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 items-center">
            <a
              href="#programs"
              className="relative bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300"
            >
              Explore Programs
            </a>

            {/* Enroll Now Button */}
            <div className="relative" ref={heroEnrollRef}>
              <Link
                to="/webinar"
                className="relative border border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 shadow-lg hover:shadow-white/30 transform hover:scale-105 transition-all duration-300"
                onClick={handleHeroClick}
              >
                Enroll Now
              </Link>

              {/* Desktop tooltip */}
              {hoveredButton === "heroEnroll" && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 md:w-80 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 hidden md:block">
                  <h3 className="font-bold text-lg mb-1">
                    Enrollment not started yet!
                  </h3>
                  <p className="text-sm">
                    Enrollment for the programs have not started yet. But there
                    is an upcoming
                    <strong>webinar</strong>webinar on{" "}
                    <strong>6th September</strong>. Click Enroll to register for
                    the webinar.
                  </p>
                </div>
              )}

              {/* Mobile tooltip */}
              {mobileHeroTooltipVisible && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 md:w-80 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 md:hidden">
                  <h3 className="font-bold text-lg mb-1">
                    Enrollment not started yet!
                  </h3>
                  <p className="text-sm">
                    Enrollment for the programs have not started yet. But there
                    is an upcoming
                    <strong>webinar</strong>webinar on{" "}
                    <strong>6th September</strong>. Click Enroll to register for
                    the webinar.
                  </p>
                </div>
              )}
            </div>
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

      {/* Programs Section */}
      <section id="programs" className="py-16">
        <div className="container mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Microsoft Skills for Jobs Microdegree Programs
          </h2>
          <p className="text-gray-600 max-w-3xl lg:max-w-full lg:w-screen px-4 text-justify">
            {/* Program description */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-start">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-3 text-left">
                <h2 className="text-2xl font-bold">{program.title}</h2>
                <p className="text-gray-700">{program.summary}</p>

                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mt-4">
                  <div className="w-full md:w-1/2">
                    <strong>Courses:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                      {program.courses.map((course, index) => (
                        <li key={index}>{course}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full md:w-1/2 space-y-2 text-gray-700">
                    {/* Program details omitted for brevity */}
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center gap-2 relative">
                  <button
                    onClick={() => toggleExpand(program.slug)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-md border border-gray-300 transition"
                  >
                    {expandedSlug === program.slug ? "Show less" : "Learn more"}
                  </button>

                  {/* Enroll Button */}
                  <div
                    className="relative"
                    ref={(el) => (programsEnrollRef.current[program.slug] = el)}
                    onMouseEnter={() => setHoveredButton(program.slug)}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <Link
                      to="/webinar"
                      className="bg-grass-green text-white px-4 py-2 rounded font-semibold hover:bg-grass-green-dark text-sm transition relative z-10"
                      onClick={(e) => handleProgramClick(program.slug, e)}
                    >
                      Enroll
                    </Link>

                    {/* Desktop tooltip */}
                    {hoveredButton === program.slug && (
                      <div className="absolute bottom-full right-0 mr-4 mb-2 w-72 md:w-96 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 hidden md:block">
                        <h3 className="font-bold text-lg mb-1">
                          Enrollment not started yet!
                        </h3>
                        <p className="text-sm">
                          Enrollment for the programs have not started yet. But
                          there is an upcoming
                          <strong>webinar</strong>webinar on{" "}
                          <strong>6th September</strong>. Click Enroll to
                          register for the webinar.
                        </p>
                      </div>
                    )}

                    {/* Mobile tooltip */}
                    {mobileProgramsTooltipVisible[program.slug] && (
                      <div className="absolute bottom-full right-0 mr-4 mb-2 w-72 md:w-96 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 md:hidden">
                        <h3 className="font-bold text-lg mb-1">
                          Enrollment not started yet!
                        </h3>
                        <p className="text-sm">
                          Enrollment for the programs have not started yet. But
                          there is an upcoming
                          <strong>webinar</strong>webinar on{" "}
                          <strong>6th September</strong>. Click Enroll to
                          register for the webinar.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {expandedSlug === program.slug && (
                  <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-700">
                    {program.expandable.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
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

              {/* Enroll Button */}
              <div
                className="relative"
                ref={contactEnrollRef}
                onMouseEnter={() => setHoveredButton("contactEnroll")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <Link
                  to="/webinar"
                  className="inline-block bg-grass-green text-white px-6 py-3 rounded-full font-semibold hover:bg-grass-green-dark transition relative z-10"
                  onClick={handleContactClick}
                >
                  Enroll Now
                </Link>

                {/* Desktop tooltip */}
                {hoveredButton === "contactEnroll" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 md:w-80 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 hidden md:block">
                    <h3 className="font-bold text-lg mb-1">
                      Enrollment not started yet!
                    </h3>
                    <p className="text-sm">
                      Enrollment for the programs have not started yet. But
                      there is an upcoming
                      <strong>webinar</strong>webinar on{" "}
                      <strong>6th September</strong>. Click Enroll to register
                      for the webinar.
                    </p>
                  </div>
                )}

                {/* Mobile tooltip */}
                {mobileContactTooltipVisible && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 md:w-80 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 md:hidden">
                    <h3 className="font-bold text-lg mb-1">
                      Enrollment not started yet!
                    </h3>
                    <p className="text-sm">
                      Enrollment for the programs have not started yet. But
                      there is an upcoming
                      <strong>webinar</strong>webinar on{" "}
                      <strong>6th September</strong>. Click Enroll to register
                      for the webinar.
                    </p>
                  </div>
                )}
              </div>
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
                <div
                  className="relative"
                  ref={footerEnrollRef}
                  onMouseEnter={() => setHoveredButton("footerEnroll")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <Link
                    to="/webinar"
                    className="hover:text-grass-green transition"
                    onClick={handleFooterClick}
                  >
                    Apply Now
                  </Link>

                  {/* Desktop tooltip */}
                  {hoveredButton === "footerEnroll" && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -mt-2 w-72 md:w-80 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 hidden md:block">
                      <h3 className="font-bold text-lg mb-1">
                        Enrollment not started yet!
                      </h3>
                      <p className="text-sm">
                        Enrollment for the programs have not started yet. But
                        there is an upcoming
                        <strong>webinar</strong>webinar on{" "}
                        <strong>6th September</strong>. Click Apply Now to
                        register for the webinar.
                      </p>
                    </div>
                  )}

                  {/* Mobile tooltip above the button */}
                  {mobileFooterTooltipVisible && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -mt-2 w-72 md:w-80 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 md:hidden">
                      <h3 className="font-bold text-lg mb-1">
                        Enrollment not started yet!
                      </h3>
                      <p className="text-sm">
                        Enrollment for the programs have not started yet. But
                        there is an upcoming
                        <strong>webinar</strong>webinar on{" "}
                        <strong>6th September</strong>. Click Apply Now to
                        register for the webinar.
                      </p>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex-1 max-w-sm mx-auto md:mx-0 text-center">
            <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-center gap-6">
              {/* Facebook */}
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61579253218062"
                className="transition transform hover:scale-125 hover:rotate-6 hover:text-blue-500 duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>

              {/* X (Twitter) */}
              <a
                target="_blank"
                href="#"
                className="transition transform hover:scale-125 hover:-rotate-6 hover:text-black duration-300"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>

              {/* LinkedIn */}
              <a
                target="_blank"
                href="#"
                className="transition transform hover:scale-125 hover:rotate-6 hover:text-blue-700 duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>

              {/* Instagram */}
              <a
                target="_blank"
                href="https://www.instagram.com/grow.techafrica/"
                className="transition transform hover:scale-125 hover:-rotate-6 hover:text-pink-500 duration-300"
              >
                <FaInstagram className="w-6 h-6" />
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
