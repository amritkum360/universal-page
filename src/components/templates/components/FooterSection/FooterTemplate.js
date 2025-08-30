'use client';

import React from 'react';

export default function FooterTemplate({ section }) {
  const getBackgroundClass = () => {
    switch (section.backgroundColor) {
      case 'darker':
        return 'bg-black';
      case 'blue':
        return 'bg-blue-900';
      case 'custom':
        return 'bg-gray-900'; // You can customize this further
      default:
        return 'bg-gray-900';
    }
  };

  return (
    <footer className={`${getBackgroundClass()} text-white py-12 px-4`} role="contentinfo">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              {section.description ? (
                <p className="text-gray-300 text-sm leading-relaxed">{section.description}</p>
              ) : (
                <p className="text-gray-300 text-sm leading-relaxed">
                  We are dedicated to providing exceptional services and creating meaningful connections with our customers.
                </p>
              )}
            </div>

            {/* Quick Links */}
            {section.links && section.links.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {section.links.slice(0, 4).map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {section.contactTitle || 'Contact Info'}
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                {section.contactDescription ? (
                  <p>{section.contactDescription}</p>
                ) : (
                  <>
                    <p>Get in touch with us for any questions or inquiries.</p>
                    <p>We're here to help you succeed.</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  {section.copyright || '© 2024 Your Business Name. All rights reserved.'}
                </p>
              </div>

              {/* Footer Links */}
              {section.links && section.links.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6">
                  {section.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
