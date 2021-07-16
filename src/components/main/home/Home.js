import React, { useEffect, useState } from "react";
import { getPosts } from "../../../services/userService";
import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader";
import Posts from "../posts/Posts";
import Search from "../search/Search";
import Spinner from "../Spinner";
import LocationDiv from "./LocationDiv";
import LocationHeadline from "./LocationHeadline";
import NumberOfResults from "./NumberOfResults";
import Sort from "./Sort";


const Home = () => {
  const location = ["ראשי", 'נדל"ן למכירה'];
  const [showSpinner, setShowSpinner] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isComponentExist = true;
    setShowSpinner(true)
    if (isComponentExist) {
      getPosts().then((res) => {
        setShowSpinner(false);
        setPosts(res)
      })
    }
    return () => {
      isComponentExist = false;
    };
  }, []);


  return (
    <>
      <Header />
      <SubHeader />
      {showSpinner && <Spinner />}
      <div className="home-page">
        <LocationDiv location={location} />
        <Search />
        <LocationHeadline headline={location[location.length - 1]} />
        <Sort />
        <NumberOfResults resultsLength={posts.length} />
        <Posts posts={posts} setPosts={setPosts} />
      </div>
    </>
  );
};

export default Home;
