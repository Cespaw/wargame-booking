import WeekDay from "./WeekDay";

function WeekCalendar({ days }) {

  days.forEach(e => {
    console.log(e)
  })

  console.log('HELLO FROM CALENDAR')

  return (
    <div className="WeekCalendar">

      {days.map((e) =>
        <WeekDay day={e} key={e}></WeekDay>
      )}

    </div>
  );
}

export default WeekCalendar;
