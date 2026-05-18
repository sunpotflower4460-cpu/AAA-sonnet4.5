import { useState, useMemo } from "react";
import type { Note } from "../types/note";
import { NoteCard } from "./NoteCard";
import { SearchBar } from "./SearchBar";
import { EmptyState } from "./EmptyState";
import { copy } from "../lib/i18n";

type NotesListProps = {
  notes: Note[];
  onSelectNote: (note: Note) => void;
  onNewNote: () => void;
};

export function NotesList({ notes, onSelectNote, onNewNote }: NotesListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAndSortedNotes = useMemo(() => {
    let filtered = notes;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(query) ||
          note.body.toLowerCase().includes(query)
      );
    }

    // Sort: favorites first, then by updatedAt
    return filtered.sort((a, b) => {
      if (a.isFavorite && !b.isFavorite) return -1;
      if (!a.isFavorite && b.isFavorite) return 1;
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
  }, [notes, searchQuery]);

  return (
    <div className="max-w-[720px] mx-auto px-21 py-55 animate-fade-in">
      {/* Header */}
      <div className="mb-55 text-center pt-21">
        <h1 className="text-4xl font-serif text-sumi mb-13 tracking-wider leading-relaxed">
          {copy.appName}
        </h1>
        <p className="text-ink-muted text-base mb-8 font-light">
          {copy.appSubtitle}
        </p>
        <p className="text-ink-muted text-sm font-light opacity-70 max-w-md mx-auto leading-loose">
          {copy.tagline}
        </p>
      </div>

      {/* Search */}
      {notes.length > 0 && (
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      )}

      {/* Notes or Empty State */}
      {filteredAndSortedNotes.length === 0 ? (
        searchQuery ? (
          <div className="text-center py-55 text-ink-muted animate-fade-in">
            {copy.searchEmpty}
          </div>
        ) : (
          <EmptyState onNewNote={onNewNote} />
        )
      ) : (
        <div className="space-y-21 pb-89">
          {filteredAndSortedNotes.map((note, index) => (
            <div 
              key={note.id}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <NoteCard
                note={note}
                onClick={() => onSelectNote(note)}
              />
            </div>
          ))}
        </div>
      )}

      {/* FAB - New Note Button */}
      {notes.length > 0 && (
        <button
          onClick={onNewNote}
          className="fixed bottom-34 right-21 w-55 h-55 bg-gold text-washi rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-400 ease-out flex items-center justify-center text-3xl font-light group"
          aria-label={copy.newNote}
          style={{ zIndex: 50 }}
        >
          <span className="group-hover:rotate-90 transition-transform duration-400">+</span>
        </button>
      )}
    </div>
  );
}
