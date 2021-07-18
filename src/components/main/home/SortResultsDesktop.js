import React, { useEffect, useRef, useState } from 'react'

const SortResultsDesktop = ({ setSortResults, setSortBy }) => {
    const [sortByDate, setSortByDate] = useState(true);
    const [sortByPriceLH, setSortByPriceLH] = useState(false);
    const [sortByPriceHL, setSortByPriceHL] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        document.addEventListener('mouseup', (e) => {
            if (!menuRef.current?.contains(e.target)) {
                setSortResults(false)
            }
        })
    });

    const changeSort = (e) => {
        switch (e.target.value) {
            case 'byDate':
                setSortByDate(true);
                setSortByPriceLH(false);
                setSortByPriceHL(false);
                setSortBy('לפי תאריך')
                break;
            case 'byPriceLH':
                setSortByDate(false);
                setSortByPriceLH(true);
                setSortByPriceHL(false);
                setSortBy('מחיר - מהזול ליקר')
                break;
            default:
                setSortByDate(false);
                setSortByPriceLH(false);
                setSortByPriceHL(true);
                setSortBy('מחיר - מהיקר לזול')
                break;
        }

    }

    return (
        <div className="sortResultsDesktop" ref={menuRef}>
            <div ref={menuRef}>
                <input type="radio" name="date" value="byDate" checked={sortByDate} onChange={(e) => changeSort(e, 1)} />
                <label htmlFor="byDate">לפי תאריך</label>
            </div>
            <div ref={menuRef}>
                <input type="radio" name="priceLH" value="byPriceLH" checked={sortByPriceLH} onChange={changeSort} />
                <label htmlFor="byPriceLH">מחיר - מהזול ליקר</label>
            </div>
            <div ref={menuRef}>
                <input type="radio" name="priceHL" value="byPriceHL" checked={sortByPriceHL} onChange={changeSort} />
                <label htmlFor="byPriceHL">מחיר - מהיקר לזול</label>
            </div>
        </div>
    )
}

export default SortResultsDesktop
