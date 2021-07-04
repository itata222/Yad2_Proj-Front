import React, { useState } from 'react'
import SortFilterResults from './SortFilterResults';
import SortResults from './SortResults';

const Sort = () => {
    const [sortResults, setSortResults] = useState(false);
    const [filterResults, setFilterResults] = useState(false);

    const sortResultsFunc = () => {
        setSortResults(!sortResults)
    }
    const filterResultsFunc = () => {
        setFilterResults(true)
    }

    return (
        <div className="sort">
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
    )
}

export default Sort
