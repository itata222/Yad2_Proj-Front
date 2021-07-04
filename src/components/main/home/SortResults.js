import React, { useEffect, useRef } from 'react'

const SortResults = ({ setSortResults }) => {
    let menuRef = useRef();

    useEffect(() => {
        document.addEventListener('mouseup', (e) => {
            if (!menuRef.current?.contains(e.target)) {
                setSortResults(false)
            }
        })
    });

    const changeSort = (e) => {
        console.log(e.target)
    }

    return (
        <div className="sortResult">
            <div ref={menuRef} className="sortResultContent">
                <div>
                    <input type="radio" id="huey" name="drone" value="byDate" checked onChange={changeSort} />
                    <label htmlFor="byDate">לפי תאריך</label>
                </div>
                <div>
                    <input type="radio" id="huey" name="drone" value="byPriceLH" onChange={changeSort} />
                    <label htmlFor="byPriceLH">מחיר - מהזול ליקר</label>
                </div>
                <div>
                    <input type="radio" id="huey" name="drone" value="byPriceHL" onChange={changeSort} />
                    <label htmlFor="byPriceHL">מחיר - מהיקר לזול</label>
                </div>
                <div>
                    <input type="radio" id="huey" name="drone" value="byCloser" onChange={changeSort} />
                    <label htmlFor="byCloser">קרוב אליי</label>
                </div>
            </div>
        </div>
    )
}

export default SortResults
