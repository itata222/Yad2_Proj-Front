import moment from 'moment'
import React, { useState } from 'react'
import NumberFormat from 'react-number-format';
import ExpandedPost from './ExpandedPost';


const Post = ({ post }) => {
    const [showPost, setShowPost] = useState(false);

    const openPost = (e) => {
        e.preventDefault();
        setShowPost(!showPost)
    }

    return (
        <div className="post" >
            <div className={showPost ? 'post-phone post-phoneExpanded' : 'post-phone'} onClick={openPost}>

                <div className="areaDetails">
                    <div className="priceAndDate">
                        {post.price === -1 ?
                            <div className="priceNotMentioned">לא צוין מחיר</div>
                            :
                            <NumberFormat value={post.price} displayType={'text'} thousandSeparator={true} prefix={'₪'} />
                        }
                        <span className="date">{moment(post.updatedAt).isSame(new Date(), "day") ? 'עודכן היום' : ''}</span>
                        <span className="clickForDetails">לחצו לפרטים</span>
                        <div className="contactPhone">
                            <span>{post.contactPhone}</span>
                        </div>
                    </div>
                    <div className="postStreet">
                        <span>{post.street}</span>
                    </div>
                    <div className="postAreaAndType">
                        <span>{post.type}</span>
                        {post.area.length > 0 && <span>,{post.area},</span>}
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
                    <img src={'https://img.yad2.co.il/Pic/202107/11/2_1/o/y2_1_09621_20210711090737.jpeg?l=7&c=3&w=195&h=117'} alt="is" />
                </div>
                {
                    showPost &&
                    <ExpandedPost post={post} />
                }
            </div>
            <div className={showPost ? 'post-desktop post-desktopExpanded' : 'post-desktop'} onClick={openPost}>
                <div className="minInfo">
                    <div className={showPost ? 'image imageExpanded' : 'image'}>
                        <img src={'https://img.yad2.co.il/Pic/202107/11/2_1/o/y2_1_09621_20210711090737.jpeg?l=7&c=3&w=195&h=117'} alt="is" />
                    </div>
                    <div className={showPost ? 'itemsMerged' : 'itemsInMerged'}>
                        <div className={showPost ? 'areaDetails areaDetailsExpanded' : 'areaDetails'}>
                            <div className="postStreet">
                                <span>{post.street}</span>
                            </div>
                            <div className="postAreaAndType">
                                <span>{post.type}</span>
                                {post.area.length > 0 && <span>,{post.area},</span>}
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
                                <span>{post.totalMr}</span>
                                <span>מ"ר</span>
                            </div>
                        </div>
                    </div>
                    <div className={showPost ? 'priceAndDate priceAndDateExpanded' : 'priceAndDate'}>
                        {post.price === -1 ?
                            <div className="priceNotMentioned">לא צוין מחיר</div>
                            :
                            <NumberFormat value={post.price} displayType={'text'} thousandSeparator={true} prefix={'₪'} />
                        }
                        <span className="date">{moment(post.updatedAt).isSame(new Date(), "day") ? 'עודכן היום' : ''}</span>
                        <span className="clickForDetails">לחצו לפרטים</span>
                        <div className="contactPhone">
                            <span>{post.contactPhone}</span>
                        </div>
                    </div>
                </div>
                {
                    showPost &&
                    <ExpandedPost post={post} />
                }
            </div>
        </div>
    )
}

export default Post