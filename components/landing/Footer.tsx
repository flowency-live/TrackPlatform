import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-track-background-alt border-t border-track-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Track_Logo.png"
              alt="Track"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-lg font-semibold text-track-foreground">Track</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#features"
              className="text-track-muted-foreground hover:text-track-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="text-track-muted-foreground hover:text-track-primary transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#contact"
              className="text-track-muted-foreground hover:text-track-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <Link
            href="https://opstack.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-track-muted-foreground hover:text-track-foreground transition-colors"
          >
            <span className="text-sm">Powered by</span>
            <Image
              src="/images/powered-by-opstack.png"
              alt="OpStack"
              width={80}
              height={24}
              className="h-5 w-auto"
            />
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-track-border text-center">
          <p className="text-sm text-track-muted-foreground">
            {new Date().getFullYear()} Track. Part of the OpStack family.
          </p>
        </div>
      </div>
    </footer>
  )
}
