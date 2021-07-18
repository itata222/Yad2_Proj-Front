import React from 'react'

const SelectDropDown = ({ value, onChange, array, className, hideFirst, isInValid, step, setState }) => {
    return (
        <>
            <select className={!isInValid ? className : `${className} invalidSelect`} value={value} onChange={(e) => {
                onChange(e.target.value)
                if (step === 1) {
                    if (className === 'typeSelect') setState(false)
                    if (className === 'conditionSelect') setState(false)
                }
                else if (step === 2) {
                    setState(false)
                }
            }}>
                {array.map((option, i) => (
                    <option hidden={i === 0 && hideFirst === true ? true : false} key={i} value={option}>{option}</option>
                ))}
            </select>
            {isInValid && <div className="invalidMessage">שדה חובה</div>}
        </>
    )
}

export default SelectDropDown
