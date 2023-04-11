import { useState } from "react";

function BookingForm(props) {

    function handleSubmit(e) {
        e.preventDefault()
        const newBooking = {
            playerOne: playerOne,
            playerTwo: playerTwo,
            game: game,
            table: table,
            startTime: startTime,
            hourTime: hourTime,
            day: weekday
        }
        props.setBookings((prevState) => [...prevState, newBooking])
    }

    function handleArmyChange(e, army) {
        if (army == 'one') {
            setArmyOne(e.target.value)
        } else {
            setArmyTwo(e.target.value)
        }
    }

    function handleGameChange(e) {
        setGame(e.target.value)
    }

    function handleTableChange(e) {
        setTable(e.target.value)
    }

    function handleNameOneChange(e) {
        setPlayerOne(e.target.value)
    }
    function handleNameTwoChange(e) {
        setPlayerTwo(e.target.value)
    }

    function handleStartTimeChange(e) {
        setStartTime(e.target.value)
    }
    function handleHourChange(e) {
        setHourTime(e.target.value)
    }

    function handleWeekdayChange(e) {
        setWeekday(e.target.value)
    }

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

    const tableList = ['Vinter', 'Öken', 'Träsk']
    const armyList = ['Tyranids', 'Blood Angels', 'Tau', 'Necrons']
    const games = ['40k', 'AoS']
    const timeIntervals = createTimeIntervals()
    const hourIntervals = ['2:00', '3:00', '4:00']
    const weekdays = props.weekdays

    const [playerOne, setPlayerOne] = useState('')
    const [playerTwo, setPlayerTwo] = useState('')
    const [armyOne, setArmyOne] = useState(armyList[0])
    const [armyTwo, setArmyTwo] = useState(armyList[0])
    const [game, setGame] = useState(games[0])
    const [table, setTable] = useState(tableList[0])
    const [startTime, setStartTime] = useState(timeIntervals[0])
    const [hourTime, setHourTime] = useState(hourIntervals[0])
    const [weekday, setWeekday] = useState(weekdays[0])

    return (
        <div className="BookingForm">

            <h2>BookingForm</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                Name:
                <input type="text" value={playerOne} onChange={(e) => handleNameOneChange(e)} required></input>
                {/**
                 
                 <select value={armyOne} onChange={(e) => handleArmyChange(e, 'one')}>
                     {armyList.map((e) =>
                         <option value={e}>{e}</option>
                     )}
                 </select>
                 
                 */}
                VS
                <input type="text" value={playerTwo} onChange={(e) => handleNameTwoChange(e)}></input>
                <select value={game} onChange={(e) => handleGameChange(e)}>
                    {games.map((e) =>
                        <option value={e}>{e}</option>
                    )}
                </select>
                <select value={table} onChange={(e) => handleTableChange(e)}>
                    {tableList.map((e) =>
                        <option value={e}>{e}</option>
                    )}
                </select>
                Starttid:
                <select value={startTime} onChange={(e) => handleStartTimeChange(e)} required>
                    <option value=''></option>
                    {timeIntervals.map((e) =>
                        <option value={e}>{e}</option>
                    )}
                </select>
                Tid:
                <select value={hourTime} onChange={(e) => handleHourChange(e)}>
                    {hourIntervals.map((e) =>
                        <option value={e}>{e}</option>
                    )}
                </select>
                Dag:
                <select value={weekday} onChange={(e) => handleWeekdayChange(e)}>
                    {weekdays.map((e) =>
                        <option value={e}>{e}</option>)}
                </select>

                <input type="submit" value="Confirm"></input>
            </form>
        </div>
    );
}

export default BookingForm;