'use client';

import React from 'react';

export default function FAQTemplate({ section }) {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-yellow-50" role="region" aria-label="FAQ">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{section.title}</h2>
            {section.subtitle && (
              <p className="text-xl text-gray-600">{section.subtitle}</p>
            )}
          </div>
          {section.items && (
            <div className="space-y-6">
              {section.items.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
