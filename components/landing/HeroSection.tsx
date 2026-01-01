import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-track-primary/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/Track_Logo.png"
              alt="Track"
              width={120}
              height={120}
              className="w-28 h-28 sm:w-32 sm:h-32"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-track-foreground mb-6">
            Asset, Fleet &{' '}
            <span className="text-track-accent">Operational Control</span>
          </h1>

          <p className="text-xl sm:text-2xl text-track-muted-foreground mb-8 max-w-3xl mx-auto">
            Real-time visibility, compliance tracking, and operational control for high-value mobile assets. Know where everything is, who has it, and what state it is in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-track-accent text-track-background font-semibold text-lg hover:bg-track-accent-light transition-colors"
            >
              Request a Demo
            </a>
            <a
              href="#features"
              className="px-8 py-4 border-2 border-track-primary text-track-foreground font-semibold text-lg hover:bg-track-primary/10 transition-colors"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
