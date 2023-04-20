import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppRouting } from './AppRouting';

test('renders learn react link', () => {
  render(<AppRouting />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});