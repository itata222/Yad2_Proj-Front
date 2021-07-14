import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import AdvancedSearchPhone from './AdvancedSearchPhone';
import SearchByArea from './SearchByArea';
import SearchByCityAndNeigh from './SearchByCityAndNeigh';
import Header from '../Header/Header'

const SearchFormPhone = (props) => {
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
    const [byCity, setByCity] = useState(true);

    useEffect(() => {
        switch (props.location.hash) {
            case "#byCity":
                setByCity(true)
                break;
            default:
                setByCity(false)
        }
    }, [props.location.hash]);

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
        <>
        <Header />
        <div className="searchFormPhone">
            <form className="searchForm" onSubmit={submitSearch}>
                <button className="clean" disabled={isFormModified()}>
                    <img src="https://img.icons8.com/windows/32/000000/trash.png" alt="garbage" />
                    <span>נקה הכל</span>
                </button>
                <div className="searchBy">
                    <div>חפשו לפי</div>
                    <div className="searchByButtons">
                        <NavLink to="#byCity" activeClassName="selected" isActive={() => byCity}>עיר ושכונה</NavLink>
                        <NavLink to="#byArea" activeClassName="selected" isActive={() => !byCity}>אזור</NavLink>
                        <NavLink to="#">קרוב אלי</NavLink>
                    </div>
                </div>
                {
                    byCity ? <SearchByCityAndNeigh /> : <SearchByArea />
                }
                <div className="type">
                    <div>סוג נכס</div>
                    <div className="types">
                        <button className="selected">
                            <img src="https://img.icons8.com/material-outlined/48/000000/building.png" alt="building" />
                            <span>דירות</span>
                            <span>9 סוגי נכסים</span>
                        </button>
                        <button>
                            <img src="https://img.icons8.com/material-outlined/48/000000/home--v2.png" alt="home" />
                            <span>בתים</span>
                            <span>4 סוגי נכסים</span>
                        </button>
                        <button>
                            <img src="https://img.icons8.com/ios-glyphs/48/000000/defensive-wood-wall.png" alt="fence" />
                            <span>סוגים נוספים</span>
                            <span>7 סוגי נכסים</span>
                        </button>
                    </div>
                    <div className="showAllTypes">
                        <span>להצגת כל סוגי הנכסים</span>
                    </div>
                </div>
                <div className="rooms">
                    <span>חדרים</span>
                    <div className="roomsBoxes">
                        <select className="rooms-from">
                            <option value="-1"> הכל </option>
                            <option value="1">‏1</option>
                            <option value="1.5">‏1.5</option>
                            <option value="2">‏2</option>
                            <option value="2.5">‏2.5</option>
                            <option value="3">‏3</option>
                            <option value="3.5">‏3.5</option>
                            <option value="4">‏4</option>
                            <option value="4.5">‏4.5</option>
                            <option value="5">‏5</option>
                            <option value="5.5">‏5.5</option>
                            <option value="6">‏6</option>
                            <option value="6.5">‏6.5</option>
                            <option value="7">‏7</option>
                            <option value="7.5">‏7.5</option>
                            <option value="8">‏8</option>
                            <option value="8.5">‏8.5</option>
                            <option value="9">‏9</option>
                            <option value="9.5">‏9.5</option>
                            <option value="10">‏10</option>
                            <option value="10.5">‏10.5</option>
                            <option value="11">‏11</option>
                            <option value="11.5">‏11.5</option>
                            <option value="12">‏12</option>
                        </select>
                        <span className="seperator"></span>
                        <select className="rooms-to">
                            <option value="-1"> הכל </option>
                            <option value="1">‏1</option>
                            <option value="1.5">‏1.5</option>
                            <option value="2">‏2</option>
                            <option value="2.5">‏2.5</option>
                            <option value="3">‏3</option>
                            <option value="3.5">‏3.5</option>
                            <option value="4">‏4</option>
                            <option value="4.5">‏4.5</option>
                            <option value="5">‏5</option>
                            <option value="5.5">‏5.5</option>
                            <option value="6">‏6</option>
                            <option value="6.5">‏6.5</option>
                            <option value="7">‏7</option>
                            <option value="7.5">‏7.5</option>
                            <option value="8">‏8</option>
                            <option value="8.5">‏8.5</option>
                            <option value="9">‏9</option>
                            <option value="9.5">‏9.5</option>
                            <option value="10">‏10</option>
                            <option value="10.5">‏10.5</option>
                            <option value="11">‏11</option>
                            <option value="11.5">‏11.5</option>
                            <option value="12">‏12</option>
                        </select>
                    </div>
                    <div className="rooms-suggestions">
                        <button>2 - 3 חדרים</button>
                        <button>3 - 4 חדרים</button>
                        <button>4 - 5 חדרים</button>
                        <button>5 - 6 חדרים</button>
                    </div>
                </div>
                <div className="price">
                    <span>מחיר</span>
                    <div className="priceBoxes">
                        <input type="number" placeholder="ממחיר" />
                        <span className="seperator"></span>
                        <input type="number" placeholder="עד מחיר" />
                    </div>
                    <div className="price-suggestions">
                        <button>עד 1,500,000 ₪</button>
                        <button>1.5 - 2 מיליון ₪</button>
                        <button>2 - 3.5 מיליון ₪</button>
                        <button>3.5 - 5 מיליון ₪</button>
                    </div>
                </div>

                <div className="advancedSearchButton">
                    <button onClick={openAdvancedSearch}>
                        <span> {!showAdvancedSearch ? '+' : '-'} </span>
                        <span>{!showAdvancedSearch ? 'חיפוש מתקדם' : 'סגור חיפוש מתקדם'}</span>
                    </button>
                </div>
                <div className="searchButton">
                    <button>
                        חיפוש
                    </button>
                </div>
                {showAdvancedSearch && <AdvancedSearchPhone />}
            </form>
        </div>
        </>
    )
}

export default SearchFormPhone
