import React, { useState } from 'react'
import AdvancedSearchForm from './AdvancedSearchForm';

const SearchFormPhone = () => {
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

    const isFormModified = () => {
        return true
    }

    const submitSearch = (e) => {
        e.preventDefault();
    }
    const openAdvancedSearch = () => {
        setShowAdvancedSearch(!showAdvancedSearch)
    }

    return (
        <div className="searchFormPhone">
            <form className="searchForm" onSubmit={submitSearch}>
                <button className="clean" disabled={isFormModified()}>
                    <img src="https://img.icons8.com/windows/32/000000/trash.png" alt="garbage" />
                    <span>נקה הכל</span>
                </button>
                <div className="searchBy">
                    <div>חפשו לפי</div>
                    <ul>
                        <li>עיר ושכונה</li>
                        <li>אזור</li>
                        <li>קרוב אלי</li>
                    </ul>
                </div>
                <div className="searchCity">
                    <div>חפשו עיר</div>
                    <input type="text" placeholder="לדוגמא: נתניה" />
                    <div className="dropdown none">

                    </div>
                </div>
                <div className="searchNeighborhood">
                    <div>חפשו שכונה</div>
                    <input type="text" placeholder="הזינו שם של שכונה" />
                    <div className="dropdown none">

                    </div>
                </div>
                <div className="type">
                    <div>סוג נכס</div>
                    <ul>
                        <li>
                            <img src="https://img.icons8.com/material-outlined/48/000000/building.png" alt="building" />
                            <span>דירות</span>
                            <span>9 סוגי נכסים</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/material-outlined/48/000000/home--v2.png" alt="home" />
                            <span>בתים</span>
                            <span>4 סוגי נכסים</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-glyphs/48/000000/defensive-wood-wall.png" alt="fence" />
                            <span>סוגים נוספים</span>
                            <span>7 סוגי נכסים</span>
                        </li>
                    </ul>
                    <div className="showAllTypes">
                        <span>להצגת כל סוגי הנכסים</span>
                    </div>
                </div>
                <div className="rooms">
                    <span>חדרים</span>
                    <div className="pricesBoxes">
                        <button>
                            <span>חדרים</span>
                            <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="arrow down" />
                        </button>
                        <div className="dropdown none">

                        </div>
                    </div>
                </div>
                <div className="price">
                    <span>מחיר</span>
                    <div className="pricesBoxes">
                        <input type="number" placeholder="ממחיר" />
                        <input type="number" placeholder="עד מחיר" />
                    </div>
                </div>

                <div className="advancedSearchButton">
                    <button onClick={openAdvancedSearch}>
                        <img src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png" alt="plus" />
                        <span>חיפוש מתקדם</span>
                    </button>
                </div>
                <div className="searchButton">
                    <button>
                        חיפוש
                    </button>
                </div>
                {showAdvancedSearch && <AdvancedSearchForm />}
            </form>
        </div>
    )
}

export default SearchFormPhone
