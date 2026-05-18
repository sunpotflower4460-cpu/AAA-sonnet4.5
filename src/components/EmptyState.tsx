import { copy } from "../lib/i18n";

type EmptyStateProps = {
  onNewNote: () => void;
};

export function EmptyState({ onNewNote }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-89 px-21 text-center animate-fade-in">
      {/* Circular motif - subtle enso with breathing animation */}
      <div 
        className="w-89 h-89 rounded-full border-2 border-[var(--color-line)] mb-55 opacity-30 relative"
        aria-hidden="true"
        style={{
          animation: 'breathe 4s ease-in-out infinite'
        }}
      >
        {/* Inner circle for depth */}
        <div className="absolute inset-4 rounded-full border border-[var(--color-line)] opacity-50" />
      </div>
      
      <h2 className="text-2xl font-serif text-sumi mb-13 leading-relaxed">
        {copy.emptyTitle}
      </h2>
      
      <p className="text-ink-muted mb-55 leading-loose opacity-70">
        {copy.emptySubtitle}
      </p>
      
      <button
        onClick={onNewNote}
        className="px-55 py-21 bg-indigo text-washi rounded-lg hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all duration-400 min-h-[55px] shadow-md hover:shadow-lg font-light tracking-wide"
      >
        {copy.emptyAction}
      </button>
      
      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}
