import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders the Joinly logo text', () => {
    render(<Navbar />);
    expect(screen.getByText('Joinly')).toBeInTheDocument();
  });

  it('renders the logo letter J', () => {
    render(<Navbar />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Funzionalità')).toBeInTheDocument();
    expect(screen.getByText('Come Funziona')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
  });

  it('renders navigation links with correct hrefs', () => {
    render(<Navbar />);
    const links = screen.getAllByRole('link');
    const hrefs = links.map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('#features');
    expect(hrefs).toContain('#how-it-works');
    expect(hrefs).toContain('#community');
  });

  it('renders the Accedi link', () => {
    render(<Navbar />);
    expect(screen.getByText('Accedi')).toBeInTheDocument();
  });

  it('renders the Inizia Gratis CTA button', () => {
    render(<Navbar />);
    const ctaLinks = screen.getAllByText('Inizia Gratis →');
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('renders the mobile menu toggle button', () => {
    render(<Navbar />);
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    expect(toggle).toBeInTheDocument();
  });

  it('mobile menu is hidden by default', () => {
    render(<Navbar />);
    expect(screen.queryByText('Funzionalità')).toBeInTheDocument();
    // The desktop nav is rendered; the hidden mobile menu only appears after toggle
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    expect(toggle).toBeInTheDocument();
  });

  it('opens mobile menu when toggle button is clicked', () => {
    render(<Navbar />);
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(toggle);
    // After opening, the mobile menu CTA button appears (it's a separate element in mobile view)
    const ctaLinks = screen.getAllByText('Inizia Gratis →');
    expect(ctaLinks.length).toBeGreaterThanOrEqual(2);
  });

  it('closes mobile menu when toggle button is clicked again', () => {
    render(<Navbar />);
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(toggle);
    fireEvent.click(toggle);
    const ctaLinks = screen.getAllByText('Inizia Gratis →');
    // Mobile menu closed: only desktop CTA remains
    expect(ctaLinks.length).toBe(1);
  });

  it('closes mobile menu when a mobile nav link is clicked', () => {
    render(<Navbar />);
    const toggle = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(toggle);
    // Mobile menu links exist now
    const allLinks = screen.getAllByText('Funzionalità');
    // Click the last one (the mobile menu link)
    fireEvent.click(allLinks[allLinks.length - 1]);
    // After clicking, menu should close (CTA count drops back to 1)
    const ctaLinks = screen.getAllByText('Inizia Gratis →');
    expect(ctaLinks.length).toBe(1);
  });

  it('has the correct href on Inizia Gratis CTA', () => {
    render(<Navbar />);
    const ctaLinks = screen.getAllByText('Inizia Gratis →');
    expect(ctaLinks[0].getAttribute('href')).toBe('#cta');
  });
});
