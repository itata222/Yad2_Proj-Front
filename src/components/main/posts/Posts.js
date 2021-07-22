import React, { useEffect, useState } from 'react'
import Post from './Post'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPosts } from '../../../services/userService';
import NumberOfResults from '../home/NumberOfResults';
import SpinnerInfiniteScroll from '../SpinnerInfiniteScroll';
import { useContext } from 'react';
import { FiltersContext } from '../../../contexts/filtersContext';
import { PostsContext } from '../../../contexts/postsContext';
import { setPostsAction } from '../../../actions/postsActions';

const Posts = ({ setShowSpinner }) => {
    const { filtersData } = useContext(FiltersContext);
    const { postsData, dispatchPostsData } = useContext(PostsContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [lastLengthOfPosts, setLastLengthOfPosts] = useState(0);
    const limit = 5;

    console.log(filtersData)

    useEffect(() => {
        let isComponentExist = true;
        setShowSpinner(true)
        if (isComponentExist) {
            getPosts(limit, currentPage, filtersData).then((res) => {
                setCurrentPage(currentPage + 1)
                setShowSpinner(false);
                setLastLengthOfPosts(res.posts.length)
                dispatchPostsData(setPostsAction(res.posts));
            })
        }
        return () => {
            isComponentExist = false;
        };
    }, []);

    const fetchMoreData = () => {
        setTimeout(() => {
            const currentPosts = [...postsData];
            getPosts(limit, currentPage, filtersData).then((res) => {
                setCurrentPage(currentPage + 1)
                setShowSpinner(false);
                dispatchPostsData(setPostsAction([...currentPosts, ...res.posts]))
                setLastLengthOfPosts([...currentPosts, ...res.posts].length)
                setHasMore(res.hasMore)
            }).catch(e => console.log(e))
        }, 500);
    }

    useEffect(() => {
        setShowSpinner(true)
        if (postsData.length > 0) {
            getPosts(postsData.length, 1, filtersData).then((res) => {
                setShowSpinner(false)
                dispatchPostsData(setPostsAction(res.posts));
            }).catch(e => console.log(e))
        }
    }, [filtersData.sort]);

    useEffect(() => {
        if (filtersData.fromPrice === 1) {
            getPosts(postsData.length, 1, filtersData).then((res) => {
                dispatchPostsData(setPostsAction(res.posts));
            }).catch(e => console.log(e))
        }
        else if (lastLengthOfPosts >= postsData.length && currentPage !== 1) {
            getPosts(lastLengthOfPosts, 1, filtersData).then((res) => {
                dispatchPostsData(setPostsAction(res.posts));
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
            <NumberOfResults resultsLength={postsData.length || 0} />
            <div className="posts">
                <InfiniteScroll
                    dataLength={limit}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<SpinnerInfiniteScroll />}
                    endMessage={<div className="endMessage">No More Posts</div>}
                >
                    {
                        postsData.map((post) => (
                            <Post key={post._id} post={post} />
                        ))
                    }
                </InfiniteScroll>
            </div>
        </>
    )
}

export default Posts
