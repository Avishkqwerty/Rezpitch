import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-teal-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm tracking-wide">
                The Marketplace
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight" style={{ fontWeight: 800, lineHeight: 1.1 }}>
              Where Luxury{' '}
              <span className="text-teal-600">Meets Logic</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Rezpitch is a premium B2B bidding platform that enables hotels and destination management companies (DMCs) to discover, compare, and finalize partnerships effortlessly.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-teal-600 text-teal-600 hover:bg-teal-50">
                <Play className="mr-2 h-5 w-5" />
                Explore Features
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl text-teal-600" style={{ fontWeight: 700 }}>150+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-3xl text-teal-600" style={{ fontWeight: 700 }}>5,000+</div>
                <div className="text-sm text-gray-600">Partners</div>
              </div>
              <div>
                <div className="text-3xl text-teal-600" style={{ fontWeight: 700 }}>99%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Live Bid Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm animate-pulse" style={{ fontWeight: 600 }}>
                  LIVE BID
                </span>
                <span className="text-sm text-gray-500">↑ 3 new offers</span>
              </div>

              <div className="mb-6">
                <div className="text-4xl text-gray-900 mb-2" style={{ fontWeight: 700 }}>$12,450</div>
                <h3 className="text-xl text-gray-700" style={{ fontWeight: 600 }}>Maldives Resort Package</h3>
              </div>

              <div className="aspect-video bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1729717949948-56b52db111dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydHxlbnwxfHx8fDE3NjgxNzIyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury Resort"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl" style={{ fontWeight: 600 }}>
                    O
                  </div>
                  <div>
                    <div className="text-sm text-gray-900" style={{ fontWeight: 600 }}>Ocean Paradise Resort</div>
                    <div className="text-xs text-gray-500">Verified Premium Partner</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl shadow-lg">
              <div className="text-xs opacity-90">Premium Hotel Partnership</div>
              <div className="text-2xl" style={{ fontWeight: 700 }}>85%</div>
              <div className="text-xs opacity-90">Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
