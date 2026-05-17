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
    <div className="max-w-[720px] mx-auto px-21 py-34 min-h-screen flex flex-col">
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-34">
        <button
          onClick={onBack}
          className="text-sumi hover:text-indigo transition-colors duration-300"
          aria-label={copy.backLabel}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-21">
          {/* Save Status */}
          {saveStatus === "saved" && (
            <div className="text-xs text-ink-muted animate-fade-in">
              {copy.saved}
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteToggle}
            className={`text-2xl transition-all duration-300 ${
              isFavorite ? "text-gold scale-110" : "text-ink-muted hover:text-gold"
            }`}
            aria-label={copy.favoriteLabel}
          >
            ✦
          </button>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            className="text-vermilion hover:text-opacity-80 transition-colors duration-300"
            aria-label={copy.deleteLabel}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
        className="w-full text-2xl font-serif text-sumi bg-transparent border-none outline-none mb-21 placeholder:text-ink-muted"
        aria-label="Note title"
      />

      {/* Body Textarea */}
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={copy.bodyPlaceholder}
        className="w-full flex-1 text-sumi bg-transparent border-none outline-none placeholder:text-ink-muted leading-relaxed"
        aria-label="Note body"
      />
    </div>
  );
}
