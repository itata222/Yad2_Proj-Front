import { nanoid } from 'nanoid';
import React, { useState } from 'react'

const DropDownCheckBox = ({ className, label, array }) => {
    const [ddOpened, setDdOpened] = useState(false);
    const [selections, setSelections] = useState([]);

    const optionClicked = (val) => {
        const filteredSelections = selections.filter(selection => selection !== val);
        if (filteredSelections.length !== selections.length) {
            setSelections(filteredSelections)
        }
        else {
            setSelections([...selections, val])
        }
    }

    return (
        <div className={className}>
            <div className="headerSelect">
                <div>
                    <input type="checkbox" />
                    <label>{label}</label>
                    <span>{selections.length > 0 ? `נבחרו ${selections.length} סוגים` : ''}</span>
                </div>
                <i className="fas fa-chevron-down" onClick={() => setDdOpened(!ddOpened)}></i>
            </div>
            {
                ddOpened &&
                <div className="checkBoxDDarray">
                    {array.map((option) => (
                        <div key={nanoid()} className="checkBoxOption">
                            <input type="checkbox" value={option} onClick={() => optionClicked(option)} />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default DropDownCheckBox
