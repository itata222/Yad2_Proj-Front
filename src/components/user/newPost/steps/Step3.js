import StepButtons from '../StepButtons'
import React, { useContext, useState } from 'react'
import CheckBox from '../../../CheckBox';
import { PostContext } from '../../../../contexts/postContext';
import { updateBuildMrAction, updateEntryDateAction, updateImmidiateAction, updatePriceAction, updateTotalMrAction } from '../../../../actions/postActions';
import NumberFormat from 'react-number-format';

const Step3 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {

    const { postData, dispatchPostData } = useContext(PostContext);
    const isStepInValidToContinue = () => {
        return postData.totalMr === -1 || postData.entryDate == null;
    }

    return (
        <div className="step3">
            <div className="step3-form">
                <div className="mr">
                    <label>מ"ר בנוי</label>
                    <input
                        value={postData.buildMr === -1 ? '' : postData.buildMr}
                        onChange={e => dispatchPostData(updateBuildMrAction(e.target.value))}
                        type="number"
                        placeholder='כמה מ"ר יש בנכס'
                        onBlur={(e) => dispatchPostData(updateBuildMrAction(e.target.value))} />
                </div>
                <div className="mrTotal">
                    <label>גודל במ"ר סך הכל*</label>
                    <input
                        value={postData.totalMr === -1 ? '' : postData.totalMr}
                        onChange={e => dispatchPostData(updateTotalMrAction(e.target.value))}
                        type="number"
                        onBlur={(e) => dispatchPostData(updateTotalMrAction(e.target.value))} />
                </div>
                <div className="price">
                    <label>מחיר</label>
                    <input
                        value={postData.price === -1 ? "" : postData.price}
                        onChange={e => dispatchPostData(updatePriceAction(e.target.value))}
                        maxLength="12"
                        type="number"
                        placeholder="סכום מינימלי 100,000"
                        onBlur={(e) => dispatchPostData(updatePriceAction(e.target.value))} />
                </div>
                <div className="city">
                    <label>תאריך כניסה*</label>
                    <div>
                        <input
                            value={postData.entryDate === -1 ? "" : postData.entryDate}
                            type="date"
                            className='entryDateInput'
                            onChange={(e) => dispatchPostData(updateEntryDateAction(e.target.value))}
                            disabled={postData.immidiate} />
                        <label>מיידי</label>
                        <CheckBox
                            value={postData.immidiate}
                            onClick={(isActive) => {
                                dispatchPostData(updateImmidiateAction(!isActive))
                            }} />
                    </div>
                </div>
            </div>
            <StepButtons isStepInValidToContinue={isStepInValidToContinue} setStepsDone={setStepsDone} setActiveStep={setActiveStep} stepsDone={stepsDone} activeStep={activeStep} />
        </div>
    )
}

export default Step3
