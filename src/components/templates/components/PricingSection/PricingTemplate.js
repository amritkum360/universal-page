'use client';

import React from 'react';

export default function PricingTemplate({ section }) {
  return (
    <section className="py-16 px-4" style={{ background: `linear-gradient(90deg, var(--accent-color, #F59E0B) / 5%, var(--primary-color, #3B82F6) / 5%)` }} role="region" aria-label="Pricing">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{section.title}</h2>
            {section.subtitle && (
              <p className="text-xl text-gray-600">{section.subtitle}</p>
            )}
          </div>
          {section.plans && (
            <div className="grid md:grid-cols-3 gap-8">
              {section.plans.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-3xl shadow-xl relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${plan.popular ? 'ring-2' : ''}`} style={plan.popular ? { borderColor: 'var(--primary-color, #3B82F6)' } : {}}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="text-white px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--primary-color, #3B82F6)' }}>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-gray-800 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-600">/{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="mr-2 theme-primary">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full text-white py-3 rounded-lg hover:opacity-90 transition-colors font-semibold" style={{ backgroundColor: 'var(--primary-color, #3B82F6)' }}>
                      Choose Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
