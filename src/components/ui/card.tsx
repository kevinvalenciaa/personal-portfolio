import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outlined" | "elevated";
}

export function Card({ children, className, variant = "default" }: CardProps) {
  const variants = {
    default: "bg-white border border-gray-200",
    outlined: "bg-transparent border-2 border-gray-300",
    elevated: "bg-white shadow-lg border-0",
  };

  return (
    <div className={cn("rounded-lg p-6", variants[variant], className)}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("", className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mt-4 pt-4 border-t border-gray-100", className)}>{children}</div>;
}
