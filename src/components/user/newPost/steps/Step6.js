import StepButtons from '../StepButtons'
import React from 'react'

const Step6 = ({ setActiveStep, activeStep, setStepsDone, stepsDone }) => {
    return (
        <div className="step6">
            <div className="conclusionText">
                <h4>זהו, אנחנו בסוף. לנו נשאר לשמור את המודעה שלך, לך נשאר לבחור את מסלול הפרסום.</h4>

            </div>
            <div className="path">
                <div className="pathHeader">
                    <div className="pathTitle">בסיסי</div>
                    <div className="pathImg">
                        <img src="	https://assets.yad2.co.il/personal/images/payment/rocketShip_Free.png" alt="clouds" />
                    </div>
                </div>
                <div className="pathContent">
                    <div>
                        <i class="fas fa-check"></i>
                        <div>מודעה רגילה בצבע אפור</div>
                    </div>
                    <div>
                        <i class="fas fa-times"></i>
                        <div>הקפצה אוטומטית לחיסכון בזמן</div>
                    </div>
                </div>
                <div className="pathButton">
                    <button>
                        <span>חינם</span>
                        <span>/</span>
                        <span>120</span>
                        ימים
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step6