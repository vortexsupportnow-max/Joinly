const footerLinks = {
  Prodotto: ['Funzionalità', 'Come Funziona', 'Prezzi', 'Roadmap'],
  Community: ['Circles', 'Weekly Challenges', 'Mentorship', 'Blog'],
  Azienda: ['Chi Siamo', 'Lavora con Noi', 'Press Kit', 'Contatti'],
  Legale: ['Privacy Policy', 'Termini di Servizio', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer className="border-t border-brand-dark-border py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #F97316 100%)' }}
              >
                <span className="text-white font-black text-sm">J</span>
              </div>
              <span className="text-white font-bold text-xl">Joinly</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Where Talent Meets Opportunity. La piattaforma per freelance e creativi.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {['𝕏', 'in', '▶', '📸'].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-brand-dark-card border border-brand-dark-border flex items-center justify-center text-xs text-gray-400 hover:text-white hover:border-brand-purple transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-dark-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 Joinly. Fatto con ❤️ per i creativi di tutto il mondo.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-600">
              Stack: Next.js · TypeScript · TailwindCSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
