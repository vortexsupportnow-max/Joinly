const features = [
  {
    emoji: '🎨',
    title: 'Portfolio Intelligente',
    description:
      'Card multimediali interattive per video, design, codice e audio. L\'AI analizza i tuoi progetti e suggerisce tag e categorie automaticamente.',
    tag: 'Portfolio',
    highlights: ['Case Study Builder', 'AI Skill Tagging', 'Portfolio Analytics'],
  },
  {
    emoji: '🤝',
    title: 'Match Me',
    description:
      'Un algoritmo smart che connette freelance con competenze complementari. Skill Swaps per scambiare servizi e Proximity Networking per trovare creativi vicino a te.',
    tag: 'Networking',
    highlights: ['Algoritmo di Matching', 'Skill Swaps', 'Mappa Creativi'],
  },
  {
    emoji: '🏗️',
    title: 'Project Rooms',
    description:
      'Pubblica Open Briefs e invita collaboratori. Spazi condivisi con Kanban board, file sharing e chat integrata. Milestone Contracts per gestire accordi in modo trasparente.',
    tag: 'Collaborazione',
    highlights: ['Open Briefs', 'Kanban Board', 'Milestone Contracts'],
  },
  {
    emoji: '💬',
    title: 'Circles',
    description:
      'Canali tematici come #design, #dev, #startup con stanze vocali e video. Weekly Challenges per emergere e un sistema di Mentorship strutturato.',
    tag: 'Community',
    highlights: ['Canali Tematici', 'Stanze Vocali', 'Weekly Challenges'],
  },
  {
    emoji: '🚀',
    title: 'Co-Founder Mode',
    description:
      'Modalità dedicata a chi cerca co-fondatori per startup e side project. Trova il tuo complemento ideale tra migliaia di talenti motivati.',
    tag: 'Startup',
    highlights: ['Profili Co-Founder', 'Pitch Deck Sharing', 'Equity Matching'],
  },
  {
    emoji: '💰',
    title: 'Project Marketplace',
    description:
      'Brief retribuiti da aziende e agenzie. Tip Jar per supportare i creativi preferiti. Sistema trasparente di Revenue Sharing per progetti collaborativi.',
    tag: 'Monetizzazione',
    highlights: ['Brief Retribuiti', 'Tip Jar', 'Revenue Sharing'],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mx-auto w-fit">✨ Funzionalità</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Tutto ciò di cui hai bisogno,{' '}
            <span className="gradient-text">finalmente insieme</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Joinly combina le migliori funzionalità di LinkedIn, Fiverr e Discord in
            un&apos;unica piattaforma verticale per il mondo creativo e tech.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="card group">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{feature.emoji}</div>
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(124,58,237,0.15)',
                    border: '1px solid rgba(124,58,237,0.3)',
                    color: '#A78BFA',
                  }}
                >
                  {feature.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-white group-hover:gradient-text transition-all">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5">
                {feature.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="text-brand-purple">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
