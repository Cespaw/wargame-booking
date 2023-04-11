function TimeSlot(props) {

    function handleClick(e) {
        e.preventDefault()
        console.log(props.time)
    }

    return (
        <div onClick={(e) => handleClick(e)}>
            {props.time}
        </div>
    );
}

export default TimeSlot;