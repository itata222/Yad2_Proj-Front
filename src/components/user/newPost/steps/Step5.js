import StepButtons from '../StepButtons'
import React, { useContext, useEffect, useState } from 'react'
import SelectDropDown from '../../../main/SelectDropDown'
import CheckBox from '../../../CheckBox';
import { PostContext } from '../../../../contexts/postContext';
import { updateContactEmailAction, updateContactNameAction, updateContactPhoneAction } from '../../../../actions/postActions';

const Step5 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {

    const { postData, dispatchPostData } = useContext(PostContext);
    const prePhoneNumbersArray = ['050', '051', '052', '053', '054', '055', '058'];
    const [addOtherPerson, setAddOtherPerson] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [prePhoneNumber, setPrePhoneNumber] = useState('');
    const [readContract, setReadContract] = useState(false);
    const [virtualNumber, setVirtualNumber] = useState(false);
    const [weekend, setWeekend] = useState(false);
    const [mailNotification, setMailNotification] = useState(false);
    console.log(postData)

    useEffect(() => {
        if (prePhoneNumber.length > 0 && phoneNumber.length > 0) {
            dispatchPostData(updateContactPhoneAction(prePhoneNumber + phoneNumber))
        }
    }, [prePhoneNumber, phoneNumber]);

    const isStepInValidToContinue = () => {
        return postData.contactName === '' || postData.contactPhone === "" || !readContract;
    }

    return (
        <div className="step5">
            <h4>רגע לפני שמפרסמים את המודעה, נבדוק שפרטי הקשר נכונים</h4>
            <div className="personalInfo">
                <div>
                    <div>
                        <label>שם איש קשר*</label>
                        <input
                            value={postData.contactName}
                            onChange={(e) => dispatchPostData(updateContactNameAction(e.target.value))}
                            type="text"
                            onBlur={(e) => dispatchPostData(updateContactNameAction(e.target.value))} />
                    </div>
                    <div>
                        <label>טלפון ראשי*</label>
                        <input
                            value={postData.contactPhone !== '' ? postData.contactPhone.substr(3) : phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type="number"
                            onBlur={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div>
                        <label></label>
                        <SelectDropDown
                            value={postData.contactPhone !== '' ? postData.contactPhone.substr(0, 3) : prePhoneNumber}
                            array={prePhoneNumbersArray}
                            className="phoneSelect" hideFirst={false}
                            onChange={(value) => setPrePhoneNumber(value)} />
                    </div>
                </div>
                {addOtherPerson && <div>
                    <div>
                        <label>איש קשר נוסף</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>טלפון נוסף</label>
                        <input type="number" />
                    </div>
                    <div>
                        <SelectDropDown
                            array={prePhoneNumbersArray}
                            className="phoneSelect"
                            hideFirst={false} />
                    </div>
                    <div className="trash" onClick={() => setAddOtherPerson(false)}>
                        <img src="https://img.icons8.com/material-outlined/24/000000/trash.png" alt="trash" />
                        <span>ביטול</span>
                    </div>
                </div>}
            </div>
            <div className="personalInfoOptions">
                {!addOtherPerson && <button onClick={() => setAddOtherPerson(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="24" height="24"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e67e22"><path d="M86,14.33333c-39.49552,0 -71.66667,32.17115 -71.66667,71.66667c0,39.49552 32.17115,71.66667 71.66667,71.66667c39.49552,0 71.66667,-32.17115 71.66667,-71.66667c0,-39.49552 -32.17115,-71.66667 -71.66667,-71.66667zM86,28.66667c31.74921,0 57.33333,25.58412 57.33333,57.33333c0,31.74921 -25.58412,57.33333 -57.33333,57.33333c-31.74921,0 -57.33333,-25.58412 -57.33333,-57.33333c0,-31.74921 25.58412,-57.33333 57.33333,-57.33333zM78.83333,50.16667v28.66667h-28.66667v14.33333h28.66667v28.66667h14.33333v-28.66667h28.66667v-14.33333h-28.66667v-28.66667z"></path></g></g></svg>
                    <span>הוספת איש קשר נוסף</span>
                </button>}
                <div>
                    <CheckBox
                        value={virtualNumber}
                        onClick={() => setVirtualNumber(!virtualNumber)} />
                    <label>אני רוצה שיופיע מספר וירטואלי במודעה שלי</label>
                    <img src="https://my.yad2.co.il/newOrder/images/publish/siman.png" alt="?" />
                </div>
                <div>
                    <CheckBox
                        value={weekend}
                        onClick={() => setWeekend(!weekend)} />
                    <label>אני רוצה לקבל שיחות מגולשי האתר גם בסופ"ש</label>
                    <img src="https://my.yad2.co.il/newOrder/images/publish/siman.png" alt="?" />
                </div>
                <div className="email">
                    <label>אימייל</label>
                    <input
                        value={postData.contactEmail}
                        onChange={(e) => dispatchPostData(updateContactEmailAction(e.target.value.trim()))}
                        className='emailInput'
                        onBlur={(e) => dispatchPostData(updateContactEmailAction(e.target.value.trim()))} />
                </div>
                <div className="readContract">
                    <CheckBox
                        value={readContract}
                        onClick={(isActive) => {
                            setReadContract(!isActive)
                        }} />
                    <label>קראתי ואישרתי את התקנון, זה חשוב*</label>
                </div>
                <div>
                    <CheckBox
                        value={mailNotification}
                        onClick={() => setMailNotification(!mailNotification)} />
                    <label>אני רוצה שתשלחו לי עדכונים למייל</label>
                </div>
            </div>
            <StepButtons isStepInValidToContinue={isStepInValidToContinue} setStepsDone={setStepsDone} setActiveStep={setActiveStep} stepsDone={stepsDone} activeStep={activeStep} />
        </div>
    )
}

export default Step5