import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders all components in App', () => {
  const { getByText, getByAltText } = render(<App />);

  const headerElement = getByText(/Welcome to Little Lemon/i);
  expect(headerElement).toBeInTheDocument();

  const bannerImage = getByAltText(/Little Lemon Banner/i);
  expect(bannerImage).toBeInTheDocument();

  const menuText = getByText(/Indulge in the flavors of the Mediterranean/i);
  expect(menuText).toBeInTheDocument();

  const aboutText = getByText(
    /Little Lemon is a family-owned Mediterranean restaurant/i
  );
  expect(aboutText).toBeInTheDocument();

  const contactText = getByText(/We'd love to hear from you!/i);
  expect(contactText).toBeInTheDocument();

  const reservationForm = getByText(/Make a Reservation/i);
  expect(reservationForm).toBeInTheDocument();
});
