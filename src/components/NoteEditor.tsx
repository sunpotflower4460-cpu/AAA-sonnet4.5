import { useState, useEffect } from "react";
import type { Note } from "../types/note";
import { copy } from "../lib/i18n";

type NoteEditorProps = {
  note: Note;
  onUpdate: (note: Note) => void;
  onDelete: () => void;
  onBack: () => void;
};

export function NoteEditor({ note, onUpdate, onDelete, onBack }: NoteEditorProps) {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [isFavorite, setIsFavorite] = useState(note.isFavorite);
  const [saveStatus, setSaveStatus] = useState<"saved" | "saving" | "">("");

  // Auto-save effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (title !== note.title || body !== note.body || isFavorite !== note.isFavorite) {
        setSaveStatus("saving");
        
        const updatedNote: Note = {
          ...note,
          title,
          body,
          isFavorite,
          updatedAt: new Date().toISOString(),
        };
        
        onUpdate(updatedNote);
        
        setTimeout(() => {
          setSaveStatus("saved");
          setTimeout(() => setSaveStatus(""), 2000);
        }, 300);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [title, body, isFavorite, note, onUpdate]);

  const handleDelete = () => {
    if (window.confirm(copy.deleteConfirm)) {
      onDelete();
    }
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="max-w-[720px] mx-auto px-21 py-55 min-h-screen flex flex-col animate-scale-in">
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-55">
        <button
          onClick={onBack}
          className="text-sumi hover:text-indigo active:text-indigo transition-all duration-300 p-2 -ml-2 hover:scale-110 active:scale-95"
          aria-label={copy.backLabel}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-21">
          {/* Save Status */}
          {saveStatus === "saved" && (
            <div className="text-xs text-ink-muted animate-fade-in flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
              {copy.saved}
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteToggle}
            className={`text-3xl transition-all duration-400 p-2 -m-2 ${
              isFavorite 
                ? "text-gold scale-110" 
                : "text-ink-muted hover:text-gold hover:scale-110 active:scale-95"
            }`}
            aria-label={copy.favoriteLabel}
          >
            ✦
          </button>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            className="text-vermilion hover:text-opacity-80 hover:scale-110 active:scale-95 transition-all duration-300 p-2 -m-2"
            aria-label={copy.deleteLabel}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Title Input */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={copy.titlePlaceholder}
        className="w-full text-3xl font-serif text-sumi bg-transparent border-none outline-none mb-34 placeholder:text-ink-muted placeholder:opacity-50 leading-relaxed focus:placeholder:opacity-30 transition-all"
        aria-label="Note title"
      />

      {/* Body Textarea */}
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={copy.bodyPlaceholder}
        className="w-full flex-1 text-base text-sumi bg-transparent border-none outline-none placeholder:text-ink-muted placeholder:opacity-50 leading-loose focus:placeholder:opacity-30 transition-all"
        aria-label="Note body"
        style={{ minHeight: '300px' }}
      />
    </div>
  );
}
