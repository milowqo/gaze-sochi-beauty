export function Footer() {
  return (
    <footer className="py-8 sm:py-12 text-center border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mb-6 sm:mb-8">
          <p className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-2">GAZE</p>
          <p className="text-xs tracking-widest text-muted-foreground">BROW STUDIO</p>
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; BROW STUDIO GAZE {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
