import { render, screen } from '@testing-library/react';
import HowItWorks from '../HowItWorks';

describe('HowItWorks', () => {
  it('renders without crashing', () => {
    const { container } = render(<HowItWorks />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders the section with id="how-it-works"', () => {
    const { container } = render(<HowItWorks />);
    const section = container.querySelector('#how-it-works');
    expect(section).toBeInTheDocument();
  });

  it('renders the section tag label', () => {
    render(<HowItWorks />);
    expect(screen.getByText('🗺️ Come Funziona')).toBeInTheDocument();
  });

  it('renders the section heading', () => {
    render(<HowItWorks />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders "in 4 passi" in the heading', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/in 4 passi/i)).toBeInTheDocument();
  });

  it('renders the section description', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/intuitivo/i)).toBeInTheDocument();
  });

  it('renders all 4 step numbers', () => {
    render(<HowItWorks />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });

  it('renders all 4 step titles', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Crea il tuo Profilo')).toBeInTheDocument();
    expect(screen.getByText('Connettiti & Fatti Trovare')).toBeInTheDocument();
    expect(screen.getByText('Collabora su Progetti Reali')).toBeInTheDocument();
    expect(screen.getByText('Cresci & Monetizza')).toBeInTheDocument();
  });

  it('renders all 4 step emojis', () => {
    render(<HowItWorks />);
    expect(screen.getByText('👤')).toBeInTheDocument();
    expect(screen.getByText('🔗')).toBeInTheDocument();
    expect(screen.getByText('🚀')).toBeInTheDocument();
    expect(screen.getByText('📈')).toBeInTheDocument();
  });

  it('renders the step 1 description', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/portfolio dinamico/i)).toBeInTheDocument();
  });

  it('renders the step 2 description mentioning matching', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/algoritmo di matching/i)).toBeInTheDocument();
  });

  it('renders the step 3 description mentioning Open Brief', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/Open Brief/i)).toBeInTheDocument();
  });

  it('renders the step 4 description mentioning Marketplace', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/Marketplace/i)).toBeInTheDocument();
  });
});
