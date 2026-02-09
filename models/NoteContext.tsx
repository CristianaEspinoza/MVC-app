
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const initialState = {
  notes: [],
  selectedNoteId: null,
};

const noteReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTES':
      return { ...state, notes: action.payload };
    case 'ADD_NOTE':
      return { 
        ...state, 
        notes: [action.payload, ...state.notes], 
        selectedNoteId: action.payload.id 
      };
    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map(n => n.id === action.payload.id ? action.payload : n),
      };
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(n => n.id !== action.payload),
        selectedNoteId: state.selectedNoteId === action.payload ? null : state.selectedNoteId,
      };
    case 'SELECT_NOTE':
      return { ...state, selectedNoteId: action.payload };
    default:
      return state;
  }
};

const NoteContext = createContext(undefined);

export const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, initialState);

  // Sync with LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('simple_mvc_notes');
    if (saved) {
      try {
        dispatch({ type: 'SET_NOTES', payload: JSON.parse(saved) });
      } catch (e) {
        console.error("Failed to load notes", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('simple_mvc_notes', JSON.stringify(state.notes));
  }, [state.notes]);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteModel = () => {
  const context = useContext(NoteContext);
  if (!context) throw new Error("useNoteModel must be used within a NoteProvider");
  return context;
};
