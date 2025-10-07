import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen'; // new import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import MouseFollower from './components/MouseFollower';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Simulate loading time (2 seconds)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <LoadingScreen isVisible={loading} />
      {!loading && (
        <>
          <MouseFollower />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero />
          <Story />
          <Services />
          <Portfolio />
          <WhyChooseUs />
          <Testimonials />
          <Pricing />
          <Team />
          <Contact />
          <Footer />
          <BackToTop />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
}

export default App;
