import logo from './logo.svg';
import './App.css';
import WeekCalendar from './WeekCalendar';
import { useState } from 'react';
import BookingForm from './BookingForm';

function App() {

  const [weekdays, setWeekdays] = useState(['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'])


  return (
    <div>
      <BookingForm></BookingForm>
      <WeekCalendar className="WeekCalendar" days={weekdays}></WeekCalendar>
    </div>
  );
}

export default App;
