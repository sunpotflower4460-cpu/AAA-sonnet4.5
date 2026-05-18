import type { Note } from "../types/note";
import { formatDate } from "../lib/date";
import { copy } from "../lib/i18n";

type NoteCardProps = {
  note: Note;
  onClick: () => void;
};

export function NoteCard({ note, onClick }: NoteCardProps) {
  const title = note.title.trim() || copy.untitled;
  const preview = note.body.substring(0, 100);

  return (
    <div
      onClick={onClick}
      className="bg-paper p-21 rounded-lg border-l-2 border-l-sumi/20 shadow-[0_1px_4px_var(--color-shadow)] hover:shadow-[0_4px_16px_rgba(31,27,24,0.12)] hover:-translate-y-1 cursor-pointer transition-all duration-400 ease-out relative overflow-hidden group animate-slide-up"
    >
      {/* Blade accent - appears on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo via-indigo/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      
      <div className="flex items-start justify-between gap-13 mb-13">
        <h3 className="text-lg font-serif text-sumi flex-1 leading-relaxed">
          {title}
        </h3>
        {note.isFavorite && (
          <span className="text-gold text-2xl leading-none flex-shrink-0" aria-label={copy.favoriteLabel}>
            ✦
          </span>
        )}
      </div>

      {note.body && (
        <p className="text-ink-muted text-sm mb-13 line-clamp-3 leading-relaxed">
          {preview}
        </p>
      )}

      <div className="text-ink-muted text-xs opacity-60">
        {formatDate(note.updatedAt)}
      </div>
    </div>
  );
}
