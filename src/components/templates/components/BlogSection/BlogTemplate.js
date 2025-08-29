'use client';

import React from 'react';

export default function BlogTemplate({ section }) {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-green-50" role="region" aria-label="Blog">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{section.title}</h2>
            {section.subtitle && (
              <p className="text-xl text-gray-600">{section.subtitle}</p>
            )}
          </div>
          {section.posts && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {section.posts.map((post, index) => (
                 <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                   {post.image ? (
                     <div className="h-48 overflow-hidden">
                       <img
                         src={post.image}
                         alt={post.title || 'Blog post image'}
                         className="w-full h-full object-cover"
                         onError={(e) => {
                           e.target.style.display = 'none';
                           e.target.nextSibling.style.display = 'flex';
                         }}
                       />
                       <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center" style={{display: 'none'}}>
                         <span className="text-6xl">📝</span>
                       </div>
                     </div>
                   ) : (
                     <div className="h-48 bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
                       <span className="text-6xl">📝</span>
                     </div>
                   )}
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    {post.link && (
                      <a
                        href={post.link}
                        className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
                      >
                        Read More
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
