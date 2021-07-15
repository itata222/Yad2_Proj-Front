import React, { useState } from 'react'

const Step2Buttons = ({ value, className, label, onClick }) => {
    console.log(value);

    const [buttons, setButtons] = useState([false, false, false, false]);

    const button1Clicked = () => {
        setButtons([true, false, false, false])
    }
    const button2Clicked = () => {
        setButtons([false, true, false, false])
    }
    const button3Clicked = () => {
        setButtons([false, false, true, false])
    }
    const button4Clicked = () => {
        setButtons([false, false, false, true])
    }
    switch (buttons) {
        case [true, false, false, false]:
            button1Clicked();
            break;
        case [false, true, false, false]:
            button2Clicked();
            break;
        case [false, false, true, false]:
            button3Clicked();
            break;
        case [false, false, false, true]:
            button4Clicked();
            break;
        default:
            break;
    }

    return (
        <div className={className}>
            <label>{label}</label>
            <div>
                <button className={[true, false, false, false] ? 'buttonSelected' : ''} onClick={(e) => {
                    e.preventDefault()
                    button1Clicked();
                    onClick(0);
                }}>ללא</button>
                <button className={[false, true, false, false] ? 'buttonSelected' : ''} onClick={(e) => {
                    e.preventDefault()
                    button2Clicked();
                    onClick(1);
                }}>1</button>
                <button className={[false, false, true, false] ? 'buttonSelected' : ''} onClick={(e) => {
                    e.preventDefault()
                    button3Clicked();
                    onClick(2);
                }}>2</button>
                <button className={[false, false, false, true] ? 'buttonSelected' : ''} onClick={(e) => {
                    e.preventDefault()
                    button4Clicked();
                    onClick(3);
                }}>3</button>
            </div>
        </div>
    )
}

export default Step2Buttons
