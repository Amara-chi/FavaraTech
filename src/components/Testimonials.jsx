import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const openWhatsApp = () => {
    const phoneNumber = '2349064150364'; // Replace with your actual WhatsApp number
    const message = 'Hello FavaraTech! I would like to learn more about your website development services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const testimonials = [
    {
      name: 'Chinedu Okafor',
      business: 'CEO, Gluto International',
      testimonial: 'FavaraTech gave me a website that made my business feel world-class. The attention to detail and understanding of what Nigerian businesses need is exceptional.',
      rating: 5,
      location: 'Lagos',
    },
    {
      name: 'Blessing Adeyemi',
      business: 'Owner, Quick LaundroMart',
      testimonial: 'I was worried about the cost of getting online, but FavaraTech made it affordable and stress-free. My sales have doubled since launching!',
      rating: 5,
      location: 'Abuja',
    },
    {
      name: 'Ibrahim Mohammed',
      business: 'Founder, Green Gardens',
      testimonial: 'Working with Amara and Favour was a breath of fresh air. They truly listened to my vision and delivered beyond my expectations.',
      rating: 5,
      location: 'Port Harcourt',
    },
    {
      name: 'Anki Gilbert',
      business: 'Managing Director, EduSchola',
      testimonial: 'My business website is stunning and efficient! It perfectly showcases my work and has helped me attract high-paying clients. Thank you, FavaraTech!',
      rating: 5,
      location: 'Lagos',
    },
    {
      name: 'Tunde Bakare',
      business: 'Manager, FitLife Gym',
      testimonial: 'The booking system and mobile responsiveness are perfect for our gym members. Professional work at an unbeatable price.',
      rating: 5,
      location: 'Lagos',
    },
    {
      name: 'Amina Yusuf',
      business: 'Owner, Taste of Home Catering',
      testimonial: 'From the first call to the final launch, FavaraTech was supportive and professional. They made the whole process easy to understand.',
      rating: 5,
      location: 'Kano',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real stories from real businesses we've helped grow online
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-green-200 dark:text-green-900 opacity-50" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.business}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Join over 50+ satisfied clients across Nigeria
          </p>
          <button
            onClick={openWhatsApp}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Become Our Next Success Story
          </button>
        </div>
      </div>
    </section>
  );
}
