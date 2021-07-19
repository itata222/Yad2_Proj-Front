import React, { useEffect, useState } from 'react'
import Post from './Post'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPosts } from '../../../services/userService';
import NumberOfResults from '../home/NumberOfResults';
import SpinnerInfiniteScroll from '../SpinnerInfiniteScroll';
import { useContext } from 'react';
import { FiltersContext } from '../../../contexts/filtersContext';

const Posts = ({ setShowSpinner, posts, setPosts }) => {
    const { filtersData } = useContext(FiltersContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const limit = 5;

    console.log(filtersData)

    useEffect(() => {
        let isComponentExist = true;
        setShowSpinner(true)
        if (isComponentExist) {
            console.log(2)
            getPosts(limit, currentPage, filtersData).then((res) => {
                setCurrentPage(currentPage + 1)
                setShowSpinner(false);
                setPosts(res);
            })
        }
        return () => {
            isComponentExist = false;
        };
    }, []);

    const fetchMoreData = () => {
        setTimeout(() => {
            const currentPosts = [...posts];
            getPosts(limit, currentPage, filtersData).then((res) => {
                setCurrentPage(currentPage + 1)
                setShowSpinner(false);
                setPosts([...currentPosts, ...res])
                if (res.length < limit)
                    setHasMore(false)
            }).catch(e => console.log(e))
        }, 1000);
    }


    useEffect(() => {
        if (posts.length > 0)
            getPosts(posts.length, 1, filtersData).then((res) => {
                console.log(res)
                setPosts(res);
            }).catch(e => console.log(e))
    }, [filtersData.sort]);

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
