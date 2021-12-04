import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the app', () => {
  render(<App />);
  const scalarElement = screen.getByText(/scalar/i);
  expect(scalarElement).toBeInTheDocument();
});
