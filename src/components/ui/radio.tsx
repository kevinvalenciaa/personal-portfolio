import { cn } from "@/lib/utils";

interface RadioProps {
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  label?: string;
  name: string;
  disabled?: boolean;
  className?: string;
}

export function Radio({ value, checked, onChange, label, name, disabled, className }: RadioProps) {
  return (
    <label className={cn("flex items-center space-x-2 cursor-pointer", disabled && "opacity-50 cursor-not-allowed", className)}>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        name={name}
        disabled={disabled}
        className="text-blue-600 focus:ring-blue-500"
      />
      {label && <span className="text-sm font-medium">{label}</span>}
    </label>
  );
}
