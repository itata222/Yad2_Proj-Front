import React from 'react'
import CheckBox from '../../CheckBox'

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
                            <CheckBox onClick={() => console.log('great')} />
                            <label htmlFor="pandor">דלתות פנדור</label>
                        </div>
                        <div>
                            <CheckBox onClick={() => console.log('great')} />
                            <label htmlFor="parking">חניה</label>
                        </div>
                        <div>
                            <CheckBox onClick={() => console.log('great')} />
                            <label htmlFor="elevator">מעלית</label>
                        </div>
                        <div>
                            <CheckBox onClick={() => console.log('great')} />
                            <label htmlFor="climate">מיזוג</label>
                        </div>
                        <div>
                            <CheckBox onClick={() => console.log('great')} />
                            <label htmlFor="balcony">מרפסת</label>
                        </div>
                        <div>
                            <CheckBox onClick={() => console.log('great')} />
                            <label htmlFor="mamad">ממ"ד</label>
                        </div>
                        <div>
                            <CheckBox onClick={() => console.log('great')} />
                            <label htmlFor="grate">סורגים</label>
                        </div>
                        <div>
                            <CheckBox onClick={() => console.log('great')} />
                            <label htmlFor="warehouse">מחסן</label>
                        </div>
                        <div>
                            <CheckBox onClick={() => console.log('great')} />
                            <label htmlFor="access">גישה לנכים</label>
                        </div>
                        <div>
                            <CheckBox onClick={() => console.log('great')} />
                            <label htmlFor="renovated">משופצת</label>
                        </div>
                        <div>
                            <CheckBox onClick={() => console.log('great')} />
                            <label htmlFor="furnished">מרוהטת</label>
                        </div>
                        <div>
                            <CheckBox onClick={() => console.log('great')} />
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
                        <CheckBox onClick={() => console.log('great')} />
                        <label htmlFor="imidiateEntry">כניסה מיידית</label>
                    </div>
                </div>
                <div className="freeTextSearch">
                    <div className="freeSearch">
                        <span>חיפוש חופשי</span>
                        <input type="text" />
                    </div>
                    <div className="onlyKibutz">
                        <CheckBox onClick={() => console.log('great')} />
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
