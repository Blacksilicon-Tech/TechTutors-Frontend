import { Link } from "react-router-dom";
import { trackMetaEvent } from "../../analytics/metaPixel";
import { trackGAEvent } from "../../analytics/googleAnalytics";


const ContactSection = () => {
  return (
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
                  href="tel:+2348087504707"
                  className="text-grass-green hover:underline"
                >
                  +2348087504707
                </a>
              </p>
              <p className="mb-2">
                <strong>Address:</strong> 75 CMD Rd, Magodo GRA, Lagos, Nigeria
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
            // ref={contactEnrollRef}
            // onMouseEnter={() => setHoveredButton("contactEnroll")}
            // onMouseLeave={() => setHoveredButton(null)}
            >
              <Link
                to="/form"
                onClick={() => {
                  trackMetaEvent("Lead");
                  trackGAEvent("generate_lead");
                }}
                className="inline-block bg-grass-green text-white px-6 py-3 rounded-full font-semibold hover:bg-grass-green-dark transition relative z-10"
              // onClick={handleContactClick}
              >
                Enroll Now
              </Link>

              {/* Desktop tooltip */}
              {/* {hoveredButton === "contactEnroll" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 md:w-80 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 hidden md:block">
                     <h3 className="font-bold text-lg mb-1 text-red-600">
                      Enrollment not started yet!
                    </h3>
                    <p className="text-sm text-gray-700">
                      Enrollment for the programs has not started yet. However,
                      there is an upcoming
                      <strong className="text-blue-600"> webinar </strong> on
                      <strong className="text-green-600">
                        {" "}
                        6th September 2025
                      </strong>
                      . Click <strong className="text-amber-600">
                        Enroll
                      </strong>{" "}
                      to register for the webinar.
                    </p> 
                  </div>
                )}*/}

              {/* Mobile tooltip */}
              {/* {mobileContactTooltipVisible && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 md:w-80 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 md:hidden">
                     <h3 className="font-bold text-lg mb-1 text-red-600">
                      Enrollment not started yet!
                    </h3>
                    <p className="text-sm text-gray-700">
                      Enrollment for the programs has not started yet. However,
                      there is an upcoming
                      <strong className="text-blue-600"> webinar </strong> on
                      <strong className="text-green-600">
                        {" "}
                        6th September 2025
                      </strong>
                      . Tap <strong className="text-amber-600">
                        Enroll
                      </strong>{" "}
                      to register for the webinar.
                    </p> 
                  </div>
                )}*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
