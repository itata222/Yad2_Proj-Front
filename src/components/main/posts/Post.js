import moment from 'moment'
import React, { useState } from 'react'
import NumberFormat from 'react-number-format';
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

const Post = ({ post }) => {
    const [showPost, setShowPost] = useState(false);
    const icons = [faSnowflake, faHouseDamage, faBoxOpen, faDoorClosed, faChair,
        faWheelchair, faDungeon, faHome, faPaintRoller, faFaucet, faSolarPanel, faBars]
    const propertiesText = ['מיזוג', 'ממ"ד', 'מחסן', 'דלתות פנדור', "ריהוט", 'גישה לנכים', "מעלית", "מזגן תדיראן", "משופצת", "מטבח כשר", "דוד שמש", "סורגים"];

    const openPost = (e) => {
        e.preventDefault();
        setShowPost(!showPost)
    }

    return (
        <div className="post" >
            <div className="post-phone">
                <div className="areaDetails">
                    <div className="priceAndDate">
                        <NumberFormat value={post.price} displayType={'text'} thousandSeparator={true} prefix={'₪'} />
                        <span className="date">{moment(post.updatedAt).isSame(new Date(), "day") ? 'עודכן היום' : ''}</span>
                    </div>
                    <div className="postStreet">
                        <span>{post.street}</span>
                    </div>
                    <div className="postAreaAndType">
                        <span>{post.type},</span>
                        <span>{post.area},</span>
                        <span>{post.city}</span>
                    </div>
                </div>
                <div className="itemDetails">
                    <div className="item-rooms">
                        <span>{post.rooms}</span>
                        <span>חדרים</span>
                    </div>
                    <div className="item-floor">
                        <span>{post.floor}</span>
                        <span>קומה</span>
                    </div>
                    <div className="item-space">
                        <span>{post.space}</span>
                        <span>מ"ר</span>
                    </div>
                </div>
                <div className="image">
                    <img src={post.images[0]} alt="is" />
                </div>
            </div>
            <div className={showPost ? 'post-desktop post-desktopExpanded' : 'post-desktop'} onClick={openPost}>
                <div className="minInfo">
                    <div className={showPost ? 'image imageExpanded' : 'image'}>
                        <img src={post.images[0]} alt="is" />
                    </div>
                    <div className={showPost ? 'itemsMerged' : 'itemsInMerged'}>
                        <div className={showPost ? 'areaDetails areaDetailsExpanded' : 'areaDetails'}>
                            <div className="postStreet">
                                <span>{post.street}</span>
                            </div>
                            <div className="postAreaAndType">
                                <span>{post.type},</span>
                                <span>{post.area},</span>
                                <span>{post.city}</span>
                            </div>
                        </div>
                        <div className={showPost ? 'itemDetails itemDetailsExpanded' : 'itemDetails'}>
                            <div className="item-rooms">
                                <span>{post.rooms}</span>
                                <span>חדרים</span>
                            </div>
                            <div className="item-floor">
                                <span>{post.floor}</span>
                                <span>קומה</span>
                            </div>
                            <div className="item-space">
                                <span>{post.space}</span>
                                <span>מ"ר</span>
                            </div>
                        </div>
                    </div>
                    <div className={showPost ? 'priceAndDate priceAndDateExpanded' : 'priceAndDate'}>
                        <NumberFormat value={post.price} displayType={'text'} thousandSeparator={true} prefix={'₪'} />
                        <span className="date">{moment(post.updatedAt).isSame(new Date(), "day") ? 'עודכן היום' : ''}</span>
                    </div>
                </div>
                {
                    showPost &&
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
                }
            </div>
        </div>
    )
}

export default Post