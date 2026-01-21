import { useState, useEffect } from 'react';
import { initialMessages } from '../data/messages';

export type Message = {
  id: string;
  sender: 'sakari' | 'ben';
  text: string;
  timestamp: string;
  attachments?: Array<{ type: 'audio' | 'image'; url: string; name: string }>;
};

export type NotesStore = {
  isOpen: boolean;
  audioLinks: {
    fullMix: string;
    noGuitars: string;
    strippedMix: string;
    instrumental: string;
  };
  arrangementNotes: string;
  lyricNotes: string;
  actionItems: string[];
  messages: Message[];
};

const STORAGE_KEY = 'so-high-battleboard-notes';

const defaultState: NotesStore = {
  isOpen: false,
  audioLinks: {
    fullMix: '',
    noGuitars: '',
    strippedMix: '',
    instrumental: '',
  },
  arrangementNotes: '',
  lyricNotes: '',
  actionItems: [],
  messages: initialMessages,
};

function loadFromStorage(): NotesStore {
  if (typeof window === 'undefined') {
    return defaultState;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as NotesStore;
      // Merge with defaults to handle missing fields
      return {
        ...defaultState,
        ...parsed,
        audioLinks: {
          ...defaultState.audioLinks,
          ...parsed.audioLinks,
        },
        messages: parsed.messages || defaultState.messages,
      };
    }
  } catch (error) {
    console.error('Failed to load notes from localStorage:', error);
  }

  return defaultState;
}

function saveToStorage(state: NotesStore): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save notes to localStorage:', error);
  }
}

export function useNotesStore() {
  const [state, setState] = useState<NotesStore>(loadFromStorage);

  // Load from localStorage on mount
  useEffect(() => {
    const loaded = loadFromStorage();
    setState(loaded);
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    saveToStorage(state);
  }, [state]);

  const setIsOpen = (isOpen: boolean) => {
    setState((prev) => ({ ...prev, isOpen }));
  };

  const setAudioLinks = (audioLinks: NotesStore['audioLinks']) => {
    setState((prev) => ({ ...prev, audioLinks }));
  };

  const setArrangementNotes = (arrangementNotes: string) => {
    setState((prev) => ({ ...prev, arrangementNotes }));
  };

  const setLyricNotes = (lyricNotes: string) => {
    setState((prev) => ({ ...prev, lyricNotes }));
  };

  const addActionItem = (item: string) => {
    if (item.trim()) {
      setState((prev) => ({
        ...prev,
        actionItems: [...prev.actionItems, item.trim()],
      }));
    }
  };

  const removeActionItem = (index: number) => {
    setState((prev) => ({
      ...prev,
      actionItems: prev.actionItems.filter((_, i) => i !== index),
    }));
  };

  return {
    isOpen: state.isOpen,
    setIsOpen,
    audioLinks: state.audioLinks,
    setAudioLinks,
    arrangementNotes: state.arrangementNotes,
    setArrangementNotes,
    lyricNotes: state.lyricNotes,
    setLyricNotes,
    actionItems: state.actionItems,
    addActionItem,
    removeActionItem,
    messages: state.messages,
  };
}

