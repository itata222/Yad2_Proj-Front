import React from 'react'

const SelectDropDown = ({ array, className, hideFirst }) => {
    return (
        <select className={className}>
            {array.map((option, i) => (
                <option hidden={i === 0 && hideFirst === true ? true : false} key={i} value={option}>{option}</option>
            ))}
        </select>
    )
}

export default SelectDropDown
