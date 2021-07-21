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
    const [lastLengthOfPosts, setLastLengthOfPosts] = useState(0);
    const limit = 5;

    useEffect(() => {
        let isComponentExist = true;
        setShowSpinner(true)
        if (isComponentExist) {
            getPosts(limit, currentPage, filtersData).then((res) => {
                setCurrentPage(currentPage + 1)
                setShowSpinner(false);
                setLastLengthOfPosts(res.posts.length)
                setPosts(res.posts);
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
                setPosts([...currentPosts, ...res.posts])
                setLastLengthOfPosts([...currentPosts, ...res.posts].length)
                setHasMore(res.hasMore)
            }).catch(e => console.log(e))
        }, 500);
    }

    useEffect(() => {
        if (posts.length > 0) {
            getPosts(posts.length, 1, filtersData).then((res) => {
                setPosts(res.posts);
            }).catch(e => console.log(e))
        }
    }, [filtersData.sort]);

    useEffect(() => {
        if (filtersData.fromPrice === 1) {
            getPosts(posts.length, 1, filtersData).then((res) => {
                setPosts(res.posts);
            }).catch(e => console.log(e))
        }
        else if (lastLengthOfPosts >= posts.length && currentPage !== 1) {
            getPosts(lastLengthOfPosts, 1, filtersData).then((res) => {
                setPosts(res.posts);
            }).catch(e => console.log(e))
        }

    }, [filtersData.fromPrice]);


    const handleScroll = () => {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
        if (bottom && hasMore) {
            fetchMoreData()
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });


    return (
        <>
            {console.log(posts)}
            <NumberOfResults resultsLength={posts?.length || 0} />
            <div className="posts">
                <InfiniteScroll
                    dataLength={limit}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<SpinnerInfiniteScroll />}
                    endMessage={<div className="endMessage">No More Posts</div>}
                >
                    {
                        posts.map((post) => (
                            <Post key={post._id} post={post} />
                        ))
                    }
                </InfiniteScroll>
            </div>
        </>
    )
}

export default Posts
