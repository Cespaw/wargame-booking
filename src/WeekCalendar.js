import WeekDay from "./WeekDay";
import { useState, useEffect } from "react";

function WeekCalendar(props) {

  const [currentDate, setCurrentDate] = useState('');
  const [currentWeekDays, setCurrentWeekDays] = useState([]);
  const [currentWeekNumber, setCurrentWeekNumber] = useState('')
  const [weekOffSet, setWeekOffSet] = useState(0)
  const index = [0, 1, 2, 3, 4, 5, 6]

  useEffect(() => {
    if (currentWeekNumber === '') {

      const today = new Date();
      const weekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);
      const weekEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 7);

      if (today.getDay() == 0) {
        setCurrentWeekNumber(Math.floor(
          ((today.getTime() - new Date(today.getFullYear(), 0, 1).getTime()) / 86400000 + 1) / 7
        ) + 1)

      } else {
        setCurrentWeekNumber(Math.floor(
          ((today.getTime() - new Date(today.getFullYear(), 0, 1).getTime()) / 86400000 + 1) / 7
        ))
      }
      setCurrentDate(today.toLocaleDateString('sv-SE'));
      setCurrentWeekDays(getDatesOfWeek(weekStart, weekEnd));
    } else {

      const newToday = new Date()
      var nextWeek = new Date()

      nextWeek.setDate(newToday.getDate() + 7 * (weekOffSet))

      const weekStart = new Date(nextWeek.getFullYear(), nextWeek.getMonth(), nextWeek.getDate() - nextWeek.getDay() + 1);
      const weekEnd = new Date(nextWeek.getFullYear(), nextWeek.getMonth(), nextWeek.getDate() - nextWeek.getDay() + 7);

      setCurrentWeekDays(getDatesOfWeek(weekStart, weekEnd));
    }
  }, [currentWeekNumber]);

  const getDatesOfWeek = (startDate, endDate) => {
    const dates = [];
    let currentdate = startDate;

    console.log('currentdate: ' + currentdate + ' endDate: ' + endDate)

    //TODO: if its sunday aka (day.getDay == 0) => currentdate -= 7 and enddate -= 7

    while (currentdate <= endDate) {
      dates.push(currentdate.toLocaleDateString('sv-SE'));
      currentdate = new Date(currentdate.getFullYear(), currentdate.getMonth(), currentdate.getDate() + 1);
    }
    return dates;
  };

  function handleWeekChange(direction) {
    if (direction == 'forward') {
      setWeekOffSet((prevValue) => prevValue + 1)
      setCurrentWeekNumber((prevValue) => (prevValue % 52 + 1))
    } else {
      setWeekOffSet((prevValue) => prevValue - 1)
      setCurrentWeekNumber((prevValue) => (prevValue % 52 - 1))
    }
  }

  return (
    <>
      <div className="WeekInfo">
        <div>Dagens datum: {currentDate}</div>
        <input value='Föregående vecka' type="submit" onClick={(e) => handleWeekChange('back')}></input>
        <div>Vecka {currentWeekNumber}</div>
        <input value='Nästa vecka' type="submit" onClick={(e) => handleWeekChange('forward')}></input>
      </div>

      <div className="WeekCalendar">
        {props.days.map((e, index) =>
          <WeekDay day={e} key={e} bookings={props.bookings} date={currentWeekDays[index]}></WeekDay>
        )}
      </div >
    </>
  );
}

export default WeekCalendar;
