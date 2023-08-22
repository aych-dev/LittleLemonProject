import React, { useState } from 'react';

function ReservationForm() {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Simulating a confirmation
    setConfirmation('Booking confirmed! We look forward to serving you.');
  };

  return (
    <section id='reservation'>
      <h2>Make a Reservation</h2>
      <form onSubmit={handleBookingSubmit}>
        <label htmlFor='bookingDate'>Date:</label>
        <input
          type='date'
          id='bookingDate'
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          required
        />
        <label htmlFor='bookingTime'>Time:</label>
        <input
          type='time'
          id='bookingTime'
          value={bookingTime}
          onChange={(e) => setBookingTime(e.target.value)}
          required
        />
        <button type='submit'>Book Now</button>
      </form>
      <p>{confirmation}</p>
    </section>
  );
}

export default ReservationForm;
