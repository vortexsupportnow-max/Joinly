import { render, screen, fireEvent } from '@testing-library/react';
import CTA from '../CTA';

describe('CTA', () => {
  it('renders the section with id="cta"', () => {
    const { container } = render(<CTA />);
    const section = container.querySelector('#cta');
    expect(section).toBeInTheDocument();
  });

  it('renders the main heading', () => {
    render(<CTA />);
    expect(screen.getByText(/Pronto a far decollare/i)).toBeInTheDocument();
  });

  it('renders the gradient heading text', () => {
    render(<CTA />);
    expect(screen.getByText(/la tua carriera/i)).toBeInTheDocument();
  });

  it('renders the descriptive paragraph', () => {
    render(<CTA />);
    expect(screen.getByText(/lista d'attesa di Joinly/i)).toBeInTheDocument();
  });

  it('renders the email input field', () => {
    render(<CTA />);
    const emailInput = screen.getByPlaceholderText('La tua email...');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('renders the submit button', () => {
    render(<CTA />);
    expect(screen.getByRole('button', { name: /accesso anticipato/i })).toBeInTheDocument();
  });

  it('submit button has type="submit"', () => {
    render(<CTA />);
    const btn = screen.getByRole('button', { name: /accesso anticipato/i });
    expect(btn).toHaveAttribute('type', 'submit');
  });

  it('email input accepts typed text', () => {
    render(<CTA />);
    const emailInput = screen.getByPlaceholderText('La tua email...') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  it('form submission is prevented by default handler', () => {
    render(<CTA />);
    const form = screen.getByRole('button', { name: /accesso anticipato/i }).closest('form');
    expect(form).toBeInTheDocument();
    // Should not throw when submitted
    fireEvent.submit(form!);
  });

  it('renders all early access feature badges', () => {
    render(<CTA />);
    expect(screen.getByText('✓ Portfolio illimitato')).toBeInTheDocument();
    expect(screen.getByText('✓ Accesso a tutti i Circles')).toBeInTheDocument();
    expect(screen.getByText('✓ 3 mesi Joinly Pro gratis')).toBeInTheDocument();
    expect(screen.getByText('✓ Badge "Early Adopter"')).toBeInTheDocument();
  });

  it('renders the disclaimer text', () => {
    render(<CTA />);
    expect(screen.getByText(/Nessuna carta di credito richiesta/i)).toBeInTheDocument();
  });

  it('renders the rocket emoji', () => {
    render(<CTA />);
    expect(screen.getByText('🚀')).toBeInTheDocument();
  });
});
