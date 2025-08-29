'use client';

import React, { useRef } from 'react';

export default function GalleryForm({ section, onInputChange }) {
  const fileInputRefs = useRef({});

  const addImage = () => {
    const newImages = [...(section.images || []), {
      title: 'New Image',
      description: 'Image description',
      image: ''
    }];
    onInputChange('gallery', 'images', newImages);
  };

  const removeImage = (index) => {
    const newImages = section.images.filter((_, i) => i !== index);
    onInputChange('gallery', 'images', newImages);
  };

  const updateImage = (index, field, value) => {
    const newImages = [...section.images];
    newImages[index] = { ...newImages[index], [field]: value };
    onInputChange('gallery', 'images', newImages);
  };

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateImage(index, 'image', imageUrl);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={section.title || ''}
          onChange={(e) => onInputChange('gallery', 'title', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Gallery"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Subtitle</label>
        <input
          type="text"
          value={section.subtitle || ''}
          onChange={(e) => onInputChange('gallery', 'subtitle', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Our Work & Photos"
        />
      </div>

      {/* Gallery Images Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-medium text-gray-700">Gallery Images</label>
          <button
            type="button"
            onClick={addImage}
            className="px-2 py-1 text-xs bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
          >
            + Add Image
          </button>
        </div>
        
        <div className="space-y-3">
          {(section.images || []).map((image, index) => (
            <div key={index} className="p-3 border border-gray-200 rounded-md bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-700">Image {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  ×
                </button>
              </div>
              
                             <div className="space-y-2">
                 {/* Image Upload */}
                 <div>
                   <label className="block text-xs text-gray-600 mb-1">Gallery Image</label>
                   <div className="flex items-center space-x-2">
                     <input
                       ref={(el) => fileInputRefs.current[`image-${index}`] = el}
                       type="file"
                       accept="image/*"
                       onChange={(e) => handleImageUpload(index, e)}
                       className="hidden"
                     />
                     <button
                       type="button"
                       onClick={() => fileInputRefs.current[`image-${index}`]?.click()}
                       className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                     >
                       Choose Image
                     </button>
                     {image.image && (
                       <span className="text-xs text-gray-600 truncate">
                         {image.image.includes('blob:') ? 'Image selected' : 'Image uploaded'}
                       </span>
                     )}
                   </div>
                 </div>

                 {/* Image Title */}
                 <input
                   type="text"
                   value={image.title || ''}
                   onChange={(e) => updateImage(index, 'title', e.target.value)}
                   className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                   placeholder="Image Title"
                 />

                 {/* Image Description */}
                 <textarea
                   value={image.description || ''}
                   onChange={(e) => updateImage(index, 'description', e.target.value)}
                   rows={2}
                   className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                   placeholder="Image description (optional)"
                 />
               </div>
            </div>
          ))}
          
          {(!section.images || section.images.length === 0) && (
            <div className="text-xs text-gray-500 text-center py-4 border border-dashed border-gray-300 rounded-md">
              No images yet. Click &quot;Add Image&quot; to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
