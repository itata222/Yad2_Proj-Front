import { nanoid } from 'nanoid'
import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => {
    return (
        <div className="posts">
            {
                posts.map(post => (
                    <Post key={nanoid()} post={post} />
                ))
            }
        </div>
    )
}

export default Posts
