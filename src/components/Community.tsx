const circles = [
  { emoji: '🎨', name: '#design', desc: 'UI/UX, branding, illustrazione' },
  { emoji: '💻', name: '#sviluppo-web', desc: 'Frontend, backend, fullstack' },
  { emoji: '✍️', name: '#copywriting', desc: 'Content, UX writing, SEO' },
  { emoji: '🎵', name: '#musica', desc: 'Produzione, sound design, jingle' },
  { emoji: '🚀', name: '#startup', desc: 'Founder, co-founder, MVP' },
  { emoji: '📸', name: '#fotografia', desc: 'Brand photo, eventi, prodotti' },
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
                </div>
              </div>
              <p className="text-xs text-gray-500">{circle.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
