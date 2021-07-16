import { nanoid } from 'nanoid'
import React from 'react'
import Post from './Post'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPosts } from '../../../services/userService';

const Posts = ({ posts, setPosts }) => {
    return (
        <div className="posts">
            {/* <InfiniteScroll
                dataLength={5}
                next={getPosts().then((res) => {
                    const postsDup=[...posts]
                    setPosts([...postsDup,res])
                })}
                // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                inverse={false} //
                hasMore={true}
                loader={<h4>Loading...</h4>}
            > */}
            {
                posts.map(post => (
                    <Post key={nanoid()} post={post} />
                ))
            }
            {/* </InfiniteScroll> */}
        </div>
    )
}

export default Posts
