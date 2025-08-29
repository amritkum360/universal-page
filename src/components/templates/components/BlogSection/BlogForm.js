'use client';

import React, { useRef } from 'react';

export default function BlogForm({ section, onInputChange }) {
  const fileInputRefs = useRef({});

  const addPost = () => {
    const newPosts = [...(section.posts || []), {
      title: 'New Blog Post',
      excerpt: 'Brief description of the blog post...',
      date: new Date().toLocaleDateString(),
      link: '',
      image: ''
    }];
    onInputChange('blog', 'posts', newPosts);
  };

  const removePost = (index) => {
    const newPosts = section.posts.filter((_, i) => i !== index);
    onInputChange('blog', 'posts', newPosts);
  };

  const updatePost = (index, field, value) => {
    const newPosts = [...section.posts];
    newPosts[index] = { ...newPosts[index], [field]: value };
    onInputChange('blog', 'posts', newPosts);
  };

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updatePost(index, 'image', imageUrl);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={section.title || ''}
          onChange={(e) => onInputChange('blog', 'title', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Our Blog"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Subtitle</label>
        <input
          type="text"
          value={section.subtitle || ''}
          onChange={(e) => onInputChange('blog', 'subtitle', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Latest Articles & Insights"
        />
      </div>

      {/* Blog Posts Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-medium text-gray-700">Blog Posts</label>
          <button
            type="button"
            onClick={addPost}
            className="px-2 py-1 text-xs bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
          >
            + Add Post
          </button>
        </div>
        
        <div className="space-y-3">
          {(section.posts || []).map((post, index) => (
            <div key={index} className="p-3 border border-gray-200 rounded-md bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-700">Post {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removePost(index)}
                  className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-2">
                {/* Post Title */}
                <input
                  type="text"
                  value={post.title || ''}
                  onChange={(e) => updatePost(index, 'title', e.target.value)}
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Blog Post Title"
                />

                {/* Post Excerpt */}
                <textarea
                  value={post.excerpt || ''}
                  onChange={(e) => updatePost(index, 'excerpt', e.target.value)}
                  rows={2}
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Brief description of the blog post..."
                />

                {/* Post Date */}
                <input
                  type="text"
                  value={post.date || ''}
                  onChange={(e) => updatePost(index, 'date', e.target.value)}
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Date (e.g., Jan 15, 2024)"
                />

                {/* Post Image Upload */}
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Blog Post Image</label>
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
                    {post.image && (
                      <span className="text-xs text-gray-600 truncate">
                        {post.image.includes('blob:') ? 'Image selected' : 'Image uploaded'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Read More Link */}
                <input
                  type="text"
                  value={post.link || ''}
                  onChange={(e) => updatePost(index, 'link', e.target.value)}
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Read More Link (e.g., https://example.com/article)"
                />
              </div>
            </div>
          ))}
          
          {(!section.posts || section.posts.length === 0) && (
            <div className="text-xs text-gray-500 text-center py-4 border border-dashed border-gray-300 rounded-md">
              No blog posts yet. Click &quot;Add Post&quot; to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
