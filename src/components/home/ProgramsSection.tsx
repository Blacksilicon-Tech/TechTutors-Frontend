import { Link } from "react-router-dom";
import { programs } from "./programsData";
import { trackMetaEvent } from "../../analytics/metaPixel";
import { trackGAEvent } from "../../analytics/googleAnalytics";

type Props = {
  expandedSlug: string | null;
  toggleExpand: (slug: string) => void;
};

const ProgramsSection: React.FC<Props> = ({ expandedSlug, toggleExpand }) => {
  return (
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

              {/*     
                    <div className="mt-4 flex justify-between items-center gap-2 relative">
                     <button
                       onClick={() => toggleExpand(program.slug)}
                       className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-md border border-gray-300 transition"
                     >
                       {expandedSlug === program.slug ? "Show less" : "Learn more"}
                     </button>
   
                     {/* Download Brochure Button */}
              {/*
                     <a
                       href={program.brochure} // 🔹 dynamic per program
                       download
                       className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-sm font-medium"
                     >
                       Download Brochure
                     </a>
                     */}

              {/* Enroll Button */}
              {/*
                     <div
                       className="relative"
                       // ref={(el) => (programsEnrollRef.current[program.slug] = el)}
                       // onMouseEnter={() => setHoveredButton(program.slug)}
                       // onMouseLeave={() => setHoveredButton(null)}
                     >
   
                       {/*
                       <Link
                         to="/form"
                         className="bg-grass-green text-white px-4 py-2 rounded font-semibold hover:bg-grass-green-dark text-sm transition relative z-10"
                         // onClick={(e) => handleProgramClick(program.slug, e)}
                       >
                         Enroll
                       </Link>
                       */}

              {/* Desktop tooltip */}
              {/*{hoveredButton === program.slug && (
                         <div className="absolute bottom-full right-0 mr-4 mb-2 w-72 md:w-96 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 hidden md:block">
                          <h3 className="font-bold text-lg mb-1 text-red-600">
                             Enrollment not started yet!
                           </h3>
                           <p className="text-sm text-gray-700">
                             Enrollment for the programs has not started yet.
                             However, there is an upcoming
                             <strong className="text-blue-600">
                               {" "}
                               webinar{" "}
                             </strong>{" "}
                             on
                             <strong className="text-green-600">
                               {" "}
                               6th September 2025
                             </strong>
                             . Click{" "}
                             <strong className="text-amber-600">Enroll</strong> to
                             register for the webinar.
                           </p> 
                         </div>
                       )}*/}

              {/* Mobile tooltip */}
              {/* {mobileProgramsTooltipVisible[program.slug] && (
                         <div className="absolute bottom-full right-0 mr-4 mb-2 w-72 md:w-96 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 md:hidden">
                            <h3 className="font-bold text-lg mb-1 text-red-600">
                             Enrollment not started yet!
                           </h3>
                           <p className="text-sm text-gray-700">
                             Enrollment for the programs has not started yet.
                             However, there is an upcoming
                             <strong className="text-blue-600">
                               {" "}
                               webinar{" "}
                             </strong>{" "}
                             on
                             <strong className="text-green-600">
                               {" "}
                               6th September 2025
                             </strong>
                             . Tap{" "}
                             <strong className="text-amber-600">Enroll</strong> to
                             register for the webinar.
                           </p> 
                         </div>
                       )}
                     </div>
                   </div> 
                   */}

              <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                {/* Learn More Button */}
                <button
                  onClick={() => toggleExpand(program.slug)}
                  className="px-5 py-2 min-h-[44px] rounded-lg bg-purple-600 text-white text-sm font-medium 
                  flex items-center justify-center
                  hover:bg-purple-700 hover:scale-105 transition duration-200 shadow"
                >
                  {expandedSlug === program.slug ? "Show less" : "Learn more"}
                </button>

                {/* Download Brochure Button */}
                <a
                  href={program.brochure}
                  download
                  className="px-5 py-2 min-h-[44px] rounded-lg bg-blue-600 text-white text-sm font-medium 
                  flex items-center justify-center
                  hover:bg-blue-700 hover:scale-105 transition duration-200 shadow"
                >
                  Download Brochure
                </a>

                {/* Enroll Button */}
                <Link
                  to="/form"
                  onClick={() => {
                    trackMetaEvent("Lead");
                    trackGAEvent("generate_lead");
                  }}
                  className="px-5 py-2 min-h-[44px] rounded-lg bg-green-600 text-white text-sm font-semibold 
                  flex items-center justify-center
                  hover:bg-green-700 hover:scale-105 transition duration-200 shadow"
                >
                  Enroll
                </Link>
              </div>

              {/* Only show expandable bullets if this program is expanded and bullets exist */}
              {expandedSlug === program.slug &&
                (() => {
                  const bullets = program.expandable?.bullets;
                  if (!bullets || bullets.length === 0) return null;

                  return (
                    <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-700">
                      {bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  );
                })()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
