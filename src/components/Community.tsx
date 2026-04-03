const circles = [
  { emoji: '🎨', name: '#design', members: '1.2k', desc: 'UI/UX, branding, illustrazione' },
  { emoji: '💻', name: '#sviluppo-web', members: '2.1k', desc: 'Frontend, backend, fullstack' },
  { emoji: '✍️', name: '#copywriting', members: '890', desc: 'Content, UX writing, SEO' },
  { emoji: '🎵', name: '#musica', members: '670', desc: 'Produzione, sound design, jingle' },
  { emoji: '🚀', name: '#startup', members: '1.5k', desc: 'Founder, co-founder, MVP' },
  { emoji: '📸', name: '#fotografia', members: '940', desc: 'Brand photo, eventi, prodotti' },
];

const testimonials = [
  {
    name: 'Marta V.',
    role: 'UI Designer',
    text: 'Finalmente una piattaforma che capisce come lavoriamo noi creativi. Ho trovato il mio dev co-founder in 3 giorni!',
    emoji: '🎨',
  },
  {
    name: 'Luca B.',
    role: 'Full-Stack Developer',
    text: 'Il sistema di Open Briefs è rivoluzionario. Non devo più cercare su 5 piattaforme diverse per trovare progetti interessanti.',
    emoji: '💻',
  },
  {
    name: 'Sofia T.',
    role: 'Brand Strategist',
    text: 'I Circles mi hanno permesso di entrare in contatto con freelance di altissimo livello. La qualità della community è incredibile.',
    emoji: '✍️',
  },
];

export default function Community() {
  return (
    <section id="community" className="py-24 px-4 bg-brand-dark-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mx-auto w-fit">🌐 Community</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Una community che{' '}
            <span className="gradient-text">cresce con te</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Entra nei Circles tematici, partecipa alle Weekly Challenges e trova il
            tuo mentor — o diventa quello di qualcun altro.
          </p>
        </div>

        {/* Circles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
          {circles.map((circle, i) => (
            <div key={i} className="card group cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{circle.emoji}</span>
                <div>
                  <div className="font-mono font-bold text-sm text-brand-purple group-hover:text-brand-orange transition-colors">
                    {circle.name}
                  </div>
                  <div className="text-xs text-gray-500">{circle.members} membri</div>
                </div>
              </div>
              <p className="text-xs text-gray-500">{circle.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-xl font-bold text-center mb-8 text-gray-300">
            Cosa dicono i beta tester
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                    style={{ background: 'rgba(124,58,237,0.2)' }}
                  >
                    {t.emoji}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                  <div className="ml-auto text-yellow-400 text-xs">★★★★★</div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
