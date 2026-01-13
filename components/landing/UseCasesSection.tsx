import Image from 'next/image'

const useCases = [
  {
    title: 'Mobile Medical & Diagnostic Units',
    description: 'Mobile MRI scanners, diagnostic trailers, and specialist treatment units worth millions. Track location, maintenance schedules, calibration compliance, and chain of custody. Know exactly where your units are deployed and when they need servicing.',
    image: '/images/usecase-mobile-medical.png',
    imageAlt: 'Mobile medical diagnostic unit outside a Medical Centre',
  },
  {
    title: 'Outside Broadcast & Production',
    description: 'OB trucks, satellite uplink vehicles, and mobile production units that keep live TV on air. Track equipment assignments, generator hours, technical certifications, and deployment schedules across productions and venues.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=500&fit=crop',
    imageAlt: 'Broadcast production equipment',
  },
  {
    title: 'PA, Lighting & Event Production',
    description: 'High-churn inventory that moves fast between gigs. Track speaker stacks, lighting rigs, staging equipment, and cable inventory. Handover workflows for crew, condition tracking, and automated return scheduling.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=500&fit=crop',
    imageAlt: 'Concert stage with lighting and PA equipment',
  },
  {
    title: 'Construction & Heavy Plant',
    description: 'Excavators, cranes, and specialist machinery across multiple job sites. Track operating hours, schedule servicing, maintain safety certifications, and ensure the right kit is on the right site at the right time.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
    imageAlt: 'Construction machinery on site',
  },
]

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-track-background-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-track-foreground mb-4">
            Built for Asset-Intensive Industries
          </h2>
          <p className="text-xl text-track-muted-foreground max-w-2xl mx-auto">
            From million-pound medical units to festival PA rigs - Track adapts to the specific demands of your sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group relative border bg-track-card transition-all duration-300 hover:translate-y-[-4px] border-track-border overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-track-primary group-hover:bg-track-primary-light transition-colors z-10" />

              <div className="relative h-48 overflow-hidden">
                <Image
                  src={useCase.image}
                  alt={useCase.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-track-card via-track-card/60 to-transparent" />
              </div>

              <div className="p-8 pt-4">
                <h3 className="text-xl font-semibold text-track-foreground mb-3 group-hover:text-track-primary-card transition-colors">
                  {useCase.title}
                </h3>

                <p className="text-track-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
