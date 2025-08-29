'use client';

const sectionCategories = [
  {
    title: '🎯 Headers',
    type: 'header',
    options: ['Classic', 'Modern', 'Minimal', 'Bold']
  },
  {
    title: '🚀 Hero Sections',
    type: 'hero',
    options: ['Landing', 'Video BG', 'Split', 'Centered']
  },
  {
    title: '📝 Content',
    type: 'content',
    options: ['Text Block', 'Features', 'Testimonials', 'Gallery']
  },
  {
    title: '📞 Contact',
    type: 'contact',
    options: ['Form', 'Map', 'Info Cards', 'Footer']
  }
];

export default function SectionMenu({ onSectionSelect, onClose }) {
  const handleSectionClick = (sectionType) => {
    onSectionSelect(sectionType);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {sectionCategories.map((category, categoryIndex) => (
        <div 
          key={categoryIndex}
          className="bg-gray-50 p-5 rounded-2xl border-2 border-gray-200 transition-all duration-300 hover:border-purple-500 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
        >
          <div className="text-lg font-semibold text-gray-800 mb-4">{category.title}</div>
          <div className="grid grid-cols-2 gap-3">
            {category.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                onClick={() => handleSectionClick(category.type)}
                className="bg-white p-4 rounded-xl border border-gray-200 text-center cursor-pointer transition-all duration-300 relative overflow-hidden group hover:border-purple-500 hover:text-purple-600 hover:scale-105"
              >
                <div className="relative z-10">{option}</div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
