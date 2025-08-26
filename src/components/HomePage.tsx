// import { Link } from "react-router-dom";
// import { useEffect } from "react";

// const HomePage = () => {
//   useEffect(() => {
//     // Mobile menu toggle
//     const mobileMenuButton = document.getElementById("mobile-menu-button");
//     const mobileMenu = document.getElementById("mobile-menu");
//     if (mobileMenuButton && mobileMenu) {
//       mobileMenuButton.addEventListener("click", () => {
//         mobileMenu.classList.toggle("hidden");
//       });
//     }

//     // Smooth scrolling for anchor links
//     const anchors = document.querySelectorAll('a[href^="#"]');
//     anchors.forEach((anchor) => {
//       anchor.addEventListener("click", (e) => {
//         e.preventDefault();
//         const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
//           "href"
//         );
//         if (href) {
//           const target = document.querySelector(href);
//           if (target) {
//             target.scrollIntoView({ behavior: "smooth" });
//           }
//         }
//       });
//     });

//     // Cleanup
//     return () => {
//       if (mobileMenuButton && mobileMenu) {
//         mobileMenuButton.removeEventListener("click", () => {
//           mobileMenu.classList.toggle("hidden");
//         });
//       }
//       anchors.forEach((anchor) => {
//         anchor.removeEventListener("click", () => {});
//       });
//     };
//   }, []);

//   return (
//     <div className="bg-white text-gray-700 font-sans">
//       {/* Header */}
//       <header className="bg-white shadow-md sticky top-0 z-50">
//         <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
//           <a href="/" className="flex items-center">
//             <img
//               src="/growtechafrica.png"
//               width={50}
//               height={80}
//               alt="GrowTechAfrica Logo"
//             />
//             <span className="text-2xl font-bold text-gray-800 ml-2">
//               GrowTechAfrica
//             </span>
//           </a>
//           <div className="hidden md:flex space-x-8">
//             <a
//               href="#about"
//               className="text-gray-600 hover:text-grass-green transition duration-300"
//             >
//               About Us
//             </a>
//             <a
//               href="#programs"
//               className="text-gray-600 hover:text-grass-green transition duration-300"
//             >
//               Programs
//             </a>
//             <a
//               href="#Team"
//               className="text-gray-600 hover:text-grass-green transition duration-300"
//             >
//               Team
//             </a>
//             <a
//               href="#partners"
//               className="text-gray-600 hover:text-grass-green transition duration-300"
//             >
//               Partners
//             </a>
//             <a
//               href="#contact"
//               className="text-gray-600 hover:text-grass-green transition duration-300"
//             >
//               Contact
//             </a>
//           </div>
//           <div className="md:hidden">
//             <button
//               id="mobile-menu-button"
//               className="text-gray-600 focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </nav>
//         {/* Mobile Menu */}
//         <div id="mobile-menu" className="hidden md:hidden">
//           <a
//             href="#about"
//             className="block py-2 px-4 text-sm hover:bg-gray-100"
//           >
//             About Us
//           </a>
//           <a
//             href="#programs"
//             className="block py-2 px-4 text-sm hover:bg-gray-100"
//           >
//             Programs
//           </a>
//           <a
//             href="#partners"
//             className="block py-2 px-4 text-sm hover:bg-gray-100"
//           >
//             Partners
//           </a>
//           <a
//             href="#contact"
//             className="block py-2 px-4 text-sm hover:bg-gray-100"
//           >
//             Contact
//           </a>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section
//         className="hero-bg text-white py-20 md:py-32"
//         style={{ backgroundColor: "#111827" }}
//       >
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
//             Empowering Africa's Future with Tech Skills
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//             In partnership with KAMK University and Microsoft, we offer
//             world-class microdegree programs to equip you for the global tech
//             industry.
//           </p>
//           <a
//             href="#programs"
//             className="bg-grass-green text-white font-bold py-3 px-8 rounded-full hover:bg-grass-green-dark transition duration-300 text-lg"
//           >
//             Explore Our Programs
//           </a>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
//           About GrowTechAfrica
//         </h2>
//         <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
//           We are committed to bridging the tech skills gap in Africa by
//           providing accessible, high-quality education that leads to tangible
//           career opportunities.
//         </p>
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="ml-12">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               Our Vision
//             </h3>
//             <p className="mb-4">
//               Our vision is to cultivate a new generation of African tech
//               leaders. We believe in the power of education to transform lives
//               and economies. By partnering with world-renowned institutions, we
//               bring globally recognized certifications and skills to the African
//               youth and adults.
//             </p>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               Our Mission
//             </h3>
//             <p className="mb-4">
//               Our mission is to provide accessible, high-quality tech education
//               that empowers individuals to thrive in the digital economy. We aim
//               to equip learners with the skills they need to succeed in today's
//               fast-paced tech landscape, fostering innovation and
//               entrepreneurship across the continent.
//             </p>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               Our Values
//             </h3>
//             <ul className="list-disc list-inside text-gray-600">
//               <li>
//                 Inclusivity: We believe in equal access to education for all.
//               </li>
//               <li>
//                 Excellence: We strive for the highest standards in education and
//                 mentorship.
//               </li>
//               <li>
//                 Innovation: We embrace new technologies and teaching methods to
//                 enhance learning.
//               </li>
//               <li>
//                 Community: We foster a supportive community of learners and
//                 mentors.
//               </li>
//               <li>
//                 Impact: We measure our success by the positive change we create
//                 in individuals and communities.
//               </li>
//             </ul>
//             <p className="mt-4">
//               Join us in our mission to empower Africa's future through
//               technology. Together, we can build a brighter, more inclusive
//               digital economy.
//             </p>
//           </div>
//           <div className="text-center">
//             <img
//               src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2500&auto=format&fit=crop"
//               alt="Diverse group of students learning"
//               className="rounded-lg shadow-xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Programs Section */}
//       <section id="programs" className="py-20 bg-gray-50">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
//           Microsoft Skills for Jobs Microdegree Programs
//         </h2>
//         <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
//           These programs are your gateway to becoming a proficient technology
//           expert. Each program is designed for online, independent study,
//           supported by mentorship, and awards certificates with European Credit
//           Transfer and Accumulation System (ECTS) credits.
//         </p>
//         <div className="w-full md:w-2/3 mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Program Card 1 */}
//             <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
//               <img
//                 src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
//                 alt="Exploring Microsoft Azure"
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Microsoft Azure
//               </h3>
//               <p className="mb-4">
//                 Learn the foundations of Microsoft Azure: basics,
//                 infrastructure, computing services, and networking.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>
//                   <span className="font-bold grass-green">2 ECTS</span> Credits
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">54 Hours</span> of
//                   Learning
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">1 Course</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Program Card 2 */}
//             <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
//               <img
//                 src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
//                 alt="Exploring Artificial Intelligence"
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Artificial Intelligence
//               </h3>
//               <p className="mb-4">
//                 Dive into AI fundamentals, machine learning, computer vision,
//                 natural language processing, and generative AI.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>
//                   <span className="font-bold grass-green">2 ECTS</span> Credits
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">54 Hours</span> of
//                   Learning
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">1 Course</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Program Card 3 */}
//             <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
//               <img
//                 src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
//                 alt="Exploring Data and Analytics"
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Data and Analytics
//               </h3>
//               <p className="mb-4">
//                 Build your expertise in foundational data concepts, relational &
//                 non-relational databases, and analytics in Azure.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>
//                   <span className="font-bold grass-green">2 ECTS</span> Credits
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">27 Hours</span> of
//                   Learning
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">1 Course</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Program Card 4 */}
//             <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
//               <img
//                 src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
//                 alt="Accelerating Development Workflow"
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Accelerating Development Workflow
//               </h3>
//               <p className="mb-4">
//                 Master GitHub collaboration, GitHub Copilot, and automation to
//                 boost productivity and streamline development.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>
//                   <span className="font-bold grass-green">1 ECTS</span> Credit
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">27 Hours</span> of
//                   Learning
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">1 Course</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Program Card 5 */}
//             <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
//               <img
//                 src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
//                 alt="Getting Started With Cloud Native Data Storage"
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Cloud Native Data Storage
//               </h3>
//               <p className="mb-4">
//                 Learn to use Azure Cosmos DB for global database services, NoSQL
//                 solutions, and worldwide data management.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>
//                   <span className="font-bold grass-green">1 ECTS</span> Credit
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">27 Hours</span> of
//                   Learning
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">1 Course</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Program Card 6 */}
//             <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
//               <img
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
//                 alt="Getting Started With Azure Development"
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Azure Development
//               </h3>
//               <p className="mb-4">
//                 Discover Azure AI development, web apps, Azure Functions, and
//                 containerized solutions for modern applications.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>
//                   <span className="font-bold grass-green">1 ECTS</span> Credit
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">27 Hours</span> of
//                   Learning
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">1 Course</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Program Card 7 */}
//             <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-300">
//               <img
//                 src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
//                 alt="Getting Started With AI Development"
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 AI Development
//               </h3>
//               <p className="mb-4">
//                 Build AI skills with Azure AI Services, generative AI, NLP, and
//                 advanced practices in security, APIs, and RAG.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>
//                   <span className="font-bold grass-green">1 ECTS</span> Credit
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">27 Hours</span> of
//                   Learning
//                 </li>
//                 <li>
//                   <span className="font-bold grass-green">1 Course</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8 text-center">
//             <Link
//               to="/form"
//               className="bg-grass-green text-white font-bold py-3 px-8 rounded-full hover:bg-grass-green-dark transition duration-300 text-lg"
//             >
//               Enroll Now
//             </Link>
//           </div>
//         </div>
//       </section>
//       {/* Team Section */}
//       <section id="team" className="py-20 bg-white">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
//           Meet Our Team
//         </h2>
//         <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
//           Our leadership team brings together deep expertise in technology,
//           education, and innovation to empower Africa's next generation of tech
//           leaders.
//         </p>
//         <div className="flex flex-wrap justify-center gap-8">
//           {/* Dr. George Babafemi */}
//           <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-full max-w-xs flex flex-col items-center">
//             <img
//               src="/georgebabafemi.jpg"
//               alt="Dr. George Babafemi"
//               className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-grass-green"
//             />
//             <h3 className="text-xl font-bold text-gray-800 mb-2">
//               Dr. George Babafemi
//             </h3>
//             <p className="text-gray-600 text-center">
//               Visionary educator and tech advocate with decades of experience in
//               driving digital transformation across Africa's academic and
//               business sectors.
//             </p>
//           </div>
//           {/* Dr. Richard Omoniyi */}
//           <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-full max-w-xs flex flex-col items-center">
//             <img
//               src="/richard_profile.png"
//               alt="Dr. Richard Omoniyi"
//               className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-grass-green"
//             />
//             <h3 className="text-xl font-bold text-gray-800 mb-2">
//               Dr. Richard Omoniyi
//             </h3>
//             <p className="text-gray-600 text-center">
//               Renowned technologist and mentor, passionate about bridging the
//               skills gap and fostering innovation through accessible tech
//               education.
//             </p>
//           </div>
//           {/* Kehinde Segun */}
//           <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-full max-w-xs flex flex-col items-center">
//             <img
//               src="/kehindesegun.jpeg"
//               alt="Kehinde Segun"
//               className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-grass-green"
//             />
//             <h3 className="text-xl font-bold text-gray-800 mb-2">
//               Kehinde Segun
//             </h3>
//             <p className="text-gray-600 text-center">
//               Experienced program manager and community builder, dedicated to
//               empowering learners and supporting their journey into tech
//               careers.
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* Partners Section */}
//       <section id="partners" className="py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
//           Our Esteemed Partners
//         </h2>
//         <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
//           We collaborate with global leaders in education and technology to
//           bring you the best learning experience and opportunities.
//         </p>
//         <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
//           <img
//             src="/kamklogo.png"
//             alt="KAMK University Logo"
//             className="h-16 md:h-20"
//             onError={(e) => {
//               (e.currentTarget as HTMLImageElement).src =
//                 "https://placehold.co/200x80/000000/FFFFFF?text=KAMK+University";
//             }}
//           />
//           <img
//             src="/microsoft.png"
//             alt="Microsoft Logo"
//             className="h-16 md:h-20"
//             onError={(e) => {
//               (e.currentTarget as HTMLImageElement).src =
//                 "https://placehold.co/200x80/000000/FFFFFF?text=Microsoft";
//             }}
//           />
//           {/* Add other partner logos here */}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-gray-800 text-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
//             Get In Touch
//           </h2>
//           <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
//             Have questions? Want to enroll? We'd love to hear from you. Reach
//             out to us, and let's start your tech journey together.
//           </p>
//           <div className="max-w-lg mx-auto text-center">
//             <p className="text-lg mb-2">
//               Email us at:{" "}
//               <a
//                 href="mailto:enquiry@growtechafrica.com"
//                 className="text-grass-green hover:underline"
//               >
//                 enquiry@growtechafrica.com
//               </a>
//             </p>
//             <p className="text-lg">
//               Or visit us at: 75 CMD Rd, Magodo GRA, Lagos, Nigeria
//             </p>
//             <p className="text-lg">
//               Phone:{" "}
//               <a
//                 href="tel:+2348104373270"
//                 className="text-grass-green hover:underline"
//               >
//                 +234 810 437 3270
//               </a>
//             </p>
//             <div className="mt-8">
//               {/* Use <Link to="/form"> if using React Router, else use <a href="form.html"> */}
//               <Link
//                 to="/form"
//                 className="bg-grass-green text-white font-bold py-3 px-8 rounded-full hover:bg-grass-green-dark transition duration-300 text-lg"
//               >
//                 Enroll Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-6">
//         <div className="container mx-auto px-6 text-center">
//           <p>&copy; 2025 GrowTechAfrica.com. All Rights Reserved.</p>
//         </div>
//       </footer>

//       {/* Tailwind custom styles */}
//       <style>{`
//         .grass-green { color: #4ade80; }
//         .bg-grass-green { background-color: #4ade80; }
//         .border-grass-green { border-color: #4ade80; }
//         .hover\\:bg-grass-green-dark:hover { background-color: #36b37e; }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Program = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  ects: number;
  hours: number;
  coursesCount: number;
  bullets?: string[];
  expandable?: { heading: string; items: string[] };
};

const programs: Program[] = [
  {
    slug: "ai-developer",
    title: "AI Developer (Microdegree)",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "12 ECTS | 324 hours | 7 courses. Self-paced, mentored, industry-aligned. Build intelligent applications with Azure AI services.",
    ects: 12,
    hours: 324,
    coursesCount: 7,
    bullets: [
      "Self-paced learning with region-specific mentorship",
      "Assignments, project-based assessments & exams",
      "QR-verifiable certificates and LinkedIn badges",
      "Access to course materials for up to 12 months",
    ],
    expandable: {
      heading: "AI Developer — Course Areas (7)",
      items: [
        "Exploring Microsoft Azure — fundamentals, networking, compute, governance & cost",
        "Exploring Artificial Intelligence — ML fundamentals, computer vision, generative AI",
        "Exploring Data & Analytics — relational/non-relational data and analytics",
        "Accelerating Development Workflow — GitHub, Copilot & automation",
        "Cloud Native Data Storage — Azure Cosmos DB & global databases",
        "Getting Started with Azure Development — app services, functions, containers",
        "Getting Started with AI Development — Azure AI services, NLP, RAG, OpenAI",
      ],
    },
  },
  {
    slug: "microsoft-azure",
    title: "Exploring Microsoft Azure",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Foundational Azure knowledge: compute, networking, storage, governance and cost management.",
    ects: 2,
    hours: 54,
    coursesCount: 1,
    bullets: [
      "Basics of Azure and physical infrastructure",
      "Management & computing services",
      "Storage, security, and migrations",
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Exploring Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Core AI concepts, machine learning, computer vision, document intelligence, NLP and generative AI on Azure.",
    ects: 2,
    hours: 54,
    coursesCount: 1,
    bullets: [
      "Foundations of ML, supervised & unsupervised learning",
      "Computer vision, facial recognition, OCR",
      "Generative AI and responsible AI practices",
    ],
  },
  {
    slug: "data-analytics",
    title: "Exploring Data & Analytics",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Foundational data concepts, relational & non-relational databases, and analytics techniques on Azure.",
    ects: 2,
    hours: 27,
    coursesCount: 1,
    bullets: [
      "Relational and NoSQL databases (Azure Cosmos DB)",
      "Large-scale and real-time analytics",
      "Data visualization & BI fundamentals",
    ],
  },
  {
    slug: "github-workflow",
    title: "Accelerating Development Workflow",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Master GitHub, collaboration, Copilot and automation to supercharge developer productivity.",
    ects: 1,
    hours: 27,
    coursesCount: 1,
    bullets: [
      "Getting started with GitHub & collaboration",
      "GitHub Copilot, prompt engineering and coding productivity",
      "CI/CD automation with GitHub Actions",
    ],
  },
  {
    slug: "cosmos-db",
    title: "Cloud-Native Data Storage",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Design and implement global, scalable NoSQL solutions using Azure Cosmos DB and cloud-native patterns.",
    ects: 1,
    hours: 27,
    coursesCount: 1,
    bullets: [
      "Global database services & Cosmos DB fundamentals",
      "NoSQL planning, implementation and migration",
      "SDK usage and advanced Cosmos DB capabilities",
    ],
  },
  {
    slug: "azure-development",
    title: "Azure Development",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Build and secure cloud apps with App Service, Functions, containers, APIs and best practices for production.",
    ects: 1,
    hours: 27,
    coursesCount: 1,
    bullets: [
      "Azure App Service, Web Apps & Functions",
      "Handling unstructured data and containers",
      "API Management and security best practices",
    ],
  },
];

const HomePage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

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

  const toggleExpand = (slug: string) => {
    setExpandedSlug((s) => (s === slug ? null : slug));
  };

  return (
    <div className="bg-white text-gray-700 font-sans leading-relaxed">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img
              src="/growtechafrica.png"
              width={56}
              height={56}
              alt="GrowTechAfrica Logo"
              className="rounded"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/80x80/000000/FFFFFF?text=GTA";
              }}
            />
            <span className="text-2xl font-extrabold text-gray-800 ml-3">
              GrowTechAfrica
            </span>
          </a>

          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#about"
              className="text-gray-600 hover:text-grass-green transition"
            >
              About
            </a>
            <a
              href="#programs"
              className="text-gray-600 hover:text-grass-green transition"
            >
              Programs
            </a>
            <a
              href="#who"
              className="text-gray-600 hover:text-grass-green transition"
            >
              Who Should Enroll
            </a>
            <a
              href="#outcomes"
              className="text-gray-600 hover:text-grass-green transition"
            >
              Career Outcomes
            </a>
            <a
              href="#partners"
              className="text-gray-600 hover:text-grass-green transition"
            >
              Partners
            </a>
            <a
              href="#team"
              className="text-gray-600 hover:text-grass-green transition"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-grass-green transition"
            >
              Contact
            </a>
            <Link
              to="/form"
              className="ml-4 bg-grass-green text-white px-4 py-2 rounded-full font-semibold hover:bg-grass-green-dark transition"
            >
              Enroll
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
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
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-2">
              <a
                href="#about"
                className="block py-2 px-2 rounded hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#programs"
                className="block py-2 px-2 rounded hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programs
              </a>
              <a
                href="#who"
                className="block py-2 px-2 rounded hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Who Should Enroll
              </a>
              <a
                href="#outcomes"
                className="block py-2 px-2 rounded hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Career Outcomes
              </a>
              <a
                href="#partners"
                className="block py-2 px-2 rounded hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partners
              </a>
              <a
                href="#team"
                className="block py-2 px-2 rounded hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </a>
              <a
                href="#contact"
                className="block py-2 px-2 rounded hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Link
                to="/form"
                className="block bg-grass-green text-white text-center py-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enroll
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        className="hero-bg text-white py-20 md:py-32"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            GrowTechAfrica — Empowering Africa’s Future with Tech Skills
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We partner with Microsoft and KAMK University to deliver world-class
            Microdegree programs that prepare Africans for global tech careers.
            Self-paced learning, mentorship, and industry-recognised
            certificates.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#programs"
              className="bg-grass-green text-white font-bold py-3 px-6 rounded-full hover:bg-grass-green-dark transition"
            >
              Explore Programs
            </a>
            <Link
              to="/form"
              className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-gray-900 transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            About GrowTechAfrica
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            GrowTechAfrica is dedicated to bridging the technology skills gap
            across the continent. We deliver practical, employer-aligned
            learning in partnership with global institutions. Our Microdegree
            programs—designed with Microsoft and KAMK University—offer a pathway
            to international recognition, employment, and further studies in
            Europe and beyond.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-4">
                As the founder and head of GrowTechAfrica, I believe in creating
                accessible, world-class learning opportunities that transform
                careers and communities. We equip learners with real skills
                employers need.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-4">
                To cultivate a generation of African tech professionals who lead
                innovation, entrepreneurship and economic growth across the
                continent.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Core Values
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Inclusivity — equal access to education for all</li>
                <li>Excellence — high standards in education & mentorship</li>
                <li>Innovation — adopting modern tools and AI responsibly</li>
                <li>Community — supportive learning and mentorship</li>
                <li>Impact — measurable outcomes for students and employers</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1400&auto=format&fit=crop"
                alt="GrowTechAfrica students"
                className="rounded-lg shadow-xl max-w-full"
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
      <section id="why" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Why Study with GrowTechAfrica
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Practical microdegrees built with industry partners — flexible,
            career-focused, and globally recognised.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Self-Paced</h4>
              <p className="text-sm text-gray-600">
                Learn on your schedule with up to 12 months access to materials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Mentorship</h4>
              <p className="text-sm text-gray-600">
                Region-specific in-class mentorship to guide projects and
                assessments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Verified Credentials</h4>
              <p className="text-sm text-gray-600">
                Course certificates, professional certificate & LinkedIn badges
                with QR verification.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Industry Outcomes</h4>
              <p className="text-sm text-gray-600">
                Designed for employability: roles in AI, data, cloud, and
                DevOps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Microsoft Skills for Jobs — Microdegree Programs
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Each Microdegree combines course certificates issued by Microsoft
            and KAMK University with practical assignments, mentorship and a
            pathway to higher studies.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((p) => (
              <div key={p.slug} className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://placehold.co/600x300/cccccc/000000?text=Program";
                  }}
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 mb-3">{p.summary}</p>

                <ul className="text-gray-600 space-y-1 mb-4">
                  <li>
                    <span className="font-semibold grass-green">
                      {p.ects} ECTS
                    </span>{" "}
                    Credits
                  </li>
                  <li>
                    <span className="font-semibold grass-green">
                      {p.hours} Hours
                    </span>{" "}
                    of Learning
                  </li>
                  <li>
                    <span className="font-semibold grass-green">
                      {p.coursesCount} Course{p.coursesCount > 1 ? "s" : ""}
                    </span>
                  </li>
                </ul>

                {p.bullets && (
                  <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex gap-3">
                  <Link
                    to="/form"
                    className="ml-auto bg-grass-green text-white px-4 py-2 rounded font-semibold hover:bg-grass-green-dark"
                  >
                    Enroll
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Complete 7 courses to earn the AI Developer Professional
              Certificate.
            </p>
            <Link
              to="/form"
              className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </section>

      {/* Who it's for / Eligibility */}
      <section id="who" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Who Should Enroll
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Our Microdegree programs are designed for learners from all
            backgrounds who want practical, career-focused tech skills.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-sm">
              <h4 className="font-semibold mb-2">Ideal for</h4>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>University students seeking career-relevant credentials</li>
                <li>Job seekers and career changers</li>
                <li>Freelancers & working professionals upskilling</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded shadow-sm">
              <h4 className="font-semibold mb-2">Eligibility</h4>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>
                  No prior experience required — basic IT awareness helpful
                </li>
                <li>
                  Good command of English (course material & assessments in
                  English)
                </li>
                <li>
                  Device with internet access (laptop, tablet or smartphone)
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded shadow-sm">
              <h4 className="font-semibold mb-2">Study Format</h4>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Online self-paced learning with scheduled mentorship</li>
                <li>Assignments, project work and pass/fail assessments</li>
                <li>
                  Average completion: 3–5 months; materials available for 12
                  months
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section id="outcomes" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Career Outcomes
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Graduates will be prepared for a range of industry roles. We
            emphasise applied skills recruiters value.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-sm text-center">
              <h4 className="font-semibold text-lg mb-2">
                AI / Cloud Developer
              </h4>
              <p className="text-gray-600">
                Build and deploy intelligent applications using Azure AI
                services.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm text-center">
              <h4 className="font-semibold text-lg mb-2">
                Data Engineer / Analytics Developer
              </h4>
              <p className="text-gray-600">
                Design and manage data pipelines and analytics solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm text-center">
              <h4 className="font-semibold text-lg mb-2">
                ML Practitioner / AI Solutions Architect
              </h4>
              <p className="text-gray-600">
                Develop scalable AI solutions integrated into business
                workflows.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded shadow-sm text-center">
              <h4 className="font-semibold text-lg mb-2">
                DevOps / Automation Engineer
              </h4>
              <p className="text-gray-600">
                Boost CI/CD and automation with GitHub Copilot and cloud tools.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm text-center">
              <h4 className="font-semibold text-lg mb-2">Junior AI Engineer</h4>
              <p className="text-gray-600">
                Hands-on roles in computer vision, NLP or generative AI
                implementations.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm text-center">
              <h4 className="font-semibold text-lg mb-2">
                Pathway to Further Study
              </h4>
              <p className="text-gray-600">
                ECTS credits and joint certificates support applications for
                higher studies in EU institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification / Recognition */}
      <section id="certification" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Certification & Recognition
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Earn course certificates from Microsoft & KAMK University, a
            professional certificate on completion of all courses, and shareable
            LinkedIn badges. All certificates are QR-verifiable for employer
            verification.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8">
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
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600 mb-6">
            We collaborate with institutions and companies to ensure content
            quality and industry relevance.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <img
              src="/kamklogo.png"
              alt="KAMK"
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
            {/* additional logos can be added here */}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Meet Our Team{" "}
        </h2>{" "}
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Our leadership team brings together deep expertise in technology,
          education, and innovation to empower Africa's next generation of tech
          leaders.{" "}
        </p>{" "}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Dr. George Babafemi */}{" "}
          <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-full max-w-xs flex flex-col items-center">
            {" "}
            <img
              src="/georgebabafemi.jpg"
              alt="Dr. George Babafemi"
              className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-grass-green"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Dr. George Babafemi
            </h3>
            <p className="text-gray-600 text-center">
              Visionary educator and tech advocate with decades of experience in
              driving digital transformation across Africa's academic and
              business sectors.
            </p>
          </div>
          {/* Dr. Richard Omoniyi */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-full max-w-xs flex flex-col items-center">
            <img
              src="/richard_profile.png"
              alt="Dr. Richard Omoniyi"
              className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-grass-green"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Dr. Richard Omoniyi
            </h3>
            <p className="text-gray-600 text-center">
              Renowned technologist and mentor, passionate about bridging the
              skills gap and fostering innovation through accessible tech
              education.
            </p>
          </div>
          {/* Kehinde Segun */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-full max-w-xs flex flex-col items-center">
            <img
              src="/kehindesegun.jpeg"
              alt="Kehinde Segun"
              className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-grass-green"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Kehinde Segun
            </h3>
            <p className="text-gray-600 text-center">
              Experienced program manager and community builder, dedicated to
              empowering learners and supporting their journey into tech
              careers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            Interested in partnering, mentoring, or joining a Microdegree? Reach
            out — we’ll respond promptly.
          </p>

          <div className="max-w-2xl mx-auto text-left grid md:grid-cols-2 gap-6">
            <div>
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
                <strong>Address:</strong> 75 CMD Rd, Magodo GRA, Lagos, Nigeria
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Office Hours: Mon–Fri, 9:00am – 5:00pm WAT
              </p>
            </div>

            <div>
              <p className="mb-2 text-gray-300">Quick Apply:</p>
              <Link
                to="/form"
                className="inline-block bg-grass-green text-white px-5 py-3 rounded-full font-semibold hover:bg-grass-green-dark"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} GrowTechAfrica. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            GrowTechAfrica Limited — Empowering Africa with world-class tech
            education.
          </p>
        </div>
      </footer>

      {/* Tailwind custom styles */}
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
