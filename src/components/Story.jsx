import { Heart, Target, Users, Calendar, Rocket, Star } from 'lucide-react';

export default function Story() {
  const milestones = [
    { year: '2021', event: 'Met at a tech meetup', icon: Users },
    { year: '2022', event: 'Founded FavaraTech', icon: Rocket },
    { year: 'Today', event: '50+ Projects Delivered', icon: Star },
  ];

  return (
    <section id="story" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Story
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We're <span className="font-semibold text-green-600 dark:text-green-400">Amara and Favour</span>, two young Nigerian women who believe that every business deserves to shine online. FavaraTech was born out of a simple idea: to give Nigerian businesses affordable, beautiful, and functional websites that don't just look good but actually help them grow.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We started as friends with a shared passion for technology and a drive to make an impact in our community. Like many Nigerians, we've seen businesses with great potential struggle because they weren't visible online. We wanted to change that — one website at a time.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              By choosing us, you're not just getting a website. You're becoming part of a journey: the journey of two young women determined to build, grow, and empower businesses across Nigeria.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Journey</h3>
              
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-green-600" />
                        <span className="font-bold text-green-600 dark:text-green-400">{milestone.year}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-600 rounded-lg text-white text-center">
                <p className="font-semibold">Next Milestone: 100 Happy Clients! 🎯</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: 'Our Mission',
              description: 'To make professional web presence accessible and affordable for every business, regardless of size.',
            },
            {
              icon: Target,
              title: 'Our Vision',
              description: 'A Nigeria where every business has the digital tools to compete globally and grow sustainably.',
            },
            {
              icon: Users,
              title: 'Our Values',
              description: 'Quality, affordability, integrity, and a genuine commitment to seeing our clients succeed.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform group"
            >
              <div className="w-14 h-14 bg-green-600 dark:bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}