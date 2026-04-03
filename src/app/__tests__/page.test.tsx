import { render, screen } from '@testing-library/react';
import Home from '../page';

// Mock all child components to isolate the page composition test
jest.mock('@/components/Navbar', () => () => <div data-testid="navbar" />);
jest.mock('@/components/Hero', () => () => <div data-testid="hero" />);
jest.mock('@/components/Features', () => () => <div data-testid="features" />);
jest.mock('@/components/HowItWorks', () => () => <div data-testid="how-it-works" />);
jest.mock('@/components/Slogans', () => () => <div data-testid="slogans" />);
jest.mock('@/components/Community', () => () => <div data-testid="community" />);
jest.mock('@/components/CTA', () => () => <div data-testid="cta" />);
jest.mock('@/components/Footer', () => () => <div data-testid="footer" />);

describe('Home page', () => {
  it('renders without crashing', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders a main element', () => {
    render(<Home />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders the Navbar component', () => {
    render(<Home />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('renders the Hero component', () => {
    render(<Home />);
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });

  it('renders the Features component', () => {
    render(<Home />);
    expect(screen.getByTestId('features')).toBeInTheDocument();
  });

  it('renders the HowItWorks component', () => {
    render(<Home />);
    expect(screen.getByTestId('how-it-works')).toBeInTheDocument();
  });

  it('renders the Slogans component', () => {
    render(<Home />);
    expect(screen.getByTestId('slogans')).toBeInTheDocument();
  });

  it('renders the Community component', () => {
    render(<Home />);
    expect(screen.getByTestId('community')).toBeInTheDocument();
  });

  it('renders the CTA component', () => {
    render(<Home />);
    expect(screen.getByTestId('cta')).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(<Home />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('main element has bg-brand-dark class', () => {
    render(<Home />);
    const main = screen.getByRole('main');
    expect(main).toHaveClass('bg-brand-dark');
  });
});
