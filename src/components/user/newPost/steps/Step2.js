import StepButtons from '../StepButtons'
import React, { useState } from 'react'
import PropertyButton from '../PropertyButton';
import { nanoid } from 'nanoid';
import SelectDropDown from '../../../main/SelectDropDown';
import Step2Buttons from '../Step2Buttons';


const Step2 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {

    const [descriptionLength, setDescriptionLength] = useState(0);
    const propertiesText = ['מיזוג', 'ממ"ד', 'מחסן', 'דלתות פנדור', "ריהוט", 'גישה לנכים', "מעלית", "מזגן תדיראן", "משופצת", "מטבח כשר", "דוד שמש", "סורגים"];
    const roomsArray = ['בחירת מספר חדרים', '0', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '8', '9', '10', '11', '12']

    const countChars = (e) => {
        setDescriptionLength(e.target.value.length)
    }
    return (
        <div className='step2'>
            <div className="rooms">
                <label>מספר חדרים*</label>
                <SelectDropDown array={roomsArray} className='roomsSelect' hideFirst={true} />
            </div>
            <Step2Buttons className="parking" label="חניה" />
            <Step2Buttons className="balcony" label="מרפסת" />
            <div className="properties">
                <div className="header">מאפייני הנכס</div>
                <div className="property-buttons">
                    {
                        propertiesText.map((property, i) => (
                            <PropertyButton key={nanoid()} text={property} index={i} />
                        ))
                    }
                </div>
                <div className="description">
                    <div className="header">
                        מה חשוב לך שידעו על הנכס?
                    </div>
                    <div className="descriptionContainer">
                        <div>
                            <span>פרוט הנכס</span>
                            <span>{descriptionLength}/400</span>
                        </div>
                        <textarea onInput={countChars} maxLength="400" id="" cols="5" placeholder="זה המקום לתאר את הפרטים הבולטים, למשל, האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר, האווירה ברחוב וכו'" aria-label="שים לב, יש לך 400 תווים להקלדה"></textarea>
                    </div>
                </div>
            </div>
            <StepButtons setStepsDone={setStepsDone} setActiveStep={setActiveStep} stepsDone={stepsDone} activeStep={activeStep} />
        </div>
    )
}

export default Step2
