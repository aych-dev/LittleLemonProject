import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

test('renders menu section with correct content', () => {
  const { getByText } = render(<Menu />);
  const menuText = getByText(/Indulge in the flavors of the Mediterranean/i);
  expect(menuText).toBeInTheDocument();
});
