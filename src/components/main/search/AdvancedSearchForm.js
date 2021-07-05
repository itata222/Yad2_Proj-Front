import React from 'react'

const AdvancedSearchForm = () => {

    const changeSort = () => {
        console.log(1)
    }

    return (
        <div className="advancedSearch">
            <div className="advancedSearch-desktop">
                <div className="properties-checkbox">
                    <h1>מאפייני דירה</h1>
                    <div className="properties">
                        <div>
                            <input type="checkbox" value="pandor" onChange={changeSort} />
                            <label htmlFor="pandor">דלתות פנדור</label>
                        </div>
                        <div>
                            <input type="checkbox" value="parking" onChange={changeSort} />
                            <label htmlFor="parking">חניה</label>
                        </div>
                        <div>
                            <input type="checkbox" value="elevator" onChange={changeSort} />
                            <label htmlFor="elevator">מעלית</label>
                        </div>
                        <div>
                            <input type="checkbox" value="climate" onChange={changeSort} />
                            <label htmlFor="climate">מיזוג</label>
                        </div>
                        <div>
                            <input type="checkbox" value="balcony" onChange={changeSort} />
                            <label htmlFor="balcony">מרפסת</label>
                        </div>
                        <div>
                            <input type="checkbox" value="mamad" onChange={changeSort} />
                            <label htmlFor="mamad">ממ"ד</label>
                        </div>
                        <div>
                            <input type="checkbox" value="grate" onChange={changeSort} />
                            <label htmlFor="grate">סורגים</label>
                        </div>
                        <div>
                            <input type="checkbox" value="warehouse" onChange={changeSort} />
                            <label htmlFor="warehouse">מחסן</label>
                        </div>
                        <div>
                            <input type="checkbox" value="access" onChange={changeSort} />
                            <label htmlFor="access">גישה לנכים</label>
                        </div>
                        <div>
                            <input type="checkbox" value="renovated" onChange={changeSort} />
                            <label htmlFor="renovated">משופצת</label>
                        </div>
                        <div>
                            <input type="checkbox" value="furnished" onChange={changeSort} />
                            <label htmlFor="furnished">מרוהטת</label>
                        </div>
                        <div>
                            <input type="checkbox" value="exclusive" onChange={changeSort} />
                            <label htmlFor="exclusive">בבלעדיות</label>
                        </div>
                    </div>
                </div>
                <div className="properties-input">
                    <div className="floor">
                        <span>קומה</span>
                        <div className="floor-boxs">
                            <div className="floor-from">
                                <button>
                                    <span>מ-</span>
                                    <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="arrow down" />
                                </button>
                                <div className="dropdown none"></div>
                            </div>
                            <div className="floor-to">
                                <button>
                                    <span>עד-</span>
                                    <img src="https://img.icons8.com/material-outlined/24/000000/expand-arrow--v1.png" alt="arrow down" />
                                </button>
                                <div className="dropdown none">  </div>
                            </div>
                        </div>
                    </div>
                    <div className="size">
                        <span>גודל דירה (במ"ר)</span>
                        <div className="sizes">
                            <input type="number" placeholder="מ-" />
                            <input type="number" placeholder="עד-" />
                        </div>
                    </div>
                    <div className="entryDate">
                        <span>תאריך כניסה</span>
                        <div className="sizes">
                            {/* <img src="https://img.icons8.com/material-rounded/24/000000/thursday.png" alt="calender" /> */}
                            <input placeholder="החל מ- הזינו תאריך" className="textbox-n" type="date" />
                        </div>
                    </div>
                    <div className="imidiateEntry">
                        <input type="checkbox" value="imidiateEntry" onChange={changeSort} />
                        <label htmlFor="imidiateEntry">כניסה מיידית</label>
                    </div>
                </div>
                <div className="freeTextSearch">
                    <div className="freeSearch">
                        <span>חיפוש חופשי</span>
                        <input type="text" />
                    </div>
                    <div className="onlyKibutz">
                        <input type="checkbox" value="onlyKibutz" onChange={changeSort} />
                        <label htmlFor="onlyKibutz">הצגת מושבים וקיבוצים בלבד</label>
                    </div>
                </div>
                <div className="buttons">
                    <div></div>
                    <button>חיפוש</button>
                    <span>נקה</span>
                </div>
            </div>
        </div >
    )
}

export default AdvancedSearchForm
