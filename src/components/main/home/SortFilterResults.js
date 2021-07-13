import React, { useEffect, useRef } from 'react'
import CheckBox from '../../CheckBox';

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
                    <CheckBox checked={true} onClick={() => console.log('great')} />
                    <label htmlFor="byDate">רק עם מחיר</label>
                </div>
                <div>
                    <CheckBox checked={true} onClick={() => console.log('great')} />
                    <label htmlFor="byPriceLH">רק עם תמונה</label>
                </div>

            </div>
        </div>
    )
}

export default SortFilterResults
