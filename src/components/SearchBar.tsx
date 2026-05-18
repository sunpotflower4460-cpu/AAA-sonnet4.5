import { copy } from "../lib/i18n";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mb-34 animate-fade-in">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={copy.searchPlaceholder}
          className="w-full px-21 py-13 bg-paper text-sumi rounded-lg border border-[var(--color-line)] focus:outline-none focus:border-indigo focus:shadow-md transition-all duration-300 placeholder:text-ink-muted placeholder:opacity-50"
          aria-label={copy.searchPlaceholder}
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-sumi transition-colors duration-200 p-2"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
