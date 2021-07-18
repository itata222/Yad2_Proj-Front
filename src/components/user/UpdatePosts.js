import moment from 'moment'
import React from 'react'
import NumberFormat from 'react-number-format'

const UpdatePosts = ({ userPosts }) => {
    console.log(userPosts)
    return (
        <div>
            {
                userPosts.map((postObj, i) => (
                    <div key={i} className="userPost">
                        <div className="area">
                            <span>{postObj.post.city}</span>
                            <span>{postObj.post.street}</span>
                        </div>
                        <div className="properties">
                            <span>{postObj.post.totalMr}</span>
                            <span> </span>
                            <span>מ"ר</span>
                        </div>
                        <div className="priceUserPost">
                            {postObj.post.price === -1 ?
                                <div>לא ציינת מחיר</div>
                                :
                                <NumberFormat value={postObj.post.price} displayType={'text'} thousandSeparator={true} prefix={'₪'} />
                            }
                        </div>
                        <div className="updatedAt">
                            <span>עדכון אחרון:</span>
                            <span> </span>
                            <span>{moment(postObj.post.updatedAt).format('D/M/YY')}</span>
                        </div>
                    </div>   // post component
                ))}
        </div>
    )
}

export default UpdatePosts
