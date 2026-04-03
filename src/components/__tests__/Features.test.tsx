import { render, screen } from '@testing-library/react';
import Features from '../Features';

describe('Features', () => {
  it('renders without crashing', () => {
    const { container } = render(<Features />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders the section with id="features"', () => {
    const { container } = render(<Features />);
    const section = container.querySelector('#features');
    expect(section).toBeInTheDocument();
  });

  it('renders the section tag label', () => {
    render(<Features />);
    expect(screen.getByText('✨ Funzionalità')).toBeInTheDocument();
  });

  it('renders the section heading', () => {
    render(<Features />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders the section description', () => {
    render(<Features />);
    expect(screen.getByText(/LinkedIn, Fiverr e Discord/i)).toBeInTheDocument();
  });

  it('renders all 6 feature card titles', () => {
    render(<Features />);
    expect(screen.getByText('Portfolio Intelligente')).toBeInTheDocument();
    expect(screen.getByText('Match Me')).toBeInTheDocument();
    expect(screen.getByText('Project Rooms')).toBeInTheDocument();
    expect(screen.getByText('Circles')).toBeInTheDocument();
    expect(screen.getByText('Co-Founder Mode')).toBeInTheDocument();
    expect(screen.getByText('Project Marketplace')).toBeInTheDocument();
  });

  it('renders all 6 feature emojis', () => {
    render(<Features />);
    expect(screen.getByText('🎨')).toBeInTheDocument();
    expect(screen.getByText('🤝')).toBeInTheDocument();
    expect(screen.getByText('🏗️')).toBeInTheDocument();
    expect(screen.getByText('💬')).toBeInTheDocument();
    expect(screen.getByText('🚀')).toBeInTheDocument();
    expect(screen.getByText('💰')).toBeInTheDocument();
  });

  it('renders all 6 feature category tags', () => {
    render(<Features />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Networking')).toBeInTheDocument();
    expect(screen.getByText('Collaborazione')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
    expect(screen.getByText('Startup')).toBeInTheDocument();
    expect(screen.getByText('Monetizzazione')).toBeInTheDocument();
  });

  it('renders highlights for Portfolio Intelligente', () => {
    render(<Features />);
    expect(screen.getByText('Case Study Builder')).toBeInTheDocument();
    expect(screen.getByText('AI Skill Tagging')).toBeInTheDocument();
    expect(screen.getByText('Portfolio Analytics')).toBeInTheDocument();
  });

  it('renders highlights for Match Me', () => {
    render(<Features />);
    expect(screen.getByText('Algoritmo di Matching')).toBeInTheDocument();
    expect(screen.getByText('Skill Swaps')).toBeInTheDocument();
    expect(screen.getByText('Mappa Creativi')).toBeInTheDocument();
  });

  it('renders highlights for Project Rooms', () => {
    render(<Features />);
    expect(screen.getByText('Open Briefs')).toBeInTheDocument();
    expect(screen.getByText('Kanban Board')).toBeInTheDocument();
    expect(screen.getByText('Milestone Contracts')).toBeInTheDocument();
  });

  it('renders highlights for Co-Founder Mode', () => {
    render(<Features />);
    expect(screen.getByText('Profili Co-Founder')).toBeInTheDocument();
    expect(screen.getByText('Pitch Deck Sharing')).toBeInTheDocument();
    expect(screen.getByText('Equity Matching')).toBeInTheDocument();
  });

  it('renders highlights for Project Marketplace', () => {
    render(<Features />);
    expect(screen.getByText('Brief Retribuiti')).toBeInTheDocument();
    expect(screen.getByText('Tip Jar')).toBeInTheDocument();
    expect(screen.getByText('Revenue Sharing')).toBeInTheDocument();
  });

  it('renders exactly 6 feature cards', () => {
    render(<Features />);
    const cards = screen.getAllByRole('listitem');
    // 6 cards × 3 highlights each = 18 list items
    expect(cards).toHaveLength(18);
  });
});
