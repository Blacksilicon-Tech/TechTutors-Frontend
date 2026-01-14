import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-center md:items-start text-center md:text-left gap-12">
        {/* Brand */}
        <div className="flex-1 max-w-sm mx-auto md:mx-0 text-center md:text-left">
          <h4 className="text-2xl font-bold text-white mb-3">GrowTechAfrica</h4>
          <p className="text-sm text-gray-400">
            Empowering Africa with world-class tech education, skills, and
            opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 max-w-sm mx-auto md:mx-0 text-center">
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="flex flex-col md:flex-col gap-3">
            <li>
              <a href="#programs" className="hover:text-grass-green transition">
                Programs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-grass-green transition">
                Contact
              </a>
            </li>
            <li>
              <div
                className="relative"
                // ref={footerEnrollRef}
                // onMouseEnter={() => setHoveredButton("footerEnroll")}
                // onMouseLeave={() => setHoveredButton(null)}
              >
                <Link
                  to="/form"
                  className="hover:text-grass-green transition"
                  // onClick={handleFooterClick}
                >
                  Apply Now
                </Link>

                {/* Desktop tooltip */}
                {/*{hoveredButton === "footerEnroll" && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -mt-2 w-72 md:w-80 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 hidden md:block">
                       <h3 className="font-bold text-lg mb-1 text-red-600">
                        Enrollment not started yet!
                      </h3>
                      <p className="text-sm text-gray-700">
                        Enrollment for the programs has not started yet.
                        However, there is an upcoming
                        <strong className="text-blue-600"> webinar </strong> on
                        <strong className="text-green-600">
                          {" "}
                          6th September 2025
                        </strong>
                        . Click{" "}
                        <strong className="text-amber-600">Apply Now</strong> to
                        register for the webinar.
                      </p> 
                    </div>
                  )}*/}

                {/* Mobile tooltip above the button */}
                {/* {mobileFooterTooltipVisible && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -mt-2 w-72 md:w-80 bg-white text-gray-800 p-4 rounded-2xl shadow-xl border-2 border-gray-200 z-20 md:hidden">
                       <h3 className="font-bold text-lg mb-1 text-red-600">
                        Enrollment not started yet!
                      </h3>
                      <p className="text-sm text-gray-700">
                        Enrollment for the programs has not started yet.
                        However, there is an upcoming
                        <strong className="text-blue-600"> webinar </strong> on
                        <strong className="text-green-600">
                          {" "}
                          6th September 2025
                        </strong>
                        . Tap{" "}
                        <strong className="text-amber-600">Apply Now</strong> to
                        register for the webinar.
                      </p>
                    </div>
                  )} */}
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

      <style>{`
  .grass-green { color: #4ade80; }
  .bg-grass-green { background-color: #4ade80; }
  .border-grass-green { border-color: #4ade80; }
  .hover\\:bg-grass-green-dark:hover { background-color: #36b37e; }
`}</style>
    </footer>
  );
};

export default FooterSection;
