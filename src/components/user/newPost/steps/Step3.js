import StepButtons from '../StepButtons'
import React, { useState } from 'react'

const Step3 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    const [enterImidiatlly, setEnterImidiatlly] = useState(false);
    return (
        <div className="step3">
            <div className="step3-form">
                <div className="mr">
                    <label>מ"ר בנוי</label>
                    <input placeholder='כמה מ"ר יש בנכס' />
                </div>
                <div className="mrTotal">
                    <label>גודל במ"ר סך הכל*</label>
                    <input type="text" />
                </div>
                <div className="price">
                    <label>מחיר</label>
                    <input maxLength="12" type="number" placeholder="סכום מינימלי 100,000" />
                </div>
                <div className="city">
                    <label>תאריך כניסה*</label>
                    <div>
                        <input type="date" className='cityInput' placeholder='איפה נמצא הנכס' disabled={enterImidiatlly} />
                        <label>מיידי</label>
                        <input type="checkbox" onClick={() => setEnterImidiatlly(!enterImidiatlly)} />
                    </div>
                </div>
            </div>
            <StepButtons setStepsDone={setStepsDone} setActiveStep={setActiveStep} stepsDone={stepsDone} activeStep={activeStep} />
        </div>
    )
}

export default Step3
