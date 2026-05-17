import type { Note } from "../types/note";
import { formatDate } from "../lib/date";
import { copy } from "../lib/i18n";

type NoteCardProps = {
  note: Note;
  onClick: () => void;
};

export function NoteCard({ note, onClick }: NoteCardProps) {
  const title = note.title.trim() || copy.untitled;
  const preview = note.body.substring(0, 120);

  return (
    <div
      onClick={onClick}
      className="bg-paper p-21 rounded-lg border-l-4 border-l-indigo shadow-[0_2px_8px_var(--color-shadow)] hover:shadow-[0_4px_12px_var(--color-shadow)] cursor-pointer transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-13 mb-8">
        <h3 className="text-lg font-serif text-sumi flex-1">
          {title}
        </h3>
        {note.isFavorite && (
          <span className="text-gold text-xl" aria-label={copy.favoriteLabel}>
            ✦
          </span>
        )}
      </div>

      {note.body && (
        <p className="text-ink-muted text-sm mb-13 line-clamp-3">
          {preview}
        </p>
      )}

      <div className="text-ink-muted text-xs">
        {formatDate(note.updatedAt)}
      </div>
    </div>
  );
}
