'use client';

import Image from "next/image";

export default function CustomElement({ 
  sectionId, 
  element, 
  onElementClick 
}) {
  const elementStyle = {
    fontSize: element.styles?.fontSize || '16px',
    color: element.styles?.color || '#000000',
    backgroundColor: element.styles?.backgroundColor || 'transparent',
    padding: '4px 8px',
    borderRadius: '4px',
    cursor: 'pointer',
    position: 'relative'
  };

  switch (element.type) {
    case 'text':
      return (
        <span
          style={elementStyle}
          onClick={(e) => onElementClick(sectionId, element.id, e)}
          className="inline-block hover:bg-gray-100"
        >
          {element.content}
        </span>
      );
    case 'button':
      return (
        <button
          style={elementStyle}
          onClick={(e) => onElementClick(sectionId, element.id, e)}
          className="px-4 py-2 rounded hover:bg-gray-100"
        >
          {element.content}
        </button>
      );
    case 'image':
      return (
        <Image
          src={element.content}
          alt="Element"
          style={elementStyle}
          onClick={(e) => onElementClick(sectionId, element.id, e)}
          className="max-w-xs rounded cursor-pointer hover:opacity-80"
        />
      );
    default:
      return (
        <div
          style={elementStyle}
          onClick={(e) => onElementClick(sectionId, element.id, e)}
          className="inline-block hover:bg-gray-100"
        >
          {element.content}
        </div>
      );
  }
}
