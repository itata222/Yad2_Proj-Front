import React, { useEffect, useRef } from 'react'

const SortFilterResults = ({ setFilterResults }) => {
    let menuRef = useRef();

    useEffect(() => {
        document.addEventListener('mouseup', (e) => {
            if (!menuRef.current?.contains(e.target))
                setFilterResults(false)
        })
    });

    const changeSort = (e) => {
        console.log(e.target)
    }

    return (
        <div className="sortFilterResult">
            <div ref={menuRef} className="sortFilterResultContent">
                <div>
                    <input type="checkbox" value="withPrice" checked onChange={changeSort} />
                    <label htmlFor="byDate">רק עם מחיר</label>
                </div>
                <div>
                    <input type="checkbox" value="withPhoto" onChange={changeSort} />
                    <label htmlFor="byPriceLH">רק עם תמונה</label>
                </div>

            </div>
        </div>
    )
}

export default SortFilterResults
