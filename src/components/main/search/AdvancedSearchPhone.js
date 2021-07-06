import React from 'react'
import reactDom from 'react-dom'

const AdvancedSearchPhone = () => {
    const changeSort = () => {
        console.log(1)
    }

    return (
        <div className="advancedSearchPhone">
            <div className="checkbox">
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
            <div className="floor">
                <span>קומה</span>
                <div className="floorBoxes">
                    <select className="floor-from">
                        <option value="-1"> הכל </option>
                        <option value="downstairs">‏מרתף/פרטר</option>
                        <option value="0">‏0</option>
                        <option value="1">‏1</option>
                        <option value="2">‏2</option>
                        <option value="3">‏3</option>
                        <option value="4">‏4</option>
                        <option value="5">‏5</option>
                        <option value="6">‏6</option>
                        <option value="7">‏7</option>
                        <option value="8">‏8</option>
                        <option value="9">‏9</option>
                        <option value="10">‏10</option>
                        <option value="11">‏11</option>
                        <option value="12">‏12</option>
                        <option value="13">‏13</option>
                        <option value="14">‏14</option>
                        <option value="15">‏15</option>
                        <option value="16">‏16</option>
                        <option value="17">‏17</option>
                    </select>
                    <span className="seperator"></span>
                    <select className="floor-to">
                        <option value="-1"> הכל </option>
                        <option value="downstairs">‏מרתף/פרטר</option>
                        <option value="0">‏0</option>
                        <option value="1">‏1</option>
                        <option value="2">‏2</option>
                        <option value="3">‏3</option>
                        <option value="4">‏4</option>
                        <option value="5">‏5</option>
                        <option value="6">‏6</option>
                        <option value="7">‏7</option>
                        <option value="8">‏8</option>
                        <option value="9">‏9</option>
                        <option value="10">‏10</option>
                        <option value="11">‏11</option>
                        <option value="12">‏12</option>
                        <option value="13">‏13</option>
                        <option value="14">‏14</option>
                        <option value="15">‏15</option>
                        <option value="16">‏16</option>
                        <option value="17">‏17</option>
                    </select>
                </div>
            </div>
            <div className="size">
                <span>גודל דירה (במ"ר)</span>
                <div className="sizeBoxes">
                    <input type="number" placeholder="ממחיר" />
                    <span className="seperator"></span>
                    <input type="number" placeholder="עד מחיר" />
                </div>
            </div>
            <div ref={(component) => reactDom.findDOMNode(component)?.focus()} tabindex="0" className="entryDate">
                <span>תאריך כניסה</span>
                <input placeholder="החל מ- הזינו תאריך" className="textbox-n" type="date" />
            </div>
            <div className="imidiateEntry">
                <input type="checkbox" value="imidiateEntry" onChange={changeSort} />
                <label htmlFor="imidiateEntry">כניסה מיידית</label>
            </div>
            <div className="freeTextSearch">
                <span>חיפוש חופשי</span>
                <input type="text" />
            </div>
        </div>
    )
}

export default AdvancedSearchPhone
