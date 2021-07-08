import React from 'react'

const SearchByCityAndNeigh = () => {
    const isCityChosen = () => {
        return true
    }
    return (
        <div className="byCity">
            <div className="searchCity">
                <span>חפשו עיר</span>
                <input type="text" placeholder="לדוגמא: נתניה" />
                <div className="dropdown none">

                </div>
            </div>
            <div className="searchNeighborhood" disabled={isCityChosen()}>
                <span>חפשו שכונה</span>
                <input type="text" placeholder="הזינו שם של שכונה" />
                <div className="dropdown none">

                </div>
            </div>
        </div>
    )
}

export default SearchByCityAndNeigh
