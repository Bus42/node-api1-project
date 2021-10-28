import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const appWrapper = screen.getByTestId(/app-wrapper/i);
  expect(appWrapper).toBeInTheDocument();
});
