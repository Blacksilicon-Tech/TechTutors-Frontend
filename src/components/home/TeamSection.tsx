const TeamSection = () => {
  return (
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
  );
};

export default TeamSection;
