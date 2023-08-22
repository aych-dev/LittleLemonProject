import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

test('renders contact section with correct content', () => {
  const { getByText } = render(<Contact />);
  const contactText = getByText(/We'd love to hear from you!/i);
  expect(contactText).toBeInTheDocument();
});
