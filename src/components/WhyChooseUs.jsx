import { DollarSign, Palette, Heart, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: DollarSign,
      title: 'Affordable',
      description: 'Professional websites without breaking the bank. We believe quality web design should be accessible to every Nigerian business.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Clean, responsive, and mobile-friendly websites that look stunning on every device and keep your visitors engaged.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description: 'We listen to your story and build around your needs. Your success is our success, and we treat every project with care.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Headphones,
      title: 'Reliable Support',
      description: 'We don\'t just deliver and disappear. We stick around to ensure your website continues to work perfectly for your business.',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why FavaraTech?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're more than just web developers — we're your partners in growth
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {reason.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Built by Nigerians, for Nigerians
          </h3>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
            We understand the unique challenges and opportunities of doing business in Nigeria. That's why our solutions are tailored specifically for the Nigerian market.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">Fast Delivery</p>
              <p className="opacity-90">Your site in less than 1-2 weeks</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">Local Payment</p>
              <p className="opacity-90">Pay in Naira, no conversion</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">24/7 Support</p>
              <p className="opacity-90">We're always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
