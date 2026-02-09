
import React from 'react';

const NoteEditor = ({ note, onUpdate, onDelete }) => {
  if (!note) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 text-gray-400 p-8 text-center">
        <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        <p className="text-lg font-medium">Select a note to start editing</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white h-full relative">
      <div className="px-6 py-3 border-b border-gray-100 flex items-center justify-end sticky top-0 bg-white z-[5]">
        <button 
          onClick={() => onDelete(note.id)}
          className="p-2 text-gray-400 hover:text-red-600 rounded-lg transition-colors"
          title="Delete Note"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <div className="p-8 md:p-12 overflow-y-auto flex-1 space-y-6 max-w-4xl mx-auto w-full">
        <input
          type="text"
          value={note.title}
          onChange={(e) => onUpdate({ title: e.target.value })}
          placeholder="Note Title"
          className="w-full text-4xl font-bold text-gray-900 border-none focus:ring-0 placeholder-gray-200 outline-none"
        />
        
        <textarea
          value={note.content}
          onChange={(e) => onUpdate({ content: e.target.value })}
          placeholder="Start writing..."
          className="w-full h-full text-lg text-gray-700 border-none focus:ring-0 placeholder-gray-200 resize-none outline-none leading-relaxed"
        />
      </div>
    </div>
  );
};

export default NoteEditor;
