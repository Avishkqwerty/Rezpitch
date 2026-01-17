import { Globe, Users, TrendingUp, Award } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Globe,
      value: '150+',
      label: 'Countries',
      description: 'Global Network',
    },
    {
      icon: Users,
      value: '5,000+',
      label: 'Partners',
      description: 'Trusted Network',
    },
    {
      icon: TrendingUp,
      value: '3x',
      label: 'More Deals',
      description: 'Growth Rate',
    },
    {
      icon: Award,
      value: '99%',
      label: 'Satisfaction',
      description: 'Client Rating',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center text-white p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <Icon className="h-10 w-10 mx-auto mb-4 opacity-90" />
                <div className="text-sm opacity-90 mb-2">{stat.description}</div>
                <div className="text-5xl mb-2" style={{ fontWeight: 800 }}>{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
