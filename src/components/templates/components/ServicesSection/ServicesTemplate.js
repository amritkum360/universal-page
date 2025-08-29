'use client';

import React from 'react';

export default function ServicesTemplate({ section }) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" role="region" aria-label="Services">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{section.title}</h2>
            {section.subtitle && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{section.subtitle}</p>
            )}
          </div>
          {section.items && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((service, index) => (
                <div key={index} className="group relative">
                  {/* Background Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  
                                     {/* Main Card */}
                   <div className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                     {/* Product Image OR Icon */}
                     {service.image ? (
                       <div className="mb-6">
                         <div className="w-full h-48 rounded-2xl overflow-hidden">
                           <img
                             src={service.image}
                             alt={service.title || 'Product image'}
                             className="w-full h-full object-cover"
                             onError={(e) => {
                               e.target.style.display = 'none';
                               e.target.nextSibling.style.display = 'flex';
                             }}
                           />
                           <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center" style={{display: 'none'}}>
                             <span className="text-4xl">🖼️</span>
                           </div>
                         </div>
                       </div>
                     ) : service.icon ? (
                       <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                         <span className="text-2xl">{service.icon}</span>
                       </div>
                     ) : (
                       <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center mb-6">
                         <span className="text-2xl">📋</span>
                       </div>
                     )}
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features List */}
                      {service.features && service.features.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-700">Features:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Price */}
                      {service.price && (
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-2xl font-bold text-indigo-600">
                            {service.price}
                          </p>
                        </div>
                      )}
                      
                                             {/* CTA Button */}
                      {service.buttonLink ? (
                        <a
                          href={service.buttonLink}
                          className="block w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                        >
                          {service.buttonText || 'Get Started'}
                        </a>
                      ) : (
                        <button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                          {service.buttonText || 'Get Started'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Empty State */}
          {(!section.items || section.items.length === 0) && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Services Yet</h3>
              <p className="text-gray-500">Add some services to showcase what you offer</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
