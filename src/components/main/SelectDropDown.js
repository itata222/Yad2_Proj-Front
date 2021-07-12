import React from 'react'

const SelectDropDown = ({ setRoomsFromVal = undefined, setRoomsToVal = undefined, array, className, hideFirst }) => {
    const updateRoomsvalues = (e) => {
        if (!!setRoomsFromVal || !!setRoomsToVal)
            if (array[0] === 'מ-')
                setRoomsFromVal(e.target.value)
            else
                setRoomsToVal(e.target.value)
    }
    return (
        <select className={className} onChange={updateRoomsvalues}>
            {array.map((option, i) => (
                <option hidden={i === 0 && hideFirst === true ? true : false} key={i} value={option}>{option}</option>
            ))}
        </select>
    )
}

export default SelectDropDown
