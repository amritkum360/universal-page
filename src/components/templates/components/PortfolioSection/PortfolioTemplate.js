'use client';

import React from 'react';

export default function PortfolioTemplate({ section }) {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-orange-50" role="region" aria-label="Portfolio">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{section.title}</h2>
            {section.subtitle && (
              <p className="text-xl text-gray-600">{section.subtitle}</p>
            )}
          </div>
          {section.projects && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.projects.map((project, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {project.image ? (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title || 'Project image'}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center" style={{display: 'none'}}>
                        <span className="text-6xl">📁</span>
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                      <span className="text-6xl">📁</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                      >
                        View Project
                      </a>
                    )}
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
