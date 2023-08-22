import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('renders about section with correct content', () => {
  const { getByText } = render(<About />);
  const aboutText = getByText(
    /Little Lemon is a family-owned Mediterranean restaurant/i
  );
  expect(aboutText).toBeInTheDocument();
});
