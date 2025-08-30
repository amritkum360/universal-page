'use client';

import React from 'react';

export default function AboutTemplate({ section }) {
  return (
    <section className="py-20 px-4" style={{ background: `linear-gradient(135deg, var(--primary-color, #3B82F6) / 5%, var(--secondary-color, #8B5CF6) / 5%, var(--accent-color, #F59E0B) / 5%)` }} role="region" aria-label="About Us">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 rounded-full mb-6" style={{ backgroundColor: 'var(--primary-color, #3B82F6) / 20%' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center theme-primary-bg">
                <span className="text-white text-xl font-bold">ℹ</span>
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {section.title}
            </h3>
            {section.subtitle && (
              <div className="inline-block px-6 py-2 text-white rounded-full text-lg font-semibold mb-6 theme-gradient">
                {section.subtitle}
              </div>
            )}
            {section.description && (
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {section.description}
                </p>
              </div>
            )}
          </div>

          {/* Features Section */}
          {section.features && section.features.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto theme-gradient">
                    <span className="text-white text-2xl font-bold">✓</span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stats Section (if no features) */}
          {(!section.features || section.features.length === 0) && (
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 theme-gradient">
                  <span className="text-white text-3xl font-bold">★</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are dedicated to providing exceptional service and innovative solutions to meet your needs.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
