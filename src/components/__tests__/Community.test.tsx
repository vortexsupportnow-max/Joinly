import { render, screen } from '@testing-library/react';
import Community from '../Community';

describe('Community', () => {
  it('renders without crashing', () => {
    const { container } = render(<Community />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders the section with id="community"', () => {
    const { container } = render(<Community />);
    const section = container.querySelector('#community');
    expect(section).toBeInTheDocument();
  });

  it('renders the section tag label', () => {
    render(<Community />);
    expect(screen.getByText('🌐 Community')).toBeInTheDocument();
  });

  it('renders the section heading', () => {
    render(<Community />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders the section description', () => {
    render(<Community />);
    expect(screen.getByText(/Weekly Challenges/i)).toBeInTheDocument();
  });

  it('renders all 6 circle names', () => {
    render(<Community />);
    expect(screen.getByText('#design')).toBeInTheDocument();
    expect(screen.getByText('#sviluppo-web')).toBeInTheDocument();
    expect(screen.getByText('#copywriting')).toBeInTheDocument();
    expect(screen.getByText('#musica')).toBeInTheDocument();
    expect(screen.getByText('#startup')).toBeInTheDocument();
    expect(screen.getByText('#fotografia')).toBeInTheDocument();
  });

  it('renders member counts for circles', () => {
    render(<Community />);
    expect(screen.getByText('1.2k membri')).toBeInTheDocument();
    expect(screen.getByText('2.1k membri')).toBeInTheDocument();
    expect(screen.getByText('890 membri')).toBeInTheDocument();
    expect(screen.getByText('670 membri')).toBeInTheDocument();
    expect(screen.getByText('1.5k membri')).toBeInTheDocument();
    expect(screen.getByText('940 membri')).toBeInTheDocument();
  });

  it('renders circle descriptions', () => {
    render(<Community />);
    expect(screen.getByText('UI/UX, branding, illustrazione')).toBeInTheDocument();
    expect(screen.getByText('Frontend, backend, fullstack')).toBeInTheDocument();
    expect(screen.getByText('Content, UX writing, SEO')).toBeInTheDocument();
    expect(screen.getByText('Produzione, sound design, jingle')).toBeInTheDocument();
    expect(screen.getByText('Founder, co-founder, MVP')).toBeInTheDocument();
    expect(screen.getByText('Brand photo, eventi, prodotti')).toBeInTheDocument();
  });

  it('renders circle emojis', () => {
    render(<Community />);
    // Some emojis appear both as circle icons and testimonial avatars, so use getAllByText
    expect(screen.getAllByText('🎨').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('💻').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('✍️').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('🎵').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('🚀').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('📸')).toBeInTheDocument();
  });

  it('renders the testimonials heading', () => {
    render(<Community />);
    expect(screen.getByText('Cosa dicono i beta tester')).toBeInTheDocument();
  });

  it('renders all 3 testimonial authors', () => {
    render(<Community />);
    expect(screen.getByText('Marta V.')).toBeInTheDocument();
    expect(screen.getByText('Luca B.')).toBeInTheDocument();
    expect(screen.getByText('Sofia T.')).toBeInTheDocument();
  });

  it('renders testimonial roles', () => {
    render(<Community />);
    expect(screen.getByText('UI Designer')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument();
    expect(screen.getByText('Brand Strategist')).toBeInTheDocument();
  });

  it('renders star ratings for testimonials', () => {
    render(<Community />);
    const stars = screen.getAllByText('★★★★★');
    expect(stars).toHaveLength(3);
  });

  it('renders testimonial quotes', () => {
    render(<Community />);
    expect(screen.getByText(/co-founder in 3 giorni/i)).toBeInTheDocument();
    expect(screen.getByText(/Open Briefs è rivoluzionario/i)).toBeInTheDocument();
    expect(screen.getByText(/altissimo livello/i)).toBeInTheDocument();
  });
});
