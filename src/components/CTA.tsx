'use client';

export default function CTA() {
  return (
    <section id="cta" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-12 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(249,115,22,0.2) 100%)', border: '1px solid rgba(124,58,237,0.3)' }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 opacity-30 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, #7C3AED 0%, transparent 70%)' }}
          />

          <div className="relative z-10">
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Pronto a far decollare{' '}
              <span className="gradient-text">la tua carriera?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
              Crea il tuo account Joinly gratuitamente e inizia a costruire il tuo portfolio,
              espandere il network e collaborare su progetti reali.
            </p>

            {/* Email form */}
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="La tua email..."
                className="flex-1 px-4 py-3 rounded-full bg-brand-dark border border-brand-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple transition-colors text-sm"
              />
              <button type="submit" className="btn-primary py-3 px-6 text-sm whitespace-nowrap">
                Registrati Gratis ✨
              </button>
            </form>

            <p className="text-xs text-gray-600">
              Nessuna carta di credito richiesta · Privacy garantita · Disdici quando vuoi
            </p>

            {/* Features included */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {[
                '✓ Portfolio illimitato',
                '✓ Accesso a tutti i Circles',
                '✓ Network con freelance e creativi',
                '✓ Collabora su progetti reali',
              ].map((feature, i) => (
                <span key={i} className="text-sm text-gray-400">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
