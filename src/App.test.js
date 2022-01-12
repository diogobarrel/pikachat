import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react Login page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
