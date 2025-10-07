import { FileText, Globe, Briefcase, ShoppingCart, ArrowRight, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Services() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '2349064150364'; // Replace with your actual WhatsApp number
    const message = 'Hello FavaraTech! I would like to learn more about your website development services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      icon: FileText,
      title: 'Landing Pages',
      description: 'Perfect for campaigns and small businesses. Fast and optimized single-page sites.',
      originalPrice: '₦120,000',
      currentPrice: 'From ₦70,000',
      discount: '42% OFF',
      features: ['Responsive Design', 'Fast Loading', 'Contact Forms', 'SEO Optimized'],
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'Business Websites',
      description: 'Multi-page sites to showcase your services, products, and brand story professionally.',
      originalPrice: '₦200,000',
      currentPrice: 'From ₦120,000',
      discount: '40% OFF',
      features: ['Multiple Pages', 'Service Showcase', 'WhatsApp Integration', 'Content Management'],
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      icon: Briefcase,
      title: 'Portfolio Websites',
      description: 'Personal or professional portfolios to display your work and attract clients.',
      originalPrice: '₦150,000',
      currentPrice: 'From ₦100,000',
      discount: '33% OFF',
      features: ['Project Gallery', 'About Section', 'Contact Forms', 'Mobile Friendly'],
      gradient: 'from-teal-400 to-cyan-500',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Sell online with a functional and easy-to-manage shop. Payment integration included.',
      currentPrice: 'Custom Pricing',
      discount: 'Special Offer',
      features: ['Product Catalog', 'Payment Gateway', 'Order Management', 'Customer Dashboard', 'Admin Dashboards'],
      gradient: 'from-cyan-400 to-blue-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional web solutions tailored to Nigerian businesses
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Limited Time Offer Banner */}
        <div className="mb-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white text-center shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-orange-500 text-sm font-bold">!</span>
            </div>
            <h3 className="text-xl font-bold">Limited Time Offer - Ends Jan 1st!</h3>
          </div>
          <p className="text-lg opacity-90">
            Get up to 42% off on all our website packages. Launch your online presence at unbeatable prices!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 relative"
            >
              {/* Discount Badge */}
              {service.discount && service.discount !== 'Special Offer' && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                  {service.discount}
                </div>
              )}
              {service.discount === 'Special Offer' && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                  {service.discount}
                </div>
              )}

              <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-4">
                {/* Original Price (Strikethrough) */}
                {service.originalPrice && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                      {service.originalPrice}
                    </span>
                    {service.discount && service.discount !== 'Special Offer' && (
                      <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full font-bold">
                        {service.discount}
                      </span>
                    )}
                  </div>
                )}
                
                {/* Current Price */}
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {service.currentPrice}
                </p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={openWhatsApp}
                className="w-full py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-green-600 hover:text-white dark:hover:bg-green-600 transition-colors flex items-center justify-center gap-2 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Need something custom? We've got you covered.
          </p>
          <button
            onClick={openWhatsApp}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Discuss Your Project on WhatsApp
          </button>
        </div>

        {/* Special Offer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ⚡ All prices include free domain & hosting for 1 year!* ⚡
          </p>
        </div>
      </div>
    </section>
  );
}