import TimeSlot from "./TimeSlot"

function WeekDay(props) {

  function createTimeIntervals() {
    let hour = 10
    const timeArray = []
    let minute = ''
    let time = ''

    for (let i = 0; i < 27; i++) {

      if (i % 2 == 0) {
        minute = '00'
      } else {
        minute = '30'
      }

      time = hour.toString() + ':' + minute
      timeArray.push(time)

      if (i % 2 != 0) {
        hour = hour + 1
      }
    }
    return timeArray
  }



  const timeArray = createTimeIntervals()
  const list = document.getElementById('')

  return (
    <div className="WeekDay">
      <h2>{props.date}</h2>
      <h1>{props.day}</h1>
      <div className="TimeSlots">

        {timeArray.map((item) =>
          <TimeSlot time={item} id={item}></TimeSlot>
        )}

      </div>
    </div>
  );
}

export default WeekDay;
