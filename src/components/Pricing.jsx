import { Check, Zap, Rocket, Star } from 'lucide-react';

export default function Pricing() {
  const openWhatsApp = () => {
    const phoneNumber = '2349064150364';
    const message = 'Hello FavaraTech! I would like to learn more about your website development services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const plans = [
    {
      name: 'Starter',
      originalPrice: '₦120,000',
      currentPrice: '₦70,000',
      discount: '42% OFF',
      icon: Zap,
      description: 'Perfect for small businesses and campaigns',
      features: [
        'One-page landing site',
        'Mobile friendly design',
        'Contact form integration',
        'Fast delivery (3-5 days)',
        'Basic SEO optimization',
        'WhatsApp integration',
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Business',
      originalPrice: '₦200,000',
      currentPrice: '₦120,000',
      discount: '40% OFF',
      icon: Rocket,
      description: 'Ideal for growing businesses',
      features: [
        'Multi-page website (up to 5 pages)',
        'Service showcase section',
        'WhatsApp integration',
        'Contact forms & maps',
        'Advanced SEO optimization',
        'Blog/News section',
        'Social media integration',
        'Priority support',
      ],
      popular: true,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'Custom',
      originalPrice: '₦400,000+',
      currentPrice: 'Flexible',
      discount: 'Special Offer',
      icon: Star,
      description: 'Tailored solutions for unique needs',
      features: [
        'E-commerce functionality',
        'Custom integrations',
        'Member portals & dashboards',
        'Payment gateway setup',
        'Advanced features',
        'Database integration',
        'API development',
        'Dedicated support',
      ],
      popular: false,
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transparent pricing designed for Nigerian businesses. No hidden fees, no surprises.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Limited Time Offer Note */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold mb-4">
            🎯 Limited Time Offer - Ends Jan 1st!
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Get massive discounts on all our packages. Launch your online presence at unbeatable prices!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                plan.popular
                  ? 'border-green-500 scale-105 md:scale-110'
                  : 'border-gray-200 dark:border-gray-700 hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Discount Badge */}
              {plan.discount && plan.discount !== 'Special Offer' && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                  {plan.discount}
                </div>
              )}
              {plan.discount === 'Special Offer' && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                  {plan.discount}
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                {/* Original Price with Strikethrough */}
                {plan.originalPrice && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                      {plan.originalPrice}
                    </span>
                    {plan.discount && plan.discount !== 'Special Offer' && (
                      <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full font-bold">
                        {plan.discount}
                      </span>
                    )}
                  </div>
                )}
                
                {/* Current Price */}
                <span className="text-5xl font-bold text-green-600 dark:text-green-400">
                  {plan.currentPrice}
                </span>
                
                {/* Special Offer Note */}
                {plan.discount === 'Special Offer' && (
                  <div className="mt-2 text-sm text-purple-600 dark:text-purple-400 font-semibold">
                    Contact for custom pricing
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openWhatsApp}
                className={`w-full py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-green-600 hover:text-white dark:hover:bg-green-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Not sure which plan is right for you?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Contact us for a free consultation. We'll help you choose the perfect solution for your business needs and budget.
          </p>
          <button
            onClick={openWhatsApp}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Schedule a Free Consultation
          </button>
        </div>

        {/* Additional Offer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ⚡ All plans include free domain & hosting for 1 year!* ⚡
          </p>
        </div>
      </div>
    </section>
  );
}