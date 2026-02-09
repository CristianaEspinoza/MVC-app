
import React from 'react';
import { NoteProvider } from './models/NoteContext';
import { useNoteController } from './controllers/useNoteController';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

const MainContent = () => {
  const {
    notes,
    selectedNote,
    createNote,
    updateNote,
    deleteNote,
    selectNote,
  } = useNoteController();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
        <NoteList 
          notes={notes} 
          selectedNoteId={selectedNote?.id || null} 
          onSelect={selectNote} 
          onCreate={createNote} 
        />
        <NoteEditor 
          note={selectedNote} 
          onUpdate={updateNote} 
          onDelete={deleteNote} 
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <NoteProvider>
      <MainContent />
    </NoteProvider>
  );
};

export default App;
