import { useState, useEffect } from "react";
import type { Note } from "./types/note";
import { loadNotes, saveNotes } from "./lib/storage";
import { AppShell } from "./components/AppShell";
import { NotesList } from "./components/NotesList";
import { NoteEditor } from "./components/NoteEditor";

type View = "list" | "editor";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentView, setCurrentView] = useState<View>("list");
  const [currentNote, setCurrentNote] = useState<Note | null>(null);

  // Load notes on mount
  useEffect(() => {
    const loadedNotes = loadNotes();
    setNotes(loadedNotes);
  }, []);

  // Save notes whenever they change
  useEffect(() => {
    if (notes.length >= 0) {
      saveNotes(notes);
    }
  }, [notes]);

  const handleNewNote = () => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: "",
      body: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isFavorite: false,
      locale: "ja",
    };
    setCurrentNote(newNote);
    setNotes([...notes, newNote]);
    setCurrentView("editor");
  };

  const handleSelectNote = (note: Note) => {
    setCurrentNote(note);
    setCurrentView("editor");
  };

  const handleUpdateNote = (updatedNote: Note) => {
    setNotes(notes.map((n) => (n.id === updatedNote.id ? updatedNote : n)));
    setCurrentNote(updatedNote);
  };

  const handleDeleteNote = () => {
    if (currentNote) {
      setNotes(notes.filter((n) => n.id !== currentNote.id));
      setCurrentNote(null);
      setCurrentView("list");
    }
  };

  const handleBack = () => {
    setCurrentNote(null);
    setCurrentView("list");
  };

  return (
    <AppShell>
      {currentView === "list" ? (
        <NotesList
          notes={notes}
          onSelectNote={handleSelectNote}
          onNewNote={handleNewNote}
        />
      ) : currentNote ? (
        <NoteEditor
          note={currentNote}
          onUpdate={handleUpdateNote}
          onDelete={handleDeleteNote}
          onBack={handleBack}
        />
      ) : null}
    </AppShell>
  );
}

export default App;
