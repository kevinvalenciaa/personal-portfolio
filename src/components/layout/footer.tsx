export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Kevin Valencia with Next.js and TypeScript.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/kevinvalenciaa" className="text-muted-foreground hover:text-foreground">
            GitHub
          </a>
          <a href="https://linkedin.com/in/kevinvalencia" className="text-muted-foreground hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
