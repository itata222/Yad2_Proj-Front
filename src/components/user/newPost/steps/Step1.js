import StepButtons from '../StepButtons'
import React from 'react'
import SelectDropDown from '../../../main/SelectDropDown'

const Step1 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    const conditionArray = ['משופץ? חדש מקבלן?', ' חדש מקבלן (לא גרו בו בכלל)', ' חדש (נכס בן עד 5 שנים)', ' משופץ (שופץ ב5 השנים האחרונות)', ' במצב שמור (במצב טוב, לא שופץ)']
    const typeArray = ['דירה או פנטהאוז?', "דירת גן", " בית פרטי/קוטג'", " גג/פנטהאוז", ' מגרשים', " דופלקס", " דירת נופש", ' דו משפחתי', ' מרתף/פרטר', ' טריפלקס', ' יחידת דיור', ' משק חקלאי/נחלה', ' משק עזר', ' דיור מוגן', ' בניין מגורים', ' סטודיו/לופט', ' מחסן', " קב' רכישה/ זכות לנכס", ' חניה', ' כללי']

    return (
        <div className="step1">
            <h4>סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב</h4>
            <div className="step1Form">
                <div className="type">
                    <label>סוג הנכס*</label>
                    <SelectDropDown array={typeArray} className='typeSelect' hideFirst={true} />
                </div>
                <div className="condition">
                    <label>מצב הנכס*</label>
                    <SelectDropDown array={conditionArray} className='conditionSelect' hideFirst={true} />
                </div>
                <div className="city">
                    <label>ישוב*</label>
                    <input className='cityInput' placeholder='איפה נמצא הנכס' disabled />
                </div>
                <div className="street">
                    <label>רחוב</label>
                    <input className='streetInput' placeholder='הכנסת שם רחוב' disabled />
                </div>
                <div className="numHouse">
                    <label>מס' בית</label>
                    <input className='numHouseInput' disabled />
                </div>
                <div className="floorInfo">
                    <div>
                        <label>קומה*</label>
                        <input disabled />
                    </div>
                    <div>
                        <label>סה"כ קומות בבניין*</label>
                        <input disabled />
                    </div>
                    <div>
                        <input type='checkbox' disabled />
                        <label>על עמודים</label>
                    </div>
                </div>
                <div className="neighborhood">
                    <label>שכונה</label>
                    <input className='neightInput' disabled />
                </div>
                <div className="area">
                    <label>אזור מכירה</label>
                    <input className='areaInput' disabled />
                </div>
                <div className="noti">
                    <input type='checkbox' disabled />
                    <label>אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן
                    </label>
                </div>
            </div>
            <StepButtons
                setStepsDone={setStepsDone} setActiveStep={setActiveStep} stepsDone={stepsDone} activeStep={activeStep}
            />
        </div>
    )
}

export default Step1
