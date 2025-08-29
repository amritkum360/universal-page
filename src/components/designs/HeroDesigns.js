'use client';

export default function HeroDesigns({ onDesignSelect }) {
  const heroDesigns = [
    {
      id: 'landing',
      name: 'Landing Hero',
      description: 'Full-width hero section with centered content',
      preview: 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600',
      defaultContent: {
        title: 'Welcome to Our Platform',
        subtitle: 'Create amazing websites with our powerful builder',
        cta: 'Get Started'
      },
      defaultStyles: {
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#ffffff',
        fontSize: '16px'
      }
    },
    {
      id: 'split',
      name: 'Split Hero',
      description: 'Two-column layout with content and visual elements',
      preview: 'bg-gradient-to-br from-green-500 via-blue-500 to-purple-600',
      defaultContent: {
        title: 'Welcome to Our Platform',
        subtitle: 'Create amazing websites with our powerful builder',
        cta: 'Get Started'
      },
      defaultStyles: {
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#ffffff',
        fontSize: '16px'
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {heroDesigns.map((design) => (
        <div
          key={design.id}
          onClick={() => onDesignSelect(design)}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-500 group"
        >
          {/* Design Preview */}
          <div className={`${design.preview} rounded-xl h-40 mb-4 flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10 text-white text-center">
              <div className="text-lg font-bold mb-2">Hero Preview</div>
              <div className="text-sm opacity-90">Centered content layout</div>
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
