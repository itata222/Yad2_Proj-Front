import moment from "moment";
import React from "react";
import Posts from "../posts/Posts";
import Search from "../search/Search";
import LocationDiv from "./LocationDiv";
import LocationHeadline from "./LocationHeadline";
import NumberOfResults from "./NumberOfResults";
import Sort from "./Sort";

const Home = () => {
  const location = ["ראשי", 'נדל"ן למכירה'];
  const results = [
    {
      price: 1000000,
      street: "האלוף דוד 9",
      type: "דירת גן",
      area: "מרכז עפולה",
      city: "עפולה",
      rooms: 4,
      floor: 7,
      space: 120,
      updatedAt: moment(),
      images: [
        "https://img.yad2.co.il/Pic/202101/15/2_1/o/o2_1_1_01367_20210115220102.jpg?l=7&c=3&w=195&h=117",
        "asdsad",
      ],
    },
    {
      price: 8920000,
      street: "מולדת 5",
      type: "פנטהאוז",
      area: "בת ים",
      city: "מרכז בת ים",
      rooms: 3,
      floor: 2,
      updatedAt: moment(),
      space: 50,
      images: [
        "https://img.yad2.co.il/Pic/202101/15/2_1/o/o2_1_1_01367_20210115220102.jpg?l=7&c=3&w=195&h=117",
        "asdsad",
      ],
    },
  ];
  return (
    <div className="home-page">
      <LocationDiv location={location} />
      <Search />
      <LocationHeadline headline={location[location.length - 1]} />
      <Sort />
      <NumberOfResults resultsLength={results.length} />
      <Posts posts={results} />
    </div>
  );
};

export default Home;
