import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders as a footer element', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the Joinly brand name', () => {
    render(<Footer />);
    expect(screen.getByText('Joinly')).toBeInTheDocument();
  });

  it('renders the logo letter J', () => {
    render(<Footer />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders the brand tagline', () => {
    render(<Footer />);
    expect(screen.getByText(/Where Talent Meets Opportunity/i)).toBeInTheDocument();
  });

  it('renders the Prodotto section heading', () => {
    render(<Footer />);
    expect(screen.getByText('Prodotto')).toBeInTheDocument();
  });

  it('renders the Community section heading', () => {
    render(<Footer />);
    expect(screen.getByText('Community')).toBeInTheDocument();
  });

  it('renders the Azienda section heading', () => {
    render(<Footer />);
    expect(screen.getByText('Azienda')).toBeInTheDocument();
  });

  it('renders the Legale section heading', () => {
    render(<Footer />);
    expect(screen.getByText('Legale')).toBeInTheDocument();
  });

  it('renders Prodotto section links', () => {
    render(<Footer />);
    expect(screen.getByText('Funzionalità')).toBeInTheDocument();
    expect(screen.getByText('Come Funziona')).toBeInTheDocument();
    expect(screen.getByText('Prezzi')).toBeInTheDocument();
    expect(screen.getByText('Roadmap')).toBeInTheDocument();
  });

  it('renders Community section links', () => {
    render(<Footer />);
    expect(screen.getByText('Circles')).toBeInTheDocument();
    expect(screen.getByText('Weekly Challenges')).toBeInTheDocument();
    expect(screen.getByText('Mentorship')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('renders Azienda section links', () => {
    render(<Footer />);
    expect(screen.getByText('Chi Siamo')).toBeInTheDocument();
    expect(screen.getByText('Lavora con Noi')).toBeInTheDocument();
    expect(screen.getByText('Press Kit')).toBeInTheDocument();
    expect(screen.getByText('Contatti')).toBeInTheDocument();
  });

  it('renders Legale section links', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Termini di Servizio')).toBeInTheDocument();
    expect(screen.getByText('Cookie Policy')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    expect(screen.getByText('𝕏')).toBeInTheDocument();
    expect(screen.getByText('in')).toBeInTheDocument();
    expect(screen.getByText('▶')).toBeInTheDocument();
    expect(screen.getByText('📸')).toBeInTheDocument();
  });

  it('renders the copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2024 Joinly/i)).toBeInTheDocument();
  });

  it('renders the tech stack label', () => {
    render(<Footer />);
    expect(screen.getByText(/Next\.js · TypeScript · TailwindCSS/i)).toBeInTheDocument();
  });
});
