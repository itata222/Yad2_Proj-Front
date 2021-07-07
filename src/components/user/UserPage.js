import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { logoutAction } from '../../actions/userActions';
import { LoginContext } from '../../contexts/loginContext';
import { deleteUserFromCookie } from '../../cookies/cookies';
import { logoutFromDB } from '../../services/userService';
import Spinner from '../main/Spinner'

const UserPage = () => {
    const { userData, dispatchUserData } = useContext(LoginContext)
    const [showSpinner, setShowSpinner] = useState(false)
    const history = useHistory();

    const userPosts = [];

    const logoutClick = () => {
        setShowSpinner(true);
        logoutFromDB(userData.token).then((response) => {
            console.log(response)
            deleteUserFromCookie();
            dispatchUserData(logoutAction());
            setShowSpinner(false)
            history.push('/home')
        })
    }

    return (
        <div className="userPage">
            {showSpinner && <Spinner />}
            <div className="profileHeader">
                <div className="iconAndTitle">
                    <a href="/home">
                        <img src="//images.yad2.co.il/Pic/yad2new/page/yad2_madad.jpg" alt="לוח יד2- לוח המודעות הגדול באינטרנט"></img>
                    </a>
                    <div className="title">
                        האזור האישי שלי
                    </div>
                </div>
                <div className="information">
                    <div class="personalInformation">
                        <span>שלום, איתמר! יש לך (0) מודעות פעילות</span>
                        <span>|</span>
                        <img src="//my.yad2.co.il/images/myYad2Secure/logout_small.jpg" border="0" alt="logout" />
                        <span class="logout" onClick={logoutClick}>התנתק</span>
                    </div>
                </div>
            </div>
            <div className="profileBody">
                <div className="profileBodyHeader">
                    <button>עדכון ועריכת מודעות</button>
                    <button>פרסום מודעה חדשה</button>
                    <button>עדכון פרטים</button>
                </div>
                <div className="profilePosts">
                    {/* כאן אני אקסל מהיוס אפקט שקורה בהגעה לעמוד את המידע על המשתמש ואעשה מאפ על כל הפוסטים שלו */}
                    {userPosts.length > 0 ?
                        <div>
                            {
                                userPosts.map((post) => (
                                    <div></div>   // post component
                                ))}
                        </div> :
                        <div class="text">
                            <p>איתמר, כאן תוכל/י לבצע שינויים על המודעות שלך, </p>
                            <p>למשל למחוק, לעדכן ולהקפיץ את מודעתך למקום גבוה יותר בלוח.</p>
                            <p>כדי להתחיל פשוט לחץ/י על המדור המתאים:</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserPage;