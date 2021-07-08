import React from 'react'

const SearchByArea = () => {
    const areas = [];
    const onlyKibutzsChange = () => {
        console.log(1)
    }
    return (
        <div className="byArea">
            <select className="areas">
                {
                    <>
                        <option value="-1">הכל</option>
                        {
                            areas.map((area) => (
                                <option value={area}>{area}</option>
                            ))
                        }
                    </>
                }
            </select>
            <div>
                <input type="checkbox" value="onlyKibutzs" onChange={onlyKibutzsChange} />
                <label htmlFor="onlyKibutzs">הצגת מושבים וקיבוצים בלבד</label>
            </div>
        </div>
    )
}

export default SearchByArea
