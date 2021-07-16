import StepButtons from '../StepButtons'
import React, { useEffect, useState } from 'react'
import SelectDropDown from '../../../main/SelectDropDown'
import CheckBox from '../../../CheckBox'
import { useContext } from 'react'
import { PostContext } from '../../../../contexts/postContext'
import { updateCityAction, updateConditionAction, updateFloorAction, updateFloorsInBuildingAction, updateHouseNumberAction, updateOnBarsAction, updateStreetAction, updateTypeAction } from '../../../../actions/postActions'
import CityDD from '../../../main/search/dropdowns/CityDD'
import StreetDD from '../../../main/search/dropdowns/StreetDD'
// import { getPostFromCookie, savePostOnCookie } from '../../../../cookies/postCookie'

const Step1 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    const { postData, dispatchPostData } = useContext(PostContext);
    const [CityValue, setCityValue] = useState('');
    const [showCityDD, setShowCityDD] = useState(false);
    const [StreetValue, setStreetValue] = useState('');
    const [showStreetDD, setShowStreetDD] = useState(false);
    const [notification, setNotification] = useState(false);

    const conditionArray = ['משופץ? חדש מקבלן?', ' חדש מקבלן (לא גרו בו בכלל)', ' חדש (נכס בן עד 5 שנים)', ' משופץ (שופץ ב5 השנים האחרונות)', ' במצב שמור (במצב טוב, לא שופץ)']
    const typeArray = ['דירה או פנטהאוז?', 'דירה', "דירת גן", " בית פרטי/קוטג'", " גג/פנטהאוז", ' מגרשים', " דופלקס", " דירת נופש",
        ' דו משפחתי', ' מרתף/פרטר', ' טריפלקס', ' יחידת דיור', ' משק חקלאי/נחלה', ' משק עזר', ' דיור מוגן', ' בניין מגורים', ' סטודיו/לופט', ' מחסן', " קב' רכישה/ זכות לנכס", ' חניה', ' כללי']


    useEffect(() => {
        if (CityValue.length > 2) {
            setShowCityDD(true)
            dispatchPostData(updateCityAction(''))
        }
        else if (CityValue.length <= 1)
            setShowCityDD(false)
    }, [CityValue]);

    useEffect(() => {
        if (StreetValue.length > 1) {
            setShowStreetDD(true)
            dispatchPostData(updateStreetAction(''))
        }
        else
            setShowStreetDD(false)
    }, [StreetValue])

    const isTypeInFilled = () => postData.propType === '';
    const isCityInFilled = () => postData.city === '';
    const isConditionInFilled = () => postData.condition === '';
    const isFloorInFilled = () => postData.floor === -1;
    const isFloorInBuildingInFilled = () => postData.floorsInBuilding === -1;
    const isStepInValidToContinue = () => isFloorInBuildingInFilled() || isFloorInFilled() || isConditionInFilled() || isCityInFilled() || isTypeInFilled();

    return (
        <div className="step1">
            <h4>סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב</h4>
            <div className="step1Form">
                <div className="type">
                    <label>סוג הנכס*</label>
                    <SelectDropDown value={postData.propType} onChange={(value) => {
                        dispatchPostData(updateTypeAction(value))
                    }} array={typeArray} className='typeSelect' hideFirst={true} />
                </div>
                <div className="condition">
                    <label>מצב הנכס*</label>
                    <SelectDropDown value={postData.condition} onChange={(value) => {
                        dispatchPostData(updateConditionAction(value))
                    }} array={conditionArray} className='conditionSelect' hideFirst={true} />
                </div>
                <div className="city">
                    <label>ישוב*</label>
                    <input
                        value={postData.city || CityValue}
                        onChange={(e) => setCityValue(e.target.value)}
                        className='cityInput'
                        placeholder='איפה נמצא הנכס'
                        disabled={isTypeInFilled()}
                        onInput={(e) => setCityValue(e.target.value)} />
                    {showCityDD && <CityDD setCityValue={setCityValue} setShowCityDD={setShowCityDD} searchValue={CityValue} />}
                </div>
                <div className={!isCityInFilled() ? "street" : "street lowerOpacity"}>
                    <label>רחוב</label>
                    <input
                        value={postData.street || StreetValue}
                        onChange={e => setStreetValue(e.target.value)}
                        className='streetInput'
                        placeholder='הכנסת שם רחוב'
                        disabled={isCityInFilled()}
                        onInput={(e) => setStreetValue(e.target.value)} />
                    {showStreetDD && <StreetDD CityValue={postData.city || CityValue} setStreetValue={setStreetValue} setShowStreetDD={setShowStreetDD} searchValue={StreetValue} />}
                </div>
                <div className={!isCityInFilled() ? "numHouse" : "numHouse lowerOpacity"}>
                    <label>מס' בית</label>
                    <input
                        value={postData.houseNumber === -1 ? '' : postData.houseNumber}
                        onChange={e => dispatchPostData(updateHouseNumberAction(e.target.value))}
                        className='numHouseInput'
                        disabled={isTypeInFilled()}
                        onBlur={(e) => dispatchPostData(updateHouseNumberAction(e.target.value.trim()))} />
                </div>
                <div className={!isTypeInFilled() ? "floorInfo" : "floorInfo lowerOpacity"}>
                    <div>
                        <label>קומה*</label>
                        <input
                            value={postData.floor === -1 ? '' : postData.floor}
                            onChange={e => dispatchPostData(updateFloorAction(e.target.value))}
                            type="number"
                            min='0'
                            max='100'
                            placeholder="הכנסת מספר קומה"
                            disabled={isTypeInFilled()}
                            onBlur={e => dispatchPostData(updateFloorAction(e.target.value))} />
                    </div>
                    <div>
                        <label>סה"כ קומות בבניין*</label>
                        <input
                            value={postData.floorsInBuilding === -1 ? '' : postData.floorsInBuilding}
                            onChange={e => dispatchPostData(updateFloorsInBuildingAction(e.target.value))}
                            type="number"
                            placeholder='הכנסת סה"כ קומות'
                            disabled={isTypeInFilled()}
                            onBlur={(e) => dispatchPostData(updateFloorsInBuildingAction(e.target.value.trim()))} />
                    </div>
                    <div>
                        <CheckBox
                            value={postData.onBars}
                            onChange={(isActive) => dispatchPostData(updateOnBarsAction(!isActive))}
                            disabled={isTypeInFilled()}
                            onClick={(isActive) => dispatchPostData(updateOnBarsAction(!isActive))} />
                        <label>על עמודים</label>
                    </div>
                </div>
                <div className="neighborhood lowerOpacity">
                    <label>שכונה</label>
                    <div className='neightValue'>{ }</div>
                </div>
                <div className="area lowerOpacity">
                    <label>אזור מכירה</label>
                    <div className="areaValue">{ }</div>
                </div>
                <div className="noti">
                    <CheckBox
                        value={notification}
                        onChange={() => setNotification(!notification)}
                        disabled={isTypeInFilled()}
                        onClick={() => setNotification(!notification)} />
                    <label>אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן </label>
                </div>
            </div>
            <StepButtons
                // isStepInValidToContinue={isStepInValidToContinue}
                isStepInValidToContinue={() => false}
                setStepsDone={setStepsDone} setActiveStep={setActiveStep} stepsDone={stepsDone} activeStep={activeStep}
            />
        </div>
    )
}

export default Step1
