const WhoShouldEnrollSection = () => {
  return (
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
              <li>No prior experience required (basic IT awareness helpful)</li>
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
  );
};

export default WhoShouldEnrollSection;
