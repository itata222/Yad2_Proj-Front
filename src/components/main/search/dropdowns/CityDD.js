import React, { useContext, useEffect, useState } from 'react'
import { updateCityAction } from '../../../../actions/postActions';
import { PostContext } from '../../../../contexts/postContext';
import { getCitiesResults } from '../../../../services/userService';

const CityDD = ({ setShowCityDD, searchValue, setIsInValid }) => {
    const [citiesResults, setCitiesResults] = useState([]);
    const { dispatchPostData } = useContext(PostContext);

    useEffect(() => {
        const res = getCitiesResults(searchValue)
        setCitiesResults(res)
    }, [searchValue]);

    const cityClicked = (city) => {
        setShowCityDD(false)
        setIsInValid(false)
        dispatchPostData(updateCityAction(city.trim()));
    }

    function boldString(str, substr) {
        var strRegExp = new RegExp(substr, 'g');
        return str.replace(strRegExp, substr.bold());
    }

    return (
        <div className={citiesResults.length > 0 ? "dropdown citiesDD" : 'none'}>
            {
                citiesResults.map((city, i) => (
                    <div onClick={() => cityClicked(city)} key={i} className="searchResult" dangerouslySetInnerHTML={{ __html: boldString(city, searchValue) }} ></div>
                ))
            }
        </div>
    )
}

export default CityDD
