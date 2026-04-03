import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders without crashing', () => {
    const { container } = render(<Hero />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders the main h1 headline', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders "Where Talent" in the heading', () => {
    render(<Hero />);
    expect(screen.getByText(/Where Talent/i)).toBeInTheDocument();
  });

  it('renders "Opportunity" in the heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Opportunity');
  });

  it('renders the badge text', () => {
    render(<Hero />);
    expect(screen.getByText(/La piattaforma per freelance e creativi/i)).toBeInTheDocument();
  });

  it('renders the subheadline description', () => {
    render(<Hero />);
    expect(screen.getByText(/piattaforma all-in-one/i)).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<Hero />);
    expect(screen.getByText(/Portfolio · Network · Community/i)).toBeInTheDocument();
  });

  it('renders the primary CTA link', () => {
    render(<Hero />);
    expect(screen.getByText(/Inizia Gratis/i)).toBeInTheDocument();
  });

  it('primary CTA links to #cta', () => {
    render(<Hero />);
    const ctaLink = screen.getByText(/Inizia Gratis/i).closest('a');
    expect(ctaLink).toHaveAttribute('href', '#cta');
  });

  it('renders the secondary CTA link', () => {
    render(<Hero />);
    expect(screen.getByText('Scopri le Funzionalità')).toBeInTheDocument();
  });

  it('secondary CTA links to #features', () => {
    render(<Hero />);
    const secondaryCta = screen.getByText('Scopri le Funzionalità').closest('a');
    expect(secondaryCta).toHaveAttribute('href', '#features');
  });

  it('renders the waitlist social proof stat', () => {
    render(<Hero />);
    expect(screen.getByText(/creativi in lista d'attesa/i)).toBeInTheDocument();
  });

  it('renders the beta tester rating', () => {
    render(<Hero />);
    expect(screen.getByText(/4.9\/5 dai beta tester/i)).toBeInTheDocument();
  });

  it('renders the launch date', () => {
    render(<Hero />);
    expect(screen.getByText(/Lancio Q3 2024/i)).toBeInTheDocument();
  });

  it('renders the mock dashboard URL', () => {
    render(<Hero />);
    expect(screen.getByText('joinly.io/dashboard')).toBeInTheDocument();
  });

  it('renders mock dashboard sidebar navigation items', () => {
    render(<Hero />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Network')).toBeInTheDocument();
    expect(screen.getByText('Progetti')).toBeInTheDocument();
    expect(screen.getByText('Circles')).toBeInTheDocument();
  });

  it('renders mock dashboard stats', () => {
    render(<Hero />);
    expect(screen.getByText('1.2k')).toBeInTheDocument();
    expect(screen.getByText('348')).toBeInTheDocument();
    expect(screen.getByText('Visualizzazioni')).toBeInTheDocument();
    expect(screen.getByText('Connessioni')).toBeInTheDocument();
  });

  it('renders mock dashboard project entries', () => {
    render(<Hero />);
    expect(screen.getByText('Brand Identity · Studio Rossi')).toBeInTheDocument();
    expect(screen.getByText('App Design · TechFlow')).toBeInTheDocument();
    expect(screen.getByText('Web Dev · StartupXYZ')).toBeInTheDocument();
  });
});
