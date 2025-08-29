'use client';


import TemplateBuilder from '../components/templates/TemplateBuilder';

export default function Home() {
  const handleTemplateSave = (templateData) => {
    console.log('Template saved:', templateData);
    // Here you can save the template data to your backend or localStorage
    alert('Template saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Universal Template Builder
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Create amazing single-page websites with 18 customizable sections
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Template Builder */}
      <TemplateBuilder
        onClose={() => {}}
        onSave={handleTemplateSave}
      />
    </div>
  );
}
