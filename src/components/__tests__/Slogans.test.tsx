import { render, screen } from '@testing-library/react';
import Slogans from '../Slogans';

describe('Slogans', () => {
  it('renders without crashing', () => {
    const { container } = render(<Slogans />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders the section with id="slogans"', () => {
    const { container } = render(<Slogans />);
    const section = container.querySelector('#slogans');
    expect(section).toBeInTheDocument();
  });

  it('renders the section tag label', () => {
    render(<Slogans />);
    expect(screen.getByText('💡 Brand Voice')).toBeInTheDocument();
  });

  it('renders the section heading', () => {
    render(<Slogans />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders the section description', () => {
    render(<Slogans />);
    expect(screen.getByText(/Otto slogan testati/i)).toBeInTheDocument();
  });

  it('renders all 8 slogan texts', () => {
    render(<Slogans />);
    expect(screen.getByText(/Your skills\. Your story\. Your Joinly\./i)).toBeInTheDocument();
    expect(screen.getByText(/Stop scrolling\. Start building\./i)).toBeInTheDocument();
    expect(screen.getByText(/Find your crew\. Build your dream\./i)).toBeInTheDocument();
    expect(screen.getByText(/The platform that works like you do/i)).toBeInTheDocument();
    expect(screen.getByText(/Where freelancers become founders\./i)).toBeInTheDocument();
    expect(screen.getByText(/Join\. Create\. Grow\./i)).toBeInTheDocument();
    expect(screen.getByText(/Your next big project starts with a connection\./i)).toBeInTheDocument();
    expect(screen.getByText(/Not just a portfolio\. A launchpad\./i)).toBeInTheDocument();
  });

  it('renders all 8 tone badges', () => {
    render(<Slogans />);
    expect(screen.getByText('Personale')).toBeInTheDocument();
    expect(screen.getByText('Motivante')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
    expect(screen.getByText('Differenziante')).toBeInTheDocument();
    expect(screen.getByText('Aspirazionale')).toBeInTheDocument();
    expect(screen.getByText('Minimalista')).toBeInTheDocument();
    expect(screen.getByText('FOMO positivo')).toBeInTheDocument();
    expect(screen.getByText('Futuro')).toBeInTheDocument();
  });

  it('renders 8 numbered indices', () => {
    render(<Slogans />);
    expect(screen.getByText('#01')).toBeInTheDocument();
    expect(screen.getByText('#02')).toBeInTheDocument();
    expect(screen.getByText('#03')).toBeInTheDocument();
    expect(screen.getByText('#04')).toBeInTheDocument();
    expect(screen.getByText('#05')).toBeInTheDocument();
    expect(screen.getByText('#06')).toBeInTheDocument();
    expect(screen.getByText('#07')).toBeInTheDocument();
    expect(screen.getByText('#08')).toBeInTheDocument();
  });

  it('renders exactly 8 blockquote elements', () => {
    const { container } = render(<Slogans />);
    const blockquotes = container.querySelectorAll('blockquote');
    expect(blockquotes).toHaveLength(8);
  });
});
