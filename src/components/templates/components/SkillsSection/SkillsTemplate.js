'use client';

import React from 'react';

export default function SkillsTemplate({ section }) {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-red-50" role="region" aria-label="Skills">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{section.title}</h2>
            {section.subtitle && (
              <p className="text-xl text-gray-600">{section.subtitle}</p>
            )}
          </div>
          {section.items && (
            <div className="grid md:grid-cols-2 gap-8">
              {section.items.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                    <span className="text-sm font-medium text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-1000 ${
                        skill.color === 'blue' ? 'bg-blue-500' :
                        skill.color === 'green' ? 'bg-green-500' :
                        skill.color === 'purple' ? 'bg-purple-500' :
                        skill.color === 'orange' ? 'bg-orange-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
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
