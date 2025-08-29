'use client';

import CustomElement from '../elements/CustomElement';

export default function DefaultSection({ 
  section, 
  onElementClick 
}) {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-xl">
      <h3 className="font-semibold text-gray-800 capitalize">{section.type} Section</h3>
      <p className="text-sm text-gray-500">{section.design?.name || 'Default Design'}</p>
      
      {/* Render Custom Elements */}
      {section.elements && section.elements.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {section.elements.map((element) => (
            <div key={element.id}>
              <CustomElement 
                sectionId={section.id}
                element={element}
                onElementClick={onElementClick}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
