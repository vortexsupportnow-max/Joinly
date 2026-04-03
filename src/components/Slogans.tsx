const slogans = [
  { text: 'Your skills. Your story. Your Joinly.', tone: 'Personale' },
  { text: 'Stop scrolling. Start building.', tone: 'Motivante' },
  { text: 'Find your crew. Build your dream.', tone: 'Community' },
  { text: "The platform that works like you do — creatively.", tone: 'Differenziante' },
  { text: 'Where freelancers become founders.', tone: 'Aspirazionale' },
  { text: 'Join. Create. Grow.', tone: 'Minimalista' },
  { text: 'Your next big project starts with a connection.', tone: 'FOMO positivo' },
  { text: 'Not just a portfolio. A launchpad.', tone: 'Futuro' },
];

export default function Slogans() {
  return (
    <section id="slogans" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mx-auto w-fit">💡 Brand Voice</div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Il messaggio che{' '}
            <span className="gradient-text">risuona</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Otto slogan testati per diversi contesti: social media, campagne paid,
            onboarding e presentazioni a investitori.
          </p>
        </div>

        {/* Slogans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {slogans.map((slogan, i) => (
            <div
              key={i}
              className="card group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.05) 0%, rgba(249,115,22,0.05) 100%)' }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.2)',
                      color: '#FB923C',
                    }}
                  >
                    {slogan.tone}
                  </span>
                  <span className="text-gray-600 text-xs font-mono">
                    #{String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <blockquote className="text-lg font-bold text-white leading-snug group-hover:gradient-text transition-all">
                  &ldquo;{slogan.text}&rdquo;
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
