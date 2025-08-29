'use client';

import React from 'react';

export default function AchievementsTemplate({ section }) {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-pink-50" role="region" aria-label="Achievements">
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
              {section.items.map((achievement, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-xl text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 mb-3">{achievement.description}</p>
                  <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {achievement.year}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
