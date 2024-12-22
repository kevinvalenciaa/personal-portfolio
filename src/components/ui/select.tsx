import { cn } from "@/lib/utils";

interface SelectProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Select({ options, value, onChange, placeholder, className }: SelectProps) {
  return (
    <select 
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={cn("w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500", className)}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
