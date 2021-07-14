import React from 'react';
import {
    faSnowflake,
    faHouseDamage,
    faBoxOpen,
    faDoorClosed,
    faChair,
    faWheelchair,
    faDungeon,
    faHome,
    faPaintRoller,
    faFaucet,
    faSolarPanel,
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExpandedPost = ({post}) => {
    
    const icons = [faSnowflake, faHouseDamage, faBoxOpen, faDoorClosed, faChair,
        faWheelchair, faDungeon, faHome, faPaintRoller, faFaucet, faSolarPanel, faBars]
    const propertiesText = ['מיזוג', 'ממ"ד', 'מחסן', 'דלתות פנדור', "ריהוט", 'גישה לנכים', "מעלית", "מזגן תדיראן", "משופצת", "מטבח כשר", "דוד שמש", "סורגים"];

    return (
        <div className="postExpand">
        <div className="advertise"></div>
        <div className="propertyData">
            <div className="propertyDescription">
                <h4>תיאור הנכס</h4>
                <div className="propertyDescText">
                    {post.description || 'דופלקס - שטח בנוי כ 75 מ"ר, שטח מרפסת/גג כ 25 מ"ר. קומה תחתונה 2 חדרים, מקלחון, מטבח, מרפסת שירות. קומה עליונה חדר, מקלחון, מרפסת '}
                </div>
                <div className="propertiesSmall">
                    <div className="propertyCondition">
                        <span> מצב הנכס </span>
                        <span className="space"> </span>
                        <span>{post.condition || 'שמור'}</span>
                    </div>
                    <div className="propertyDate">
                        <span> תאריך כניסה </span>
                        <span className="space">  </span>
                        <span> {post.date || '21.6.2021'} </span>
                    </div>
                    <div className="propertyFloorsIn">
                        <span> קומות בבניין </span>
                        <span className="space"> </span>
                        <span>{post.floorsIn || '4'}</span>
                    </div>
                    <div className="propertyBalconies">
                        <span> מרפסות </span>
                        <span className="space"> </span>
                        <span>{post.balcony || '1'}</span>
                    </div>
                    <div className="propertyParking">
                        <span> חניות </span>
                        <span className="space"> </span>
                        <span>{post.parking || '1'}</span>
                    </div>
                </div>

            </div>
            <div className="propertyIcons">
                <h4>מה יש בנכס?</h4>
                <div className="icons">
                    {
                        icons.map((icon, i) => (
                            <div className={true ? 'iconExist' : 'iconNotExist'}>
                                <FontAwesomeIcon icon={icon} />
                                <span>{propertiesText[i]}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default ExpandedPost
