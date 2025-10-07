import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Amara Nwachukwu',
      role: 'Co-founder & Web Developer',
      description: 'Passionate about design and functionality, I focus on making every website beautiful and user-friendly.',
      image: '/assets/amara.png', // Add your image path here
      skills: ['React', 'Business Strategy', 'Responsive Design', 'Performance Optimization'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Favour Momodu',
      role: 'Co-founder & Business Strategist',
      description: 'I\'m dedicated to helping Nigerian businesses grow, with websites that connect with their audience.',
      image: '/assets/favour.png', // Add your image path here
      skills: ['UI/UX Design', 'Client Relations', 'Digital Marketing', 'Project Management'],
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="team" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Two passionate Nigerian women on a mission to transform businesses online
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative mb-6">
                {/* Image Container */}
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group-hover:scale-110 transition-transform">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback gradient background if image is missing */}
                  <div 
                    className={`w-full h-full bg-gradient-to-br ${member.gradient} hidden items-center justify-center`}
                  >
                    <span className="text-white font-bold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-700 px-4 py-1 rounded-full shadow-lg">
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">
                    Co-founder
                  </span>
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                  "{member.description}"
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 text-center">
                  Expertise
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-400 text-sm rounded-full border border-green-200 dark:border-green-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-12 border border-gray-200 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Commitment to You
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            As young Nigerian women in tech, we understand the challenges of starting and growing a business. We're not just building websites — we're building relationships and empowering dreams. Your success is our success, and we're committed to being with you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Personal Service</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Direct communication with founders</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Quality Guarantee</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">We stand behind our work</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Long-term Support</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">We're here when you need us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}