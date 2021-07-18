import React, { useEffect, useState } from 'react'
import Post from './Post'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPosts } from '../../../services/userService';
import NumberOfResults from '../home/NumberOfResults';
import SpinnerInfiniteScroll from '../SpinnerInfiniteScroll';

const Posts = ({ setShowSpinner }) => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)
    const limit = 5;


    useEffect(() => {
        let isComponentExist = true;
        setShowSpinner(true)
        if (isComponentExist) {
            getPosts(limit, currentPage).then((res) => {
                setCurrentPage(currentPage + 1)
                setShowSpinner(false);
                setPosts(res)
            })
        }
        return () => {
            isComponentExist = false;
        };
    }, []);

    const fetchMoreData = () => {
        setTimeout(() => {
            const currentPosts = [...posts];
            getPosts(limit, currentPage).then((res) => {
                setCurrentPage(currentPage + 1)
                setShowSpinner(false);
                setPosts([...currentPosts, ...res])
                if (res.length < limit)
                    setHasMore(false)
                console.log(res)
            }).catch(e => console.log(e))
        }, 1000);
    }

    return (
        <>
            <NumberOfResults resultsLength={posts.length} />
            <div className="posts">
                <InfiniteScroll
                    dataLength={limit}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<SpinnerInfiniteScroll />}
                    endMessage={<div className="endMessage">No More Posts</div>}
                >
                    {
                        posts.map((post, i) => (
                            <Post key={i} post={post} />
                        ))
                    }
                </InfiniteScroll>
            </div>
        </>
    )
}

export default Posts
