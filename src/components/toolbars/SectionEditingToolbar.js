'use client';

export default function SectionEditingToolbar({ 
  section, 
  onStyleChange, 
  onAddElement, 
  showElementMenu, 
  onToggleElementMenu, 
  onDone 
}) {
  return (
    <div className="absolute top-2 right-2 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-10">
      <div className="flex flex-col gap-2">
        {/* Background Color */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600">BG:</span>
          <input
            type="color"
            value={section.styles?.backgroundColor || '#667eea'}
            onChange={(e) => onStyleChange(section.id, 'backgroundColor', e.target.value)}
            className="w-8 h-8 rounded border cursor-pointer"
          />
        </div>
        
        {/* Text Color */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600">Text:</span>
          <input
            type="color"
            value={section.styles?.color || '#ffffff'}
            onChange={(e) => onStyleChange(section.id, 'color', e.target.value)}
            className="w-8 h-8 rounded border cursor-pointer"
          />
        </div>

        {/* Font Size */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600">Size:</span>
          <select
            value={section.styles?.fontSize || '16px'}
            onChange={(e) => onStyleChange(section.id, 'fontSize', e.target.value)}
            className="text-xs border rounded px-1"
          >
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
            <option value="32px">32px</option>
          </select>
        </div>

        {/* Add Element Button */}
        <button
          onClick={onToggleElementMenu}
          className="bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600"
        >
          + Add Element
        </button>

        {/* Done Button */}
        <button
          onClick={onDone}
          className="bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600"
        >
          Done
        </button>
      </div>

      {/* Element Menu */}
      {showElementMenu && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-20">
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => onAddElement(section.id, 'text')}
              className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
            >
              Text
            </button>
            <button
              onClick={() => onAddElement(section.id, 'image')}
              className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
            >
              Image
            </button>
            <button
              onClick={() => onAddElement(section.id, 'button')}
              className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
            >
              Button
            </button>
            <button
              onClick={() => onAddElement(section.id, 'divider')}
              className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
            >
              Divider
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
