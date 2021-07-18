import React, { useState } from 'react'
import SortFilterResults from './SortFilterResults';
import SortResults from './SortResults';
import SortResultsDesktop from './SortResultsDesktop';

const Sort = () => {
    const [sortResults, setSortResults] = useState(false);
    const [sortResultsDesktop, setSortResultsDesktop] = useState(false);
    const [filterResults, setFilterResults] = useState(false);
    const [sortBy, setSortBy] = useState('לפי תאריך');

    const sortResultsFunc = () => {
        setSortResults(!sortResults)
    }
    const sortResultsDesktopFunc = () => {
        setSortResultsDesktop(!sortResultsDesktop)
    }
    const filterResultsFunc = () => {
        setFilterResults(true)
    }

    return (
        <div className="sort">
            <div className="sort-phone">
                {sortResults && <SortResults setSortResults={setSortResults} />}
                {filterResults && <SortFilterResults setFilterResults={setFilterResults} />}
                <div className="sort-results" onClick={sortResultsFunc}>
                    <img src="https://img.icons8.com/pastel-glyph/32/000000/sorting-arrows--v1.png" alt="arrows" />
                    <span >מיין תוצאות</span>
                </div>
                <div className="filter-results" onClick={filterResultsFunc}>
                    <img src="https://img.icons8.com/windows/32/000000/filter.png" alt="funnel" />
                    <span >סנן תוצאות</span>
                </div>
            </div>
            <div className="sort-desktop" >
                {sortResultsDesktop && <SortResultsDesktop setSortResults={setSortResultsDesktop} setSortBy={setSortBy} />}
                <div className="sort-results" onClick={sortResultsDesktopFunc}>
                    <span >מיין לפי</span>
                    <button>
                        <span>{sortBy}</span>
                        <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="arrow down" />
                    </button>
                </div>
                <div className="filter-results">
                    <span >הצג מודעות</span>
                    <button>
                        <img src="https://img.icons8.com/material-rounded/24/000000/shekel.png" alt="shekel" />
                        <span>עם מחיר</span>
                    </button>
                    <button>
                        <img src="https://img.icons8.com/material-outlined/24/000000/image.png" alt="portrait icon" />
                        <span>עם תמונה</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Sort
