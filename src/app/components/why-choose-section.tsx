import { Check, Bell, Shield } from 'lucide-react';

export function WhyChooseSection() {
  const features = [
    {
      icon: Check,
      title: 'Smart Matching Algorithm',
      description: 'Intelligent pairing based on capacity, preferences, and historical performance metrics',
    },
    {
      icon: Bell,
      title: 'Real-time Notifications',
      description: 'Never miss critical opportunities with instant multi-channel alerts and updates',
    },
    {
      icon: Shield,
      title: 'Secure Payment Processing',
      description: 'Multi-currency support with escrow protection and instant settlement options',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 800 }}>
            Why Choose <span className="text-teal-600">Rezpitch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform manual chaos into automated excellence. From discovery to payment, every touchpoint is designed for premium hospitality partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-teal-600" />
                </div>
                <div className="flex items-start mb-4">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl" style={{ fontWeight: 700 }}>{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
