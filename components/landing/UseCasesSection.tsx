const useCases = [
  {
    title: 'Equipment Rental Companies',
    description: 'Track rental inventory across multiple depots, automate check-in and check-out processes, and link equipment usage directly to billing. Reduce losses and improve asset utilization.',
  },
  {
    title: 'Transport & Logistics Fleets',
    description: 'Monitor vehicle locations, driver assignments, and maintenance schedules in one platform. Ensure regulatory compliance and optimize route planning with real-time data.',
  },
  {
    title: 'Construction & Heavy Plant',
    description: 'Manage high-value machinery across job sites. Track operating hours, schedule servicing, and maintain full audit trails for safety inspections and certifications.',
  },
  {
    title: 'Healthcare & Medical Equipment',
    description: 'Track portable medical devices, ensure calibration compliance, and maintain chain of custody records. Meet regulatory requirements with automated documentation.',
  },
]

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-track-background-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-track-foreground mb-4">
            Built for Asset-Intensive Industries
          </h2>
          <p className="text-xl text-track-muted-foreground max-w-2xl mx-auto">
            Track adapts to the specific demands of your sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group relative p-8 border-2 bg-track-card transition-all duration-300 hover:translate-y-[-4px]"
              style={{ borderColor: 'hsl(215 45% 45% / 0.35)' }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-track-primary/40 group-hover:bg-track-accent transition-colors" />

              <h3 className="text-xl font-semibold text-track-foreground mb-3 group-hover:text-track-accent transition-colors">
                {useCase.title}
              </h3>

              <p className="text-track-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
