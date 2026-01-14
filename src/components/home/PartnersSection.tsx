const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          At{" "}
          <span className="font-semibold text-grass-green">GrowTechAfrica</span>
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
          <p className="text-gray-600 mb-6">Upon completion, learners earn:</p>
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

      <style>{`
  .grass-green { color: #4ade80; }
  .bg-grass-green { background-color: #4ade80; }
  .hover\\:bg-grass-green-dark:hover { background-color: #36b37e; }
`}</style>
    </section>
  );
};

export default PartnersSection;
