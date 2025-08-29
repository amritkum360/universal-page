'use client';

import HeaderDesigns from './designs/HeaderDesigns';
import HeroDesigns from './designs/HeroDesigns';

export default function DesignSelector({ sectionType, onDesignSelect, onClose }) {
  // Map section types to their design components
  const getDesignComponent = () => {
    switch (sectionType) {
      case 'header':
        return <HeaderDesigns onDesignSelect={onDesignSelect} />;
      
      case 'hero':
        return <HeroDesigns onDesignSelect={onDesignSelect} />;
      
      default:
        return (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">
              No designs available for  section type
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Go Back
            </button>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Choose Your {sectionType?.charAt(0).toUpperCase() + sectionType?.slice(1)} Design
        </h3>
        <p className="text-gray-600">
          Select from our professionally designed templates
        </p>
      </div>

      {/* Design Grid */}
      <div className="min-h-[400px]">
        {getDesignComponent()}
      </div>

      {/* Footer */}
      <div className="text-center pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          All designs are fully customizable after selection
        </p>
      </div>
    </div>
  );
}
