import { ExternalLink, Code2 } from 'lucide-react';
import gluto from '/assets/gluto.png';
import eduschola from '/assets/eduschola.png';
import laundro from '/assets/laundro.png';
import makeup from '/assets/make-up.png';
import shortlet from '/assets/shortlet.png';
import transsib from '/assets/trans-sib.png'

export default function Portfolio() {
  const openWhatsApp = () => {
    const phoneNumber = '2349064150364'; // Replace with your actual WhatsApp number
    const message = 'Hello FavaraTech! I would like to learn more about your website development services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const projects = [
    {
      title: 'Gluto Mart',
      description: 'Modern e-commerce site for a Lagos-based agricultural product retailer',
      category: 'E-commerce',
      image: gluto,
      tags: ['React', 'E-commerce', 'Payment Integration'],
      liveUrl: 'https://www.catalog.glutointernational.com', // Add live site UR // Optional: GitHub link
    },
    {
      title: 'Quick Dry Cleaning',
      description: 'Beautiful website for a diligent laundry business',
      category: 'Laundro Mart',
      image: laundro,
      tags: ['Landing Page', 'Contact Forms', 'Gallery'],
      liveUrl: 'https://quickdrycleaning.com'    
    },
    {
      title: 'EduSchola',
      description: 'Professional business website for a school management system',
      category: 'Education',
      image: eduschola,
      tags: ['Multi-page', 'SEO', 'Education'],
      liveUrl: 'https://dev.eduschola.com.gh/'
    },
    {
      title: 'Make-Up Artist Portfolio',
      description: 'Stunning portfolio site for a passionate make-up artist',
      category: 'Portfolio',
      image: makeup,
      tags: ['Portfolio', 'Gallery', 'Animations'],
      liveUrl: 'https://suziegeemakeupartist.com/'
    },
    {
      title: 'Exquisite Shortlet Apartments',
      description: 'Dynamic website with booking system for shortlet apartments',
      category: 'Business',
      image: shortlet,
      tags: ['Booking System', 'Membership', 'Mobile WebApp'],
      liveUrl: 'https://lekkishortlets.com/'
    },
    {
      title: 'Shipping and Logistics Company',
      description: 'Multiple page landing-page website for a Shipping and Logistics Company',
      category: 'Landing Page',
      image: transsib,
      tags: ['Landing Page', 'Forms', 'WhatsApp'],
      liveUrl: 'https://www.transsiberanshipping.com/'    
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real websites that helped Nigerian businesses grow their online presence
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                  {project.category}
                </div>
                
                {/* Live Demo Button */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-600 hover:text-white"
                  title="View Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                
                {/* GitHub Button (Optional) */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-600 hover:text-white"
                    title="View Source Code"
                  >
                    <Code2 className="w-5 h-5" />
                  </a>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white text-center rounded-lg font-medium transition-colors text-sm"
                  >
                    Live Demo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-gray-600 hover:bg-gray-700 text-white text-center rounded-lg font-medium transition-colors text-sm"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <Code2 className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to See Your Business Online?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Every project starts with understanding your vision. Let's create something amazing together.
          </p>
          <button
            onClick={openWhatsApp}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}