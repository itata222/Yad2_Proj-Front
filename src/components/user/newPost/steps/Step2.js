import StepButtons from '../StepButtons'
import React, { useContext, useEffect, useState } from 'react'
import PropertyButton from '../PropertyButton';
import SelectDropDown from '../../../main/SelectDropDown';
import Step2Buttons from '../Step2Buttons';
import { PostContext } from '../../../../contexts/postContext';
import { updateBalconyAction, updateParkingAction, updateRoomsAction } from '../../../../actions/postActions';


const Step2 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    const { postData, dispatchPostData } = useContext(PostContext);
    const [descriptionLength, setDescriptionLength] = useState(0);
    const [rooms, setRooms] = useState(-1);
    const [parking, setParking] = useState(-1);
    const [balcony, setBalcony] = useState(-1);
    const propertiesText = ['מיזוג', 'ממ"ד', 'מחסן', 'דלתות פנדור', "ריהוט", 'גישה לנכים', "מעלית", "מזגן תדיראן", "משופצת", "מטבח כשר", "דוד שמש", "סורגים"];
    const roomsArray = ['בחירת מספר חדרים', '0', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '8', '9', '10', '11', '12']

    const countChars = (e) => {
        setDescriptionLength(e.target.value.length)
    }

    const isStepInValidToContinue = () => {
        return postData.rooms === -1
    }

    console.log(postData)

    return (
        <div className='step2'>
            <div className="rooms">
                <label>מספר חדרים*</label>
                <SelectDropDown
                    value={postData.rooms || rooms}
                    onChange={(value) => {
                        setRooms(value)
                        dispatchPostData(updateRoomsAction(value))
                    }}
                    array={roomsArray}
                    className='roomsSelect'
                    hideFirst={true} />
            </div>
            <Step2Buttons
                value={postData.parking || parking}
                className="parking"
                label="חניה"
                onClick={(value) => {
                    setParking(value)
                    dispatchPostData(updateParkingAction(value))
                }} />
            <Step2Buttons className="balcony" label="מרפסת" onClick={(value) => {
                dispatchPostData(updateBalconyAction(value))
            }} />
            <div className="properties">
                <div className="header">מאפייני הנכס</div>
                <div className="property-buttons">
                    {
                        propertiesText.map((property, i) => (
                            <PropertyButton key={i} text={property} index={i} />
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
                        <textarea onInput={countChars} maxLength="400" id="" cols="5" placeholder="זה המקום לתאר את הפרטים הבולטים, למשל, האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר, האווירה ברחוב וכו'" aria-label="שים לב, יש לך 400 תווים להקלדה" onBlur={(e) => dispatchPostData(updateDescriptionAction(e.target.value.trim()))}></textarea>
                    </div>
                </div>
            </div>
            <StepButtons isStepInValidToContinue={isStepInValidToContinue} setStepsDone={setStepsDone} setActiveStep={setActiveStep} stepsDone={stepsDone} activeStep={activeStep} />
        </div>
    )
}

export default Step2
