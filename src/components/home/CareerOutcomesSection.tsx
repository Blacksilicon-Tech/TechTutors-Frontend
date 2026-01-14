const CareerOutcomesSection = () => {
  return (
    <section id="outcomes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Career Outcomes
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Graduates will be prepared for a range of industry roles. We emphasise
          applied skills recruiters value.
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
              Build and deploy intelligent applications using Azure AI services.
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
              Develop scalable AI solutions integrated into business workflows.
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
  );
};

export default CareerOutcomesSection;
