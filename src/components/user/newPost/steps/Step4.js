import StepButtons from '../StepButtons'
import React, { useContext } from 'react';
import FileUpload from '../FileUpload';
import { PostContext } from '../../../../contexts/postContext';

const Step4 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    const { postData, dispatchPostData } = useContext(PostContext);

    const isStepInValidToContinue = () => {
        return false
    }

    return (
        <div className="step4">
            <h4>
                <div>ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות? </div>
                <div>לא להסס להעלות לפה תמונות (אפשר עד 10 + וידאו) ולהבליט את הצדדים הטובים ביותר של הנכס</div>
            </h4>
            <div className="mainFilesCon">

                <div className="mainFiles">
                    <FileUpload type='video' />
                    <div className="mainImageInput">
                        <div>תמונה ראשית</div>
                        <FileUpload type='photo' />
                    </div>
                </div>

            </div>
            <div className="photos">
                <h1>תמונות שיופיעו בגוף המודעה</h1>
                <div>
                    <FileUpload type='photo' />
                    <FileUpload type='photo' />
                    <FileUpload type='photo' />
                    <FileUpload type='photo' />
                    <FileUpload type='photo' />
                    <FileUpload type='photo' />
                    <FileUpload type='photo' />
                    <FileUpload type='photo' />
                    <FileUpload type='photo' />
                </div>
            </div>
            <StepButtons isStepInValidToContinue={isStepInValidToContinue} setStepsDone={setStepsDone} setActiveStep={setActiveStep} stepsDone={stepsDone} activeStep={activeStep} />
        </div>
    )
}

export default Step4