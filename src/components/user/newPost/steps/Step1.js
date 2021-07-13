import StepButtons from '../StepButtons'
import React, { useEffect, useState } from 'react'
import SelectDropDown from '../../../main/SelectDropDown'
import CheckBox from '../../../CheckBox'
import { useContext } from 'react'
import { PostContext } from '../../../../contexts/postContext'
import { updateCityAction, updateConditionAction, updateFloorAction, updateFloorsInBuildingAction, updateHouseNumberAction, updateOnBarsAction, updateStreetAction, updateTypeAction } from '../../../../actions/postActions'
// import { getPostFromCookie, savePostOnCookie } from '../../../../cookies/postCookie'

const Step1 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    const { postData, dispatchPostData } = useContext(PostContext);
    // const postDataCookie = getPostFromCookie();
    // const postDataLatest = postDataCookie || postData;

    const conditionArray = ['משופץ? חדש מקבלן?', ' חדש מקבלן (לא גרו בו בכלל)', ' חדש (נכס בן עד 5 שנים)', ' משופץ (שופץ ב5 השנים האחרונות)', ' במצב שמור (במצב טוב, לא שופץ)']
    const typeArray = ['דירה או פנטהאוז?', 'דירה', "דירת גן", " בית פרטי/קוטג'", " גג/פנטהאוז", ' מגרשים', " דופלקס", " דירת נופש", ' דו משפחתי', ' מרתף/פרטר', ' טריפלקס', ' יחידת דיור', ' משק חקלאי/נחלה', ' משק עזר', ' דיור מוגן', ' בניין מגורים', ' סטודיו/לופט', ' מחסן', " קב' רכישה/ זכות לנכס", ' חניה', ' כללי']

    // useEffect(() => {
    //     savePostOnCookie(postData)
    // }, [postData]);

    const isTypeInFilled = () => {
        return postData.propType === '';
    }
    const isCityInFilled = () => {
        return postData.city === '';
    }
    const isConditionInFilled = () => {
        return postData.condition === '';
    }
    const isFloorInFilled = () => {
        return postData.floor === -1;
    }
    const isFloorInBuildingInFilled = () => {
        return postData.floorsInBuilding === -1;
    }

    const isStepInValidToContinue = () => {
        return isFloorInBuildingInFilled() || isFloorInFilled() || isConditionInFilled() || isCityInFilled() || isTypeInFilled();
    }


    return (
        <div className="step1">
            <h4>סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב</h4>
            <div className="step1Form">
                <div className="type">
                    <label>סוג הנכס*</label>
                    <SelectDropDown onChange={(e) => dispatchPostData(updateTypeAction(e.target.value.trim()))} array={typeArray} className='typeSelect' hideFirst={true} />
                </div>
                <div className="condition">
                    <label>מצב הנכס*</label>
                    <SelectDropDown onChange={(e) => dispatchPostData(updateConditionAction(e.target.value.trim()))} array={conditionArray} className='conditionSelect' hideFirst={true} />
                </div>
                <div className="city">
                    <label>ישוב*</label>
                    <input className='cityInput' placeholder='איפה נמצא הנכס' disabled={isTypeInFilled()} onBlur={(e) => dispatchPostData(updateCityAction(e.target.value.trim()))} />
                </div>
                <div className={!isCityInFilled() ? "street" : "street lowerOpacity"}>
                    <label>רחוב</label>
                    <input className='streetInput' placeholder='הכנסת שם רחוב' disabled={isTypeInFilled()} onBlur={(e) => dispatchPostData(updateStreetAction(e.target.value.trim()))} />
                </div>
                <div className={!isCityInFilled() ? "numHouse" : "numHouse lowerOpacity"}>
                    <label>מס' בית</label>
                    <input className='numHouseInput' disabled={isTypeInFilled()} onBlur={(e) => dispatchPostData(updateHouseNumberAction(e.target.value.trim()))} />
                </div>
                <div className={!isTypeInFilled() ? "floorInfo" : "floorInfo lowerOpacity"}>
                    <div>
                        <label>קומה*</label>
                        <input type="number" placeholder="הכנסת מספר קומה" disabled={isTypeInFilled()} onBlur={(e) => dispatchPostData(updateFloorAction(e.target.value.trim()))} />
                    </div>
                    <div>
                        <label>סה"כ קומות בבניין*</label>
                        <input type="number" placeholder='הכנסת סה"כ קומות' disabled={isTypeInFilled()} onBlur={(e) => dispatchPostData(updateFloorsInBuildingAction(e.target.value.trim()))} />
                    </div>
                    <div>
                        <CheckBox disabled={isTypeInFilled()} onClick={(isActive) => {
                            dispatchPostData(updateOnBarsAction(!isActive))
                        }} />
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
                    <CheckBox disabled={isTypeInFilled()} onClick={() => console.log('great')} />
                    <label>אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן </label>
                </div>
            </div>
            <StepButtons isStepInValidToContinue={isStepInValidToContinue}
                setStepsDone={setStepsDone} setActiveStep={setActiveStep} stepsDone={stepsDone} activeStep={activeStep}
            />
        </div>
    )
}

export default Step1
