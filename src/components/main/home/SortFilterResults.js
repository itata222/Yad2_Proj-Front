import React, { useContext, useEffect, useRef, useState } from 'react'
import { setPriceFrom } from '../../../actions/filterActions';
import { FiltersContext } from '../../../contexts/filtersContext';
import { useClose } from '../../../utils/useClose';
import CheckBox from '../../CheckBox';


const SortFilterResults = ({ setFilterResults }) => {
    let menuRef = useRef();
    useClose(menuRef, () => setFilterResults(false));

    const { filtersData, dispatchFiltersData } = useContext(FiltersContext)

    const changeSort = (isActive) => {
        console.log(isActive);
        dispatchFiltersData(setPriceFrom(filtersData.fromPrice === 1 ? undefined : 1))
    }

    return (
        <div className="sortFilterResult" >
            <div className="sortFilterResultContent" ref={menuRef}>
                <div>
                    <CheckBox
                        value={filtersData.fromPrice === 1}
                        onChange={changeSort}
                        onClick={changeSort} />
                    <label>רק עם מחיר</label>
                </div>
                <div>
                    <CheckBox
                        onClick={(isActive) => console.log(isActive)} />
                    <label >רק עם תמונה</label>
                </div>

            </div>
        </div>
    )
}

export default SortFilterResults
