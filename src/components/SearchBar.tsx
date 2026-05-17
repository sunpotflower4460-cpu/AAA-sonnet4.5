import { copy } from "../lib/i18n";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mb-34">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={copy.searchPlaceholder}
        className="w-full px-21 py-13 bg-paper text-sumi rounded-lg border border-[var(--color-line)] focus:outline-none focus:border-indigo transition-colors duration-300"
        aria-label={copy.searchPlaceholder}
      />
    </div>
  );
}
