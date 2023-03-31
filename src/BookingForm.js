import { useState } from "react";

function BookingForm() {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(playerOne + playerTwo + armyOne + armyTwo + table + ' ' + startTime + ' ' + endTime)
    }

    function handleArmyChange(e, army) {
        if (army == 'one') {
            setArmyOne(e.target.value)
        } else {
            setArmyTwo(e.target.value)
        }
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
    function handleEndTimeChange(e) {
        setEndTime(e.target.value)
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

            if(i % 2 != 0){
                hour = hour + 1
            }
        }
        return timeArray
    }

    const [playerOne, setPlayerOne] = useState('')
    const [playerTwo, setPlayerTwo] = useState('')
    const [armyOne, setArmyOne] = useState('')
    const [armyTwo, setArmyTwo] = useState('')
    const [table, setTable] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    const tableList = ['Vinter', 'Öken', 'Träsk']
    const armyList = ['Tyranids', 'Blood Angels', 'Tau', 'Necrons']
    const timeIntervals = createTimeIntervals()

    return (
        <div className="BookingForm">

            <h2>BookingForm</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                Name:
                <input type="text" value={playerOne} onChange={(e) => handleNameOneChange(e)}></input>
                <select value={armyOne} onChange={(e) => handleArmyChange(e, 'one')}>
                    {armyList.map((e) =>
                        <option value={e}>{e}</option>
                    )}
                </select>
                VS
                <input type="text" value={playerTwo} onChange={(e) => handleNameTwoChange(e)}></input>
                <select value={armyTwo} onChange={(e) => handleArmyChange(e, 'two')}>
                    {armyList.map((e) =>
                        <option value={e}>{e}</option>
                    )}
                </select>
                <select value={table} onChange={(e) => handleTableChange(e)}>
                    {tableList.map((e) =>
                        <option value={e}>{e}</option>
                    )}
                </select>
                Starttid:
                <select value={startTime} onChange={(e) => handleStartTimeChange(e)}>
                    {timeIntervals.map((e) =>
                        <option value={e}>{e}</option>
                    )}
                </select>
                Sluttid:
                <select value={endTime} onChange={(e) => handleEndTimeChange(e)}>
                    {timeIntervals.map((e) =>
                        <option value={e}>{e}</option>
                    )}
                </select>

                <input type="submit" value="Confirm"></input>
            </form>
        </div>
    );
}

export default BookingForm;