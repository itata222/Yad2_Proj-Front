import moment from 'moment'
import React from 'react'
import NumberFormat from 'react-number-format';

const Post = ({ post }) => {
    return (
        <div className="post">
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
                <div className="rooms">
                    <span>{post.rooms}</span>
                    <span>חדרים</span>
                </div>
                <div className="floor">
                    <span>{post.floor}</span>
                    <span>קומה</span>
                </div>
                <div className="space">
                    <span>{post.space}</span>
                    <span>מ"ר</span>
                </div>
            </div>
            <div className="image">
                <img src={post.images[0]} alt="is" />
            </div>
        </div>
    )
}

export default Post