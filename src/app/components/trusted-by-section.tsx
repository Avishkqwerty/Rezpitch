export function TrustedBySection() {
  const brands = [
    'Marriott',
    'Hilton',
    'Hyatt',
    'Four Seasons',
    'Ritz-Carlton',
    'Shangri-La',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 800 }}>
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            Premium partnerships that transform businesses
          </p>
        </div>

        {/* Infinite Scroll Animation */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <span className="text-3xl text-gray-400 hover:text-teal-600 transition-colors" style={{ fontWeight: 700 }}>
                  {brand}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <span className="text-3xl text-gray-400 hover:text-teal-600 transition-colors" style={{ fontWeight: 700 }}>
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
