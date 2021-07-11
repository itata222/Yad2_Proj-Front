import StepButtons from '../StepButtons'
import React from 'react'

const Step6 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    return (
        <div>

            <StepButtons setStepsDone={setStepsDone} setActiveStep={setActiveStep} stepsDone={stepsDone} activeStep={activeStep} />
        </div>
    )
}

export default Step6