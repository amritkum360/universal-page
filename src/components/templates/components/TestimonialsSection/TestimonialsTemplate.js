'use client';

import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsTemplate({ section }) {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-rose-50" role="region" aria-label="Testimonials">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{section.title}</h2>
            {section.subtitle && (
              <p className="text-xl text-gray-600">{section.subtitle}</p>
            )}
          </div>
          {section.items && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role} at {testimonial.company}</p>
                    </div>
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
