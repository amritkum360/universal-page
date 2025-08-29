'use client';

export default function HeaderDesigns({ onDesignSelect }) {
  const headerDesigns = [
    {
      id: 'classic',
      name: 'Classic Header',
      description: 'Traditional header with logo and navigation',
      preview: 'bg-gradient-to-r from-blue-600 to-purple-600',
      defaultContent: {
        logo: 'Your Brand',
        navItems: ['Home', 'About', 'Services', 'Contact']
      },
      defaultStyles: {
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#ffffff',
        fontSize: '16px'
      }
    },
    {
      id: 'centered',
      name: 'Centered Header',
      description: 'Modern centered layout with balanced elements',
      preview: 'bg-gradient-to-r from-green-500 to-blue-500',
      defaultContent: {
        logo: 'Brand Name',
        tagline: 'Professional Solutions',
        navItems: ['Home', 'Products', 'About', 'Contact']
      },
      defaultStyles: {
        backgroundColor: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
        color: '#ffffff',
        fontSize: '16px'
      }
    },
    {
      id: 'modern',
      name: 'Modern Header',
      description: 'Contemporary design with clean aesthetics',
      preview: 'bg-gradient-to-r from-purple-600 to-pink-600',
      defaultContent: {
        logo: 'Studio',
        tagline: 'Creative Agency',
        cta: 'Get Started',
        navItems: ['Work', 'Services', 'About', 'Contact']
      },
      defaultStyles: {
        backgroundColor: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        color: '#ffffff',
        fontSize: '16px'
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {headerDesigns.map((design) => (
        <div
          key={design.id}
          onClick={() => onDesignSelect(design)}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-500 group"
        >
          {/* Design Preview */}
          <div className={`${design.preview} rounded-xl h-32 mb-4 flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10 text-white text-center">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg mx-auto mb-2"></div>
              <div className="text-sm font-semibold">{design.name}</div>
            </div>
            <div className="absolute top-2 right-2 w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">→</span>
            </div>
          </div>

          {/* Design Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
              {design.name}
            </h3>
            <p className="text-sm text-gray-600">
              {design.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Ready to use
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
