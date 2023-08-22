import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders header with correct title', () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/Welcome to Little Lemon/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  const { getByText } = render(<Header />);
  const menuLink = getByText(/Menu/i);
  const aboutLink = getByText(/About Us/i);
  const contactLink = getByText(/Contact/i);

  expect(menuLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
