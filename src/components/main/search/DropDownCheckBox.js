import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import CheckBox from '../../CheckBox';

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
                    <CheckBox onClick={() => console.log('great')} />
                    <label>{label}</label>
                    <span>{selections.length > 0 ? `נבחרו ${selections.length} סוגים` : ''}</span>
                </div>
                <i className="fas fa-chevron-down" onClick={() => setDdOpened(!ddOpened)}></i>
            </div>
            {
                ddOpened &&
                <div className="checkBoxDDarray">
                    {array.map((option, i) => (
                        <div key={i} className="checkBoxOption">
                            <CheckBox onClick={() => console.log('great')} />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default DropDownCheckBox
