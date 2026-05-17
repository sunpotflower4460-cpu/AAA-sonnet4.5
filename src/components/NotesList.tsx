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
    <div className="max-w-[720px] mx-auto px-21 py-34">
      {/* Header */}
      <div className="mb-34 text-center">
        <h1 className="text-2xl font-serif text-sumi mb-8">
          {copy.appName}
        </h1>
        <p className="text-ink-muted text-sm mb-4">
          {copy.appSubtitle}
        </p>
        <p className="text-ink-muted text-xs">
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
          <div className="text-center py-34 text-ink-muted">
            見つかりませんでした。
          </div>
        ) : (
          <EmptyState onNewNote={onNewNote} />
        )
      ) : (
        <div className="space-y-21">
          {filteredAndSortedNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onClick={() => onSelectNote(note)}
            />
          ))}
        </div>
      )}

      {/* FAB - New Note Button */}
      {notes.length > 0 && (
        <button
          onClick={onNewNote}
          className="fixed bottom-34 right-21 w-55 h-55 bg-gold text-washi rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center text-2xl"
          aria-label={copy.newNote}
        >
          +
        </button>
      )}
    </div>
  );
}
