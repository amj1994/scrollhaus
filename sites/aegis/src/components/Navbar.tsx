import { Button } from './ui/button'

const NAV_LINKS = ['Systems', 'About', 'Deployments', 'Team', 'Contact']

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5">
      {/* Logo */}
      <span className="text-foreground text-xl font-semibold tracking-tight">
        AEGIS
      </span>

      {/* Centre nav links */}
      <div className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <Button
        variant="navCta"
        size="lg"
        className="hidden md:inline-flex rounded-lg uppercase text-xs tracking-widest px-6"
      >
        Get Quote
      </Button>
    </nav>
  )
}
