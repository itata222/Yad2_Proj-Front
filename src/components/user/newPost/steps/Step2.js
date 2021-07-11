import StepButtons from '../StepButtons'
import React, { useState } from 'react'

const Step2 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {

    const [descriptionLength, setDescriptionLength] = useState(0);
    const [button1Selected, setButton1Selected] = useState(false);
    const [button2Selected, setButton2Selected] = useState(false);
    const buttonClicked = (buttonNumber) => {
        switch (buttonNumber) {
            case 1:
                setButton1Selected(!button1Selected)
                break;
            default:
                setButton2Selected(!button2Selected)
                break;
        }
    }
    const countChars = (e) => {
        setDescriptionLength(e.target.value.length)
    }
    return (
        <div className='step2'>
            <div className="properties">
                <div className="header">מאפייני הנכס</div>
                <div className="property-buttons">
                    <button onClick={() => buttonClicked(1)} className={button1Selected ? "buttonSelected" : ''}>
                        <img src="https://img.icons8.com/ios/24/000000/garage-closed.png" alt="warehouse" />
                        <span>מחסן</span>
                    </button>
                    <button onClick={() => buttonClicked(2)} className={button2Selected ? "buttonSelected" : ''}>
                        <img src="https://img.icons8.com/material-rounded/24/000000/accessibility1.png" alt="accessiblity" />
                        <span>גישה לנכים</span>
                    </button>
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
