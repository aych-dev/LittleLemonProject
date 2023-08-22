import React from 'react';
import { render } from '@testing-library/react';
import Banner from './Banner';

test('renders banner image', () => {
  const { getByAltText } = render(<Banner />);
  const bannerImage = getByAltText(/Little Lemon Banner/i);
  expect(bannerImage).toBeInTheDocument();
});
