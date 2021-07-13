import React from 'react'

const SelectDropDown = ({ onChange, array, className, hideFirst, currentValue }) => {

    return (
        <select className={className} defaultValue={!!currentValue ? currentValue : ''} onChange={(e) => { onChange(e) }}>
            {array.map((option, i) => (
                <option hidden={i === 0 && hideFirst === true ? true : false} key={i} value={option}>{option}</option>
            ))}
        </select>
    )
}

export default SelectDropDown
