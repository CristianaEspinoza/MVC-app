
import { useCallback } from 'react';
import { useNoteModel } from '../models/NoteContext';

export const useNoteController = () => {
  const { state, dispatch } = useNoteModel();

  const createNote = useCallback(() => {
    const newNote = {
      id: crypto.randomUUID(),
      title: '',
      content: '',
      updatedAt: Date.now(),
    };
    dispatch({ type: 'ADD_NOTE', payload: newNote });
  }, [dispatch]);

  const updateNote = useCallback((updates) => {
    if (!state.selectedNoteId) return;
    const currentNote = state.notes.find(n => n.id === state.selectedNoteId);
    if (!currentNote) return;

    const updatedNote = {
      ...currentNote,
      ...updates,
      updatedAt: Date.now(),
    };
    dispatch({ type: 'UPDATE_NOTE', payload: updatedNote });
  }, [dispatch, state.notes, state.selectedNoteId]);

  const deleteNote = useCallback((id) => {
    dispatch({ type: 'DELETE_NOTE', payload: id });
  }, [dispatch]);

  const selectNote = useCallback((id) => {
    dispatch({ type: 'SELECT_NOTE', payload: id });
  }, [dispatch]);

  const selectedNote = state.notes.find(n => n.id === state.selectedNoteId) || null;

  return {
    notes: state.notes,
    selectedNote,
    createNote,
    updateNote,
    deleteNote,
    selectNote,
  };
};
