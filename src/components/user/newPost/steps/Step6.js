import React, { useContext, useState } from 'react'
import { LoginContext } from '../../../../contexts/loginContext';
import { PostContext } from '../../../../contexts/postContext';
import { addPostToDB } from '../../../../services/userService';
import Spinner from '../../../main/Spinner'

const Step6 = () => {
    const { postData } = useContext(PostContext);
    const { userData } = useContext(LoginContext);
    const [showSpinner, setShowSpinner] = useState(false);
    console.log(postData)

    const addPostFunc = () => {
        setShowSpinner(true)
        addPostToDB(userData.token, postData).then((res) => {
            setShowSpinner(false);
            // alert('post added successfully');
            console.log(res)
        }).catch((e) => console.log(e))
    }

    return (
        <div className="step6">
            {showSpinner && <Spinner />}
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
                        <i className="fas fa-check"></i>
                        <div>מודעה רגילה בצבע אפור</div>
                    </div>
                    <div>
                        <i className="fas fa-times"></i>
                        <div>הקפצה אוטומטית לחיסכון בזמן</div>
                    </div>
                </div>
                <div className="pathButton">
                    <button onClick={addPostFunc}>
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