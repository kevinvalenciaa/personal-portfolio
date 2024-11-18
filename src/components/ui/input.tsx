import { cn } from "@/lib/utils";
import { inputVariants } from "@/styles/component-variants";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: keyof typeof inputVariants;
  label?: string;
  error?: string;
}

export function Input({ variant = "default", label, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input 
        className={cn(inputVariants[variant], className)}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
