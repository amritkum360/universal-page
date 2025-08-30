'use client';

import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, EyeIcon, EyeSlashIcon, ChevronUpIcon, ChevronDownIcon as ChevronDownIconSolid } from '@heroicons/react/24/outline';

// Import section-specific form components
import HeaderForm from './components/HeaderSection/HeaderForm';
import HeroForm from './components/HeroSection/HeroForm';
import AboutForm from './components/AboutSection/AboutForm';
import PortfolioForm from './components/PortfolioSection/PortfolioForm';
import ServicesForm from './components/ServicesSection/ServicesForm';
import TestimonialsForm from './components/TestimonialsSection/TestimonialsForm';
import SkillsForm from './components/SkillsSection/SkillsForm';
import AchievementsForm from './components/AchievementsSection/AchievementsForm';
import GalleryForm from './components/GallerySection/GalleryForm';
import StatsForm from './components/StatsSection/StatsForm';
import BlogForm from './components/BlogSection/BlogForm';
import DownloadablesForm from './components/DownloadablesSection/DownloadablesForm';
import FAQForm from './components/FAQSection/FAQForm';
import PricingForm from './components/PricingSection/PricingForm';
import CTAForm from './components/CTASection/CTAForm';
import ContactForm from './components/ContactSection/ContactForm';
import SocialForm from './components/SocialSection/SocialForm';
import FooterForm from './components/FooterSection/FooterForm';
import ThemeForm from './components/ThemeSection/ThemeForm';

export default function UniversalForm({ data = {}, sectionOrder = [], onInputChange, onToggleSection, moveSectionUp, moveSectionDown }) {
  const [openSection, setOpenSection] = React.useState('basic-info');
  const sections = [
    { key: 'header', name: 'Header', color: 'blue' },
    { key: 'hero', name: 'Hero Section', color: 'purple' },
    { key: 'about', name: 'About Me / Us', color: 'green' },
    { key: 'portfolio', name: 'Portfolio / Work / Projects', color: 'yellow' },
    { key: 'services', name: 'Products / Services', color: 'indigo' },
    { key: 'testimonials', name: 'Testimonials / Reviews', color: 'pink' },
    { key: 'skills', name: 'Skills / Expertise', color: 'orange' },
    { key: 'achievements', name: 'Achievements / Awards', color: 'red' },
    { key: 'gallery', name: 'Gallery / Media', color: 'teal' },
    { key: 'stats', name: 'Stats / Numbers', color: 'cyan' },
    { key: 'blog', name: 'Blog / Articles', color: 'emerald' },
    { key: 'downloadables', name: 'Downloadables', color: 'violet' },
    { key: 'faq', name: 'FAQ', color: 'amber' },
    { key: 'pricing', name: 'Pricing / Packages', color: 'rose' },
    { key: 'cta', name: 'Call to Action Banner', color: 'lime' },
    { key: 'social', name: 'Social Media', color: 'sky' },
    { key: 'contact', name: 'Contact', color: 'emerald' },
    { key: 'footer', name: 'Footer', color: 'indigo' },
    { key: 'theme', name: 'Theme', color: 'slate' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-900 hover:bg-blue-100 focus-visible:ring-blue-500',
      purple: 'bg-purple-50 text-purple-900 hover:bg-purple-100 focus-visible:ring-purple-500',
      green: 'bg-green-50 text-green-900 hover:bg-green-100 focus-visible:ring-green-500',
      yellow: 'bg-yellow-50 text-yellow-900 hover:bg-yellow-100 focus-visible:ring-yellow-500',
      indigo: 'bg-indigo-50 text-indigo-900 hover:bg-indigo-100 focus-visible:ring-indigo-500',
      pink: 'bg-pink-50 text-pink-900 hover:bg-pink-100 focus-visible:ring-pink-500',
      orange: 'bg-orange-50 text-orange-900 hover:bg-orange-100 focus-visible:ring-orange-500',
      red: 'bg-red-50 text-red-900 hover:bg-red-100 focus-visible:ring-red-500',
      teal: 'bg-teal-50 text-teal-900 hover:bg-teal-100 focus-visible:ring-teal-500',
      cyan: 'bg-cyan-50 text-cyan-900 hover:bg-cyan-100 focus-visible:ring-cyan-500',
      emerald: 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100 focus-visible:ring-emerald-500',
      violet: 'bg-violet-50 text-violet-900 hover:bg-violet-100 focus-visible:ring-violet-500',
      amber: 'bg-amber-50 text-amber-900 hover:bg-amber-100 focus-visible:ring-amber-500',
      rose: 'bg-rose-50 text-rose-900 hover:bg-rose-100 focus-visible:ring-rose-500',
      lime: 'bg-lime-50 text-lime-900 hover:bg-lime-100 focus-visible:ring-lime-500',
      sky: 'bg-sky-50 text-sky-900 hover:bg-sky-100 focus-visible:ring-sky-500',
      slate: 'bg-slate-50 text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-500',
      gray: 'bg-gray-50 text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-500'
    };
    return colors[color] || colors.blue;
  };

  const renderSectionContent = (sectionKey) => {
    const section = data[sectionKey];
    if (!section) return null;

    switch (sectionKey) {
      case 'header':
        return <HeaderForm section={section} onInputChange={onInputChange} />;
      case 'hero':
        return <HeroForm section={section} onInputChange={onInputChange} />;
      case 'about':
        return <AboutForm section={section} onInputChange={onInputChange} />;
      case 'portfolio':
        return <PortfolioForm section={section} onInputChange={onInputChange} />;
      case 'services':
        return <ServicesForm section={section} onInputChange={onInputChange} />;
      case 'testimonials':
        return <TestimonialsForm section={section} onInputChange={onInputChange} />;
      case 'skills':
        return <SkillsForm section={section} onInputChange={onInputChange} />;
      case 'achievements':
        return <AchievementsForm section={section} onInputChange={onInputChange} />;
      case 'gallery':
        return <GalleryForm section={section} onInputChange={onInputChange} />;
      case 'stats':
        return <StatsForm section={section} onInputChange={onInputChange} />;
      case 'blog':
        return <BlogForm section={section} onInputChange={onInputChange} />;
      case 'downloadables':
        return <DownloadablesForm section={section} onInputChange={onInputChange} />;
      case 'faq':
        return <FAQForm section={section} onInputChange={onInputChange} />;
      case 'pricing':
        return <PricingForm section={section} onInputChange={onInputChange} />;
      case 'cta':
        return <CTAForm section={section} onInputChange={onInputChange} />;
      case 'contact':
        return <ContactForm section={section} onInputChange={onInputChange} />;
      case 'social':
        return <SocialForm section={section} onInputChange={onInputChange} />;
      case 'footer':
        return <FooterForm section={section} onInputChange={onInputChange} />;
      case 'theme':
        return <ThemeForm section={section} onInputChange={onInputChange} />;
      default:
        return (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={section.title || ''}
                onChange={(e) => onInputChange(sectionKey, 'title', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder={`${sections.find(s => s.key === sectionKey)?.name} Title`}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Subtitle</label>
              <input
                type="text"
                value={section.subtitle || ''}
                onChange={(e) => onInputChange(sectionKey, 'subtitle', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder={`${sections.find(s => s.key === sectionKey)?.name} Subtitle`}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={section.description || ''}
                onChange={(e) => onInputChange(sectionKey, 'description', e.target.value)}
                rows={2}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder={`${sections.find(s => s.key === sectionKey)?.name} description...`}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-3">
      {/* Basic Info Section */}
      <div>
        <button
          onClick={() => setOpenSection(openSection === 'basic-info' ? null : 'basic-info')}
          className={`flex w-full justify-between rounded-lg px-3 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 ${getColorClasses('blue')}`}
        >
          <span>Basic Info</span>
          <ChevronDownIcon
            className={`${
              openSection === 'basic-info' ? 'transform rotate-180' : ''
            } w-4 h-4 text-blue-500 transition-transform duration-200`}
          />
        </button>
        {openSection === 'basic-info' && (
          <div className="px-3 pb-3 pt-2 text-sm text-gray-500">
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Business Name</label>
                <input
                  type="text"
                  value={data.businessName || ''}
                  onChange={(e) => onInputChange('businessName', '', e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your Business Name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Tagline</label>
                <input
                  type="text"
                  value={data.tagline || ''}
                  onChange={(e) => onInputChange('tagline', '', e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your Tagline or Slogan"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Theme Section */}
      <div>
        <button
          onClick={() => setOpenSection(openSection === 'theme' ? null : 'theme')}
          className={`flex w-full justify-between rounded-lg px-3 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 ${getColorClasses('slate')}`}
        >
          <span>Theme</span>
          <ChevronDownIcon
            className={`${
              openSection === 'theme' ? 'transform rotate-180' : ''
            } w-4 h-4 text-slate-500 transition-transform duration-200`}
          />
        </button>
        {openSection === 'theme' && (
          <div className="px-3 pb-3 pt-2 text-sm text-gray-500">
            <ThemeForm section={data.theme || {}} onInputChange={onInputChange} />
          </div>
        )}
      </div>

      {/* Section Toggles */}
      {sectionOrder.map((sectionKey) => {
        const section = sections.find(s => s.key === sectionKey);
        if (!section) return null;
        
        const currentIndex = sectionOrder.indexOf(sectionKey);
        const isFirst = currentIndex === 0;
        const isLast = currentIndex === sectionOrder.length - 1;
        
        return (
          <div key={section.key}>
            <div
              onClick={() => setOpenSection(openSection === section.key ? null : section.key)}
              className={`flex w-full justify-between rounded-lg px-3 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 cursor-pointer ${getColorClasses(section.color)}`}
            >
              <div className="flex items-center space-x-2">
                <span>{section.name}</span>
                <span 
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSection(section.key);
                  }}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  {data[section.key]?.visible === false ? (
                    <EyeSlashIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                {/* Reorder Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    moveSectionUp(section.key);
                  }}
                  disabled={isFirst}
                  className={`p-1 rounded hover:bg-gray-200 transition-colors ${isFirst ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700'}`}
                  title="Move Up"
                >
                  <ChevronUpIcon className="w-3 h-3" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    moveSectionDown(section.key);
                  }}
                  disabled={isLast}
                  className={`p-1 rounded hover:bg-gray-200 transition-colors ${isLast ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700'}`}
                  title="Move Down"
                >
                  <ChevronDownIconSolid className="w-3 h-3" />
                </button>
                {/* Expand/Collapse Icon */}
                <ChevronDownIcon
                  className={`${
                    openSection === section.key ? 'transform rotate-180' : ''
                  } w-4 h-4 transition-transform duration-200`}
                />
              </div>
            </div>
            {openSection === section.key && (
              <div className="px-3 pb-3 pt-2 text-sm text-gray-500">
                {renderSectionContent(section.key)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
