import React, { useContext, useEffect, useState } from 'react'
import { updateCityAction } from '../../../../actions/postActions';
import { PostContext } from '../../../../contexts/postContext';
import { getCitiesResults } from '../../../../services/userService';

const CityDD = ({ setShowCityDD, searchValue }) => {
    const [citiesResults, setCitiesResults] = useState([]);
    const { dispatchPostData } = useContext(PostContext);

    useEffect(() => {
        const res = getCitiesResults(searchValue)
        setCitiesResults(res)
    }, [searchValue]);

    const cityClicked = (city) => {
        setShowCityDD(false)
        dispatchPostData(updateCityAction(city.trim()));
    }

    const splitAndMakeSearchValueBold = (searchValue, autoCompleteResult) => {
        const splitSearchValue = autoCompleteResult.replace(searchValue, `*${searchValue}`).split("*");
        return splitSearchValue.map((str) => {
            return {
                className: str === searchValue ? "bold" : "",
                value: str
            }
        });
    };

    return (
        <div className={citiesResults.length > 0 ? "dropdown citiesDD" : 'none'}>
            {
                citiesResults.map((city, i) => (
                    <div onClick={() => cityClicked(city)} key={i} className="searchResult">{city}</div>
                ))
            }
        </div>
    )
}

export default CityDD
