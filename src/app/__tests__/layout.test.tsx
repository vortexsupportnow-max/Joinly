import { render, screen } from '@testing-library/react';
import RootLayout from '../layout';

describe('RootLayout', () => {
  it('renders children', () => {
    render(
      <RootLayout>
        <div data-testid="child-content">Test child</div>
      </RootLayout>
    );
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByText('Test child')).toBeInTheDocument();
  });

  it('renders an html element with lang="it"', () => {
    const { container } = render(
      <RootLayout>
        <span>content</span>
      </RootLayout>
    );
    const html = container.querySelector('html');
    expect(html).toHaveAttribute('lang', 'it');
  });

  it('renders a body element wrapping children', () => {
    const { container } = render(
      <RootLayout>
        <p>body content</p>
      </RootLayout>
    );
    const body = container.querySelector('body');
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent('body content');
  });

  it('renders multiple children correctly', () => {
    render(
      <RootLayout>
        <div data-testid="first">First</div>
        <div data-testid="second">Second</div>
      </RootLayout>
    );
    expect(screen.getByTestId('first')).toBeInTheDocument();
    expect(screen.getByTestId('second')).toBeInTheDocument();
  });
});
