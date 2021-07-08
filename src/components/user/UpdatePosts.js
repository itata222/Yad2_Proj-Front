import React from 'react'

const UpdatePosts = ({ userPosts }) => {
    return (
        <div>
            {
                userPosts.map((post) => (
                    <div></div>   // post component
                ))}
        </div>
    )
}

export default UpdatePosts
