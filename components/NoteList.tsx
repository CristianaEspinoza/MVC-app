
import React from 'react';

const NoteList = ({ notes, selectedNoteId, onSelect, onCreate }) => {
  return (
    <div className="w-full md:w-80 flex-shrink-0 border-r border-gray-200 bg-white h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur z-[5]">
        <button 
          onClick={onCreate}
          className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>New Note</span>
        </button>
      </div>
      
      <div className="divide-y divide-gray-100">
        {notes.length === 0 ? (
          <div className="p-8 text-center text-gray-400">
            <p className="text-sm">No notes yet.</p>
          </div>
        ) : (
          notes.map(note => (
            <button
              key={note.id}
              onClick={() => onSelect(note.id)}
              className={`w-full text-left p-4 transition-colors hover:bg-gray-50 flex flex-col space-y-1 ${
                selectedNoteId === note.id ? 'bg-indigo-50/50 border-l-4 border-indigo-600' : 'border-l-4 border-transparent'
              }`}
            >
              <h3 className={`font-semibold truncate ${selectedNoteId === note.id ? 'text-indigo-900' : 'text-gray-800'}`}>
                {note.title || 'Untitled Note'}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {note.content || 'No content...'}
              </p>
              <span className="text-[10px] text-gray-400 font-medium uppercase mt-2">
                {new Date(note.updatedAt).toLocaleDateString()}
              </span>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default NoteList;
