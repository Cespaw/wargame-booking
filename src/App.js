import logo from './logo.svg';
import './App.css';
import WeekCalendar from './WeekCalendar';
import { useState, useEffect } from 'react';
import BookingForm from './BookingForm';

function App() {

  const weekdays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag']
  const monday = ['Måndag']
  const [bookings, setBookings] = useState([{}])

  return (
    <div>
      <>
        Current Bookings
        <div>
          {bookings.map((booking) =>
            <div>
              <>{booking.playerOne}</>
              <>{booking.playerTwo}</>
              <>{booking.game}</>
              <>{booking.table}</>
              <>{booking.startTime}</>
              <>{booking.hourTime}</>
              <>{booking.day}</>
            </div>)}
        </div>
      </>
      <BookingForm bookings={bookings} setBookings={setBookings} weekdays={weekdays}></BookingForm>
      <WeekCalendar className="WeekCalendar" days={weekdays} bookings={bookings}></WeekCalendar>
    </div>
  );
}

export default App;
