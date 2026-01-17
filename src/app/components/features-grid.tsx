import { TrendingDown, ShieldCheck, Zap, Globe } from 'lucide-react';

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 800 }}>
            The Grid of Power
          </h2>
          <p className="text-xl text-gray-600">
            Industry-leading features engineered for premium partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Smart Bidding */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl mb-3" style={{ fontWeight: 700 }}>Smart Bidding</h3>
                <p className="text-gray-600">
                  AI-powered competitive pricing delivers optimal rates through transparent market dynamics.
                </p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center">
                <TrendingDown className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <div className="text-3xl text-green-600" style={{ fontWeight: 700 }}>↓ 25%</div>
                  <div className="text-sm text-gray-700">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vetted Partners */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl mb-3" style={{ fontWeight: 700 }}>Vetted Partners</h3>
                <p className="text-gray-600">
                  Every DMC verified through rigorous screening for complete peace of mind and trust.
                </p>
              </div>
              <div className="text-4xl">🔒</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200 flex items-center justify-center">
              <ShieldCheck className="h-12 w-12 text-teal-600 mr-4" />
              <div className="text-4xl text-teal-600" style={{ fontWeight: 700 }}>✓ VERIFIED</div>
            </div>
          </div>

          {/* Instant Matching */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl mb-3" style={{ fontWeight: 700 }}>Instant Matching</h3>
                <p className="text-gray-600">
                  Advanced AI algorithms connect ideal partners in milliseconds for seamless collaboration.
                </p>
              </div>
              <div className="text-4xl">⚡</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏨</div>
                  <div className="text-xs text-gray-600">Hotel</div>
                </div>
                <Zap className="h-10 w-10 text-amber-500 animate-pulse" />
                <div className="text-center">
                  <div className="text-3xl mb-2">✈️</div>
                  <div className="text-xs text-gray-600">DMC</div>
                </div>
              </div>
              <div className="text-center mt-4 text-sm text-gray-700">
                &lt; <span className="text-2xl" style={{ fontWeight: 700 }}>200ms</span> Response Time
              </div>
            </div>
          </div>

          {/* Global Reach */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl mb-3" style={{ fontWeight: 700 }}>Global Reach</h3>
                <p className="text-gray-600">
                  Connect with premium partners across 150+ countries with 24/7 multilingual support.
                </p>
              </div>
              <div className="text-4xl">🌍</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl text-blue-600 mb-1" style={{ fontWeight: 700 }}>150+</div>
                  <div className="text-xs text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl text-blue-600 mb-1" style={{ fontWeight: 700 }}>5K+</div>
                  <div className="text-xs text-gray-600">Partners</div>
                </div>
                <div>
                  <div className="text-3xl text-blue-600 mb-1" style={{ fontWeight: 700 }}>24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
