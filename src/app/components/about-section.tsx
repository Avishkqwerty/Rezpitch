import { Target, Eye, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 800 }}>
            About <span className="text-teal-600">Rezpitch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are the fintech-powered B2B marketplace where luxury hospitality meets data-driven logic. Our mission is to streamline partnerships between hotels and destination management companies through transparent bidding, instant matching, and secure payments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Empower hotels and DMCs to form lasting, profitable partnerships through a unified platform that delivers clarity, speed, and trust at every step.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A world where premium hospitality collaborations are effortless, data-informed, and globally accessible.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-12 text-white">
          <div className="flex items-center justify-center mb-8">
            <Users className="h-10 w-10 mr-3" />
            <h3 className="text-3xl" style={{ fontWeight: 800 }}>Leadership</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Elena Vargas */}
            <div className="text-center">
              <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl text-teal-600" style={{ fontWeight: 700 }}>E</span>
              </div>
              <h4 className="text-2xl mb-1" style={{ fontWeight: 700 }}>Elena Vargas</h4>
              <p className="text-teal-100">CEO & Co-Founder</p>
            </div>

            {/* Noah Bennett */}
            <div className="text-center">
              <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl text-teal-600" style={{ fontWeight: 700 }}>N</span>
              </div>
              <h4 className="text-2xl mb-1" style={{ fontWeight: 700 }}>Noah Bennett</h4>
              <p className="text-teal-100">CTO & Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
