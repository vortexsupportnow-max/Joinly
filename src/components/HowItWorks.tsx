const steps = [
  {
    number: '01',
    title: 'Crea il tuo Profilo',
    description:
      'Costruisci un portfolio dinamico che racconta la tua storia professionale. Carica progetti, aggiungi case study e lascia che l\'AI tagghi automaticamente le tue skill.',
    emoji: '👤',
  },
  {
    number: '02',
    title: 'Connettiti & Fatti Trovare',
    description:
      'Il nostro algoritmo di matching ti connette con freelance complementari al tuo profilo. Unisciti ai Circles tematici e partecipa alle conversazioni che contano.',
    emoji: '🔗',
  },
  {
    number: '03',
    title: 'Collabora su Progetti Reali',
    description:
      'Pubblica un Open Brief o rispondi a quelli degli altri. Lavora in Project Rooms condivise con tutto quello che ti serve: task, file, chat e contratti.',
    emoji: '🚀',
  },
  {
    number: '04',
    title: 'Cresci & Monetizza',
    description:
      'Accedi al Marketplace per brief retribuiti, ricevi Tip dai tuoi fan, e scala la tua carriera con analytics dettagliati e visibilità premium.',
    emoji: '📈',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-brand-dark-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mx-auto w-fit">🗺️ Come Funziona</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Da zero a{' '}
            <span className="gradient-text">opportunità</span>
            <br />
            in 4 passi
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Joinly è progettato per essere intuitivo. Inizia in pochi minuti e
            sblocca il pieno potenziale della tua carriera creativa.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-brand-purple/50 to-transparent hidden lg:block"
            style={{ width: '2px' }}
          />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="card flex gap-5 group"
              >
                {/* Number */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(249,115,22,0.3) 100%)', border: '1px solid rgba(124,58,237,0.3)' }}
                >
                  <span className="gradient-text">{step.number}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{step.emoji}</span>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
