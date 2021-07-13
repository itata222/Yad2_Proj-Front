import React from 'react'

const StepButtons = ({ isStepInValidToContinue, setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        const stepsDoneDup = [...stepsDone]
        stepsDoneDup[activeStep] = true;
        setStepsDone(stepsDoneDup)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        const stepsDoneDup = [...stepsDone]
        stepsDoneDup[activeStep - 1] = false;
        setStepsDone(stepsDoneDup)
    };
    return (
        <div className="stepsButtons">
            <button
                disabled={activeStep === 0}
                onClick={handleBack}
                className='backStepButton'
            >
                חזרה
            </button>
            <button
                disabled={isStepInValidToContinue()}
                onClick={handleNext}
                className='forwardStepButton'
            >
                להמשיך לשלב הבא
            </button>
        </div>
    )
}

export default StepButtons
