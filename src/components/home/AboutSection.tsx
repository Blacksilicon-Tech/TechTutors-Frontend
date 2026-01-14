const AboutSection = () => {
  return (
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
          —offer a pathway to international recognition, employment, and further
          studies in Europe and beyond.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Text Content */}
          <div className="space-y-8 h-full">
            {/* Mission */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-3">
                🚀 Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                As the founder and head of GrowTechAfrica, I believe in creating
                accessible, world-class learning opportunities that transform
                careers and communities. We equip learners with real skills
                employers need.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-3">
                🌍 Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To cultivate a generation of African tech professionals who lead
                innovation, entrepreneurship, and economic growth across the
                continent.
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
          <div className="relative h-full md:h-auto">
            <img
              src="/growtechafricaaboutimage.png"
              alt="GrowTechAfrica students"
              className="hidden md:block absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/600x400/111827/FFFFFF?text=GrowTechAfrica";
              }}
            />
            {/* Fallback image for mobile */}
            <img
              src="/growtechafricaaboutimage.png"
              alt="GrowTechAfrica students"
              className="md:hidden w-full h-auto object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/600x400/111827/FFFFFF?text=GrowTechAfrica";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
