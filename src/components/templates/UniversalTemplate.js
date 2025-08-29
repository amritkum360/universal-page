'use client';

import { useState, useEffect } from 'react';
import { User, Phone, MapPin, Instagram, Facebook, MessageCircle, Mail, Clock, Star } from 'lucide-react';
import Image from 'next/image';

// Import section-specific template components
import HeaderTemplate from './components/HeaderSection/HeaderTemplate';
import HeroTemplate from './components/HeroSection/HeroTemplate';
import AboutTemplate from './components/AboutSection/AboutTemplate';
import PortfolioTemplate from './components/PortfolioSection/PortfolioTemplate';
import ServicesTemplate from './components/ServicesSection/ServicesTemplate';
import TestimonialsTemplate from './components/TestimonialsSection/TestimonialsTemplate';
import SkillsTemplate from './components/SkillsSection/SkillsTemplate';
import AchievementsTemplate from './components/AchievementsSection/AchievementsTemplate';
import GalleryTemplate from './components/GallerySection/GalleryTemplate';
import StatsTemplate from './components/StatsSection/StatsTemplate';
import BlogTemplate from './components/BlogSection/BlogTemplate';
import DownloadablesTemplate from './components/DownloadablesSection/DownloadablesTemplate';
import FAQTemplate from './components/FAQSection/FAQTemplate';
import PricingTemplate from './components/PricingSection/PricingTemplate';
import CTATemplate from './components/CTASection/CTATemplate';
import ContactTemplate from './components/ContactSection/ContactTemplate';
import SocialTemplate from './components/SocialSection/SocialTemplate';
import FooterTemplate from './components/FooterSection/FooterTemplate';

export default function UniversalTemplate({ data }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsApp = () => {
    const phone = data.contact?.phone || data.contact?.phone;
    if (phone) {
      const message = encodeURIComponent(`Hello! I'm interested in your ${data.businessName} services.`);
      window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${message}`, '_blank');
    }
  };

  const handleCall = () => {
    const phone = data.contact?.phone || data.contact?.phone;
    if (phone) {
      window.open(`tel:${phone}`, '_self');
    }
  };

  const handleEmail = () => {
    const email = data.contact?.email;
    if (email) {
      window.open(`mailto:${email}`, '_self');
    }
  };

  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formDataObj = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
      source: `${data.businessName} Website`
    };

    try {
      // You can replace this with your actual webhook URL
      const response = await fetch('https://your-webhook-url.com/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj)
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully. We will contact you soon.');
        e.target.reset();
      } else {
        alert('Sorry, there was an error sending your message. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      alert('Sorry, there was an error sending your message. Please try again or call us directly.');
    }
  };

  const renderSection = (sectionKey) => {
    const section = data[sectionKey];
    if (!section || section.visible === false) return null;

    switch (sectionKey) {
      case 'header':
        return <HeaderTemplate section={section} businessName={data.businessName} tagline={data.tagline} />;

      case 'hero':
        return <HeroTemplate section={section} />;

      case 'about':
        return <AboutTemplate section={section} />;

      case 'services':
        return <ServicesTemplate section={section} />;

      case 'contact':
        return <ContactTemplate section={section} businessName={data.businessName} />;

      case 'portfolio':
        return <PortfolioTemplate section={section} />;

      case 'testimonials':
        return <TestimonialsTemplate section={section} />;

      case 'skills':
        return <SkillsTemplate section={section} />;

      case 'achievements':
        return <AchievementsTemplate section={section} />;

      case 'gallery':
        return <GalleryTemplate section={section} />;

      case 'stats':
        return <StatsTemplate section={section} />;

      case 'blog':
        return <BlogTemplate section={section} />;

      case 'downloadables':
        return <DownloadablesTemplate section={section} />;

      case 'faq':
        return <FAQTemplate section={section} />;

      case 'pricing':
        return <PricingTemplate section={section} />;

      case 'cta':
        return <CTATemplate section={section} />;

      case 'social':
        return <SocialTemplate section={section} />;

      case 'footer':
        return <FooterTemplate section={section} />;

      default:
        return (
          <section className="py-16 px-4 bg-white" role="region" aria-label={section.title}>
            <div className="container mx-auto">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{section.title}</h2>
                {section.subtitle && (
                  <p className="text-xl text-gray-600 mb-8">{section.subtitle}</p>
                )}
                {section.description && (
                  <p className="text-lg text-gray-700 leading-relaxed">{section.description}</p>
                )}
              </div>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Social Media Bar */}
      {data.social?.visible !== false && data.social?.platforms && (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500">
          <div className="flex flex-col space-y-4">
            {data.social.platforms.map((platform, index) => (
              <button
                key={index}
                onClick={() => handleSocialClick(platform.url)}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
                aria-label={`Follow us on ${platform.name}`}
              >
                {platform.icon === 'facebook' && <Facebook className="w-6 h-6 text-white" />}
                {platform.icon === 'instagram' && <Instagram className="w-6 h-6 text-white" />}
                {platform.icon === 'whatsapp' && <MessageCircle className="w-6 h-6 text-white" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sticky Contact Buttons */}
      {data.contact?.visible !== false && (
        <div className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0'}`}>
          <div className="flex flex-col space-y-2">
            {data.contact?.phone && (
              <button
                onClick={handleCall}
                className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-2xl flex items-center space-x-2 animate-pulse"
              >
                <Phone className="w-5 h-5" />
                <span className="font-bold">Call</span>
              </button>
            )}
            {data.contact?.email && (
              <button
                onClick={handleEmail}
                className="bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl flex items-center space-x-2 animate-pulse"
              >
                <Mail className="w-5 h-5" />
                <span className="font-bold">Email</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Render all visible sections */}
      {renderSection('header')}
      {renderSection('hero')}
      {renderSection('about')}
      {renderSection('portfolio')}
      {renderSection('services')}
      {renderSection('testimonials')}
      {renderSection('skills')}
      {renderSection('achievements')}
      {renderSection('gallery')}
      {renderSection('stats')}
      {renderSection('blog')}
      {renderSection('downloadables')}
      {renderSection('faq')}
      {renderSection('pricing')}
      {renderSection('cta')}
      {renderSection('social')}
      {renderSection('contact')}
      {renderSection('footer')}
    </div>
  );
}
