import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the yoga studio homepage', () => {
  render(<App />);
  expect(screen.getByText(/Finde deine/i)).toBeInTheDocument();
});
