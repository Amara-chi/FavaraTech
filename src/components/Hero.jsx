import { ArrowRight, Sparkles, Clock, Zap } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate days until January 1st
  const getDaysUntilJanuary = () => {
    const now = new Date();
    const nextJanuary = new Date(now.getFullYear() + 1, 0, 1); // January 1st of next year
    const diffTime = nextJanuary - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysUntilJanuary = getDaysUntilJanuary();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Limited Time Offer Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full mb-4 animate-pulse">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-bold">Limited Time Offer! Ends Jan 1st</span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full mb-8 animate-fade-in-down">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Empowering Nigerian Businesses</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
          <span className="block">FavaraTech</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
            Modern, Affordable, Impactful
          </span>
        </h1>

        {/* Price Slash Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-center">
              {/* <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl text-gray-500 dark:text-gray-400 line-through">₦120,000</span>
                <span className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400">₦70,000</span>
              </div> */}
              <div className="flex items-center justify-center gap-1 mt-2 text-sm text-orange-600 dark:text-orange-400 font-semibold">
                <Zap className="w-4 h-4 fill-current" />
                <span>42% OFF - Limited Time!</span>
              </div>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto border border-orange-200 dark:border-orange-800">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-700 dark:text-gray-300 mb-2">
              <Clock className="w-4 h-4" />
              <span>Offer ends in:</span>
            </div>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {daysUntilJanuary} days
            </div>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in">
          Professional websites at an unbeatable price. Launch your online presence for just{' '}
                          <span className="text-2xl text-gray-500 dark:text-gray-400 line-through">₦120,000</span>
          <span className="font-bold text-green-600 dark:text-green-400"> ₦70,000</span> - 
          <span className="text-orange-600 dark:text-orange-400 font-semibold"> 42% off </span>
          until January!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Get Discounted Price
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-green-600 dark:hover:border-green-400"
          >
            View Our Work
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '45+', label: 'Happy Clients' },
            { number: '₦70k*', label: 'Starting Price', highlight: true },
            { number: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-6 backdrop-blur-sm rounded-2xl border transition-transform hover:scale-105 ${
                stat.highlight 
                  ? 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 border-green-300 dark:border-green-600 shadow-lg' 
                  : 'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className={`text-3xl font-bold mb-2 ${
                stat.highlight ? 'text-green-600 dark:text-green-400' : 'text-green-600 dark:text-green-400'
              }`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-600 dark:border-green-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-green-600 dark:bg-green-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}