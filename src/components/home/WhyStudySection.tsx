const WhyStudySection = () => {
  return (
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
              Designed for employability: roles in AI, data, cloud, and DevOps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyStudySection;
