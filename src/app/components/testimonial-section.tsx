import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: 'Rezpitch transformed how we connect with DMC partners. The platform is intuitive and reliable.',
      author: 'Sarah Johnson',
      role: 'Hotel Manager',
      company: 'Luxury Hotels International',
    },
    {
      quote: 'The smart bidding feature saved us 25% on partnership costs while improving quality.',
      author: 'Michael Chen',
      role: 'Operations Director',
      company: 'Global Resort Group',
    },
    {
      quote: 'Instant matching and verified partners make our job so much easier. Highly recommended!',
      author: 'Emma Williams',
      role: 'Partnerships Lead',
      company: 'Premier Destinations',
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
          <Quote className="absolute top-8 left-8 h-16 w-16 text-teal-200" />
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <p className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
                "{current.quote}"
              </p>
              
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl" style={{ fontWeight: 700 }}>
                  {current.author.charAt(0)}
                </div>
              </div>
              
              <div>
                <div className="text-xl" style={{ fontWeight: 700 }}>{current.author}</div>
                <div className="text-gray-600">{current.role}</div>
                <div className="text-sm text-teal-600">{current.company}</div>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-teal-300 hover:bg-teal-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-teal-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-teal-300 hover:bg-teal-50"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
