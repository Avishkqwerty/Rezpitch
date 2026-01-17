import { Mail, Phone, Rocket } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 800 }}>
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Let's discuss how Rezpitch can transform your business
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg mb-2" style={{ fontWeight: 700 }}>Email</h3>
                <a href="mailto:support@rezpitch.com" className="text-teal-600 hover:underline">
                  support@rezpitch.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg mb-2" style={{ fontWeight: 700 }}>Phone</h3>
                <p className="text-gray-600">+1 (234) 567-890</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM EST</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border border-teal-200">
              <div className="flex items-center mb-3">
                <Rocket className="h-6 w-6 text-teal-600 mr-2" />
                <h3 className="text-lg" style={{ fontWeight: 700 }}>Partnerships?</h3>
              </div>
              <p className="text-gray-700">
                Email <a href="mailto:partnerships@rezpitch.com" className="text-teal-600 hover:underline">partnerships@rezpitch.com</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-gray-50 to-teal-50/30 rounded-2xl border border-gray-200">
                <h3 className="text-2xl mb-6" style={{ fontWeight: 700 }}>Send us a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-gray-700">Your Name</label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-700">Your Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-700">Subject</label>
                    <Input
                      type="text"
                      placeholder="Partnership Inquiry"
                      required
                      className="w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-700">Your Message</label>
                    <Textarea
                      placeholder="Tell us about your needs..."
                      rows={6}
                      required
                      className="w-full bg-white border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
