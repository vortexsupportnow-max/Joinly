export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden">
      {/* Background glow effects */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="section-tag mx-auto w-fit mb-6">
          <span>🚀</span>
          <span>La piattaforma per freelance e creativi</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
          Where Talent{' '}
          <span className="gradient-text">Meets</span>
          <br />
          Opportunity
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
          Joinly è la piattaforma all-in-one dove{' '}
          <span className="text-white font-medium">freelance e creativi</span> mostrano il
          portfolio, costruiscono network e collaborano su{' '}
          <span className="text-white font-medium">progetti reali</span>.
        </p>

        <p className="text-lg text-gray-500 mb-10">
          Portfolio · Network · Community — tutto in un posto.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#cta" className="btn-primary text-base px-8 py-4">
            Inizia Gratis — è Gratis 🎉
          </a>
          <a href="#features" className="btn-secondary text-base px-8 py-4">
            Scopri le Funzionalità
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['🎨', '💻', '✍️', '🎵'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-brand-dark bg-brand-dark-card flex items-center justify-center text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span>+2.400 creativi in lista d&apos;attesa</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <span>4.9/5 dai beta tester</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">●</span>
            <span>Lancio Q3 2024</span>
          </div>
        </div>
      </div>

      {/* Mock UI preview */}
      <div className="max-w-4xl mx-auto mt-16 relative">
        <div className="card overflow-hidden" style={{ background: '#1A1A2E' }}>
          {/* Fake browser bar */}
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-brand-dark-border">
            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
            <div className="flex-1 ml-4 bg-brand-dark rounded-full py-1 px-3 text-xs text-gray-500">
              joinly.io/dashboard
            </div>
          </div>

          {/* Mock dashboard */}
          <div className="grid grid-cols-3 gap-4">
            {/* Left sidebar */}
            <div className="space-y-3">
              <div className="bg-brand-dark rounded-xl p-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-orange mb-2"></div>
                <div className="h-2 bg-gray-700 rounded w-3/4 mb-1"></div>
                <div className="h-2 bg-gray-800 rounded w-1/2"></div>
              </div>
              {['Portfolio', 'Network', 'Progetti', 'Circles'].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-lg p-2.5 text-xs font-medium cursor-pointer transition-colors ${
                    i === 0
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                  style={i === 0 ? { background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)' } : {}}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="col-span-2 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Visualizzazioni', value: '1.2k', color: 'from-brand-purple to-blue-500' },
                  { label: 'Connessioni', value: '348', color: 'from-brand-orange to-yellow-500' },
                ].map((stat, i) => (
                  <div key={i} className="bg-brand-dark rounded-xl p-3">
                    <div className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-brand-dark rounded-xl p-3">
                <div className="text-xs text-gray-400 mb-2 font-medium">Ultimi Progetti</div>
                {['Brand Identity · Studio Rossi', 'App Design · TechFlow', 'Web Dev · StartupXYZ'].map((project, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5 border-b border-gray-800 last:border-0">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-purple/40 to-brand-orange/40 flex-shrink-0"></div>
                    <span className="text-xs text-gray-400 truncate">{project}</span>
                    <span className="ml-auto text-xs text-green-400/70">●</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Glow under the card */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 blur-2xl opacity-30 rounded-full"
          style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #F97316 100%)' }}
        />
      </div>
    </section>
  );
}
