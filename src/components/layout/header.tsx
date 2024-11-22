import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Kevin Valencia</span>
          </a>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-foreground/80">About</a>
            <a href="#projects" className="transition-colors hover:text-foreground/80">Projects</a>
            <a href="#contact" className="transition-colors hover:text-foreground/80">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
