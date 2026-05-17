import { copy } from "../lib/i18n";

type EmptyStateProps = {
  onNewNote: () => void;
};

export function EmptyState({ onNewNote }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-89 px-21 text-center">
      {/* Circular motif - subtle enso */}
      <div 
        className="w-89 h-89 rounded-full border-2 border-[var(--color-line)] mb-34 opacity-40"
        aria-hidden="true"
      />
      
      <h2 className="text-xl font-serif text-sumi mb-8">
        {copy.emptyTitle}
      </h2>
      
      <p className="text-ink-muted mb-34">
        {copy.emptySubtitle}
      </p>
      
      <button
        onClick={onNewNote}
        className="px-34 py-13 bg-indigo text-washi rounded-lg hover:bg-opacity-90 active:bg-opacity-80 transition-all duration-300 min-h-[44px]"
      >
        {copy.emptyAction}
      </button>
    </div>
  );
}
