import { cn } from "@/lib/utils";

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

export function Label({ htmlFor, children, className, required }: LabelProps) {
  return (
    <label 
      htmlFor={htmlFor}
      className={cn("block text-sm font-medium text-gray-900", className)}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}
