import React, { useState } from "react";
import AdvancedSearchForm from "./AdvancedSearchForm";

const Search = () => {
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)
    const openAdvancedSearch = () => {
        setShowAdvancedSearch(!showAdvancedSearch)
    }
    const submitSearch = (e) => {
        e.preventDefault();
    }
    return (
        <div className="search">
            <div className="search-desktop">
                <div className="searchHeadline">
                    <div className="searchHeadlineText">
                        <span>איזה נכס ל</span>
                        <span className="headerWord">מכירה</span>
                        <span>תרצו לחפש?</span>
                    </div>
                    <div className="notificationsButton">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAADHElEQVRYhe2WTWgdVRSAv3Pm/cTqolBa8kLSvBcjWELponXVRQnPltSVGwVduBCsUBfiQkXa0iEtpAqlKCiliKCrggtRKIVCf9BiERqtLWqU2KYk5KWmWuhfmrzOOV1knrXNJJl5Cm5yVjP3nnu/7/4wZ2ApluJ/Dvk3g0d3dj0RqLwKvgXoAnLAZeAkqoecqF1MDgKRINtK/b8f/U8E/DmC8TWVAUHeiKGJacAMUGz4tvVfXP1wkmaFXwrLLbU1XV8K8ibgCAddZaPevvUYeudRXDaA7Aem/gFHkCBpvvns54UXI/kCoQ+YULdnW/tHvnsobRAYrIXdn7jZEaAM1A3ZnjRn6h24D5c+YAK13tY9c+B/Rykc/hmLngFuA/lA715pWiAJ3haODC02rm3v5V9c5CMAs+DlpgSahTdCjMOzT7Yhs8BPYU+hEOnnMfyKuD6dBQ6gUzfjfKkk9c+5hLVd3T0u/iHqH4hNbXehSrzyUngxExwg0OVq1BNZyY1i7wObMDY5IMi4a1TNuvJGRMumezAFZDSpf+4R1PUFgfONN1Q2NwsHcJMXARw/kUqgNDA86ZqrxhJ5Nztce6d7ZTPwsV2VdY68ArirfZxKAKAt/O2qa64K/Ais9bwdzypRC8tlFfkKaHHh0/Zw5FxqgYaE1QtV4FxWiYmdnRU3PQWsBs7a9ZnEr+CCAgDtA0N/Tqv1Amdjia//CMutC40Z31HpNA2OA53gP1i90NdxYGxqvvxU1fBSWF5eND0GPAUM5dR6V4UjE0lwAjkJVIDvI53Z3BGO/bXQ3KnL8WISMfwUs8VnMNKZLYvBIWUt8G3r80XXt4HOuOnJu6bHGndiNHy8m0C+AcqCn2mZppoGDil3oLa761133krouoDa88zuTAfwbVF164pw+HqaeSHl/4A7LwG4ykYiRMRPx11rMT0P5AU/k7tT6Fvx3q830sIh5REIYgBED+zYJHAByAM4sn9lRnhqARf/DEDET99fvRySulZjCYDXssJTC1yTR3Yj7BNkHKgh7CtpR1gaGJ6UulbdOaHO680ILMVS3ANECz6HOZS9cwAAAABJRU5ErkJggg==" alt="bell" />
                        <span>קבלו התראות במייל על החיפוש</span>
                    </div>
                </div>
                <form className="searchForm" onSubmit={submitSearch}>
                    <div className="area">
                        <span>חפשו אזור,עיר,שכונה או רחוב</span>
                        <input type="text" placeholder="לדוגמא: פארק הים" />
                        <div className="dropdown none">

                        </div>
                    </div>
                    <div className="type">
                        <span>סוג נכס</span>
                        <button>
                            <span>בחרו סוגי נכסים</span>
                            <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="arrow down" />
                        </button>
                        <div className="dropdown none">

                        </div>
                    </div>
                    <div className="rooms">
                        <span>חדרים</span>
                        <button>
                            <span>חדרים</span>
                            <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="arrow down" />
                        </button>
                        <div className="dropdown none">

                        </div>
                    </div>
                    <div className="price">
                        <span>מחיר</span>
                        <div className="pricesBoxes">
                            <input type="number" placeholder="ממחיר" />
                            <input type="number" placeholder="עד מחיר" />
                        </div>
                    </div>
                    <div className="searchButton">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="24" height="24"
                                viewBox="0 0 172 172"
                                style={{ fill: "#000000" }}>
                                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                    <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M64.5,14.33333c-27.6214,0 -50.16667,22.54527 -50.16667,50.16667c0,27.6214 22.54527,50.16667 50.16667,50.16667c12.52732,0 23.97256,-4.67249 32.7819,-12.31771l3.05143,3.05143v9.26628l43,43l14.33333,-14.33333l-43,-43h-9.26628l-3.05143,-3.05143c7.64521,-8.80934 12.31771,-20.25458 12.31771,-32.7819c0,-27.6214 -22.54527,-50.16667 -50.16667,-50.16667zM64.5,28.66667c19.87509,0 35.83333,15.95824 35.83333,35.83333c0,19.87509 -15.95825,35.83333 -35.83333,35.83333c-19.87509,0 -35.83333,-15.95825 -35.83333,-35.83333c0,-19.87509 15.95824,-35.83333 35.83333,-35.83333z"></path></g></g></svg>
                            <span>חיפוש </span>
                        </button>
                    </div>
                    <div className="advancedSearchButton">
                        <button onClick={openAdvancedSearch}>
                            <img src="https://img.icons8.com/material-outlined/24/000000/plus--v1.png" alt="plus" />
                            <span>חיפוש מתקדם</span>
                        </button>
                    </div>
                </form>
                {showAdvancedSearch && <AdvancedSearchForm />}
            </div>
        </div>
    );
};

export default Search;
