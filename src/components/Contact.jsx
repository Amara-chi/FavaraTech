import { useState } from 'react';
import { Send, MapPin, Mail, MessageCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitType, setSubmitType] = useState(''); // 'success' or 'error'

  const openWhatsApp = (prefilledMessage = '') => {
    const phoneNumber = '2349064150364';
    const defaultMessage = 'Hello FavaraTech! I would like to learn more about your website development services.';
    const message = prefilledMessage || defaultMessage;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppSubmit = () => {
    const { name, email, message } = formData;
    
    // Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitMessage('Please fill in all fields before sending.');
      setSubmitType('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitType('');

    // Format the message for WhatsApp
    const whatsappMessage = `Hello FavaraTech! 🌟

*NEW WEBSITE INQUIRY*

*Name:* ${name.trim()}
*Email:* ${email.trim()}

*Project Details:*
${message.trim()}

I'm interested in discussing my project with you. Please let me know the next steps and available time for a consultation.

Looking forward to your response!`;

    // Small delay to show loading state
    setTimeout(() => {
      openWhatsApp(whatsappMessage);
      setIsSubmitting(false);
      setSubmitMessage('✅ Message prepared! Opening WhatsApp... You can review and send your message.');
      setSubmitType('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitType('');
      }, 5000);
    }, 1000);
  };

  const handleQuickWhatsApp = () => {
    openWhatsApp();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappNumber = '2349064150364';

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to grow your business online?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Let's start building today. Your dream website is just a message away.
          </p>
          <button
            onClick={handleQuickWhatsApp}
            className="px-8 py-4 bg-white text-green-600 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl hover:shadow-3xl"
          >
            Work With Us
          </button>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help your business shine online.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Build Something Amazing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Fill out the form and we'll open WhatsApp with your pre-filled message. Just hit send and we'll get back to you within 2-4 hours!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Email</p>
                    <a
                      href="mailto:favaratech@gmail.com"
                      className="text-green-600 dark:text-green-400 hover:underline"
                    >
                      favaratech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">WhatsApp</p>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:underline"
                    >
                      +234 906 415 0364
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-green-200 dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <span className="font-bold">⚡ Instant Response:</span> We typically respond within 2-4 hours during business hours.
                </p>
                <button
                  onClick={handleQuickWhatsApp}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quick Message on WhatsApp
                </button>
              </div>

              {/* Benefits Section */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                  </div>
                  <span>No spam - Direct communication</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                  </div>
                  <span>Instant response on WhatsApp</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                  </div>
                  <span>Free consultation included</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Send us a Message
              </h3>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                    placeholder="Tell us about your project, your business goals, and any specific requirements you have..."
                  />
                </div>

                <button
                  onClick={handleWhatsAppSubmit}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Preparing your message...
                    </>
                  ) : (
                    <>
                      Send
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className={`p-4 rounded-xl text-center font-medium ${
                    submitType === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We'll open WhatsApp with your pre-filled message. Just review and hit send! 📱
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}