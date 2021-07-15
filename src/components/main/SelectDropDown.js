import React from 'react'

const SelectDropDown = ({ value, onChange, array, className, hideFirst }) => {

    return (
        <select className={className} value={value} onChange={(e) => {
            onChange(e.target.value)
        }}>
            {array.map((option, i) => (
                <option hidden={i === 0 && hideFirst === true ? true : false} key={i} value={option}>{option}</option>
            ))}
        </select>
    )
}

export default SelectDropDown
