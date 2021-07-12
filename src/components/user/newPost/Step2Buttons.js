import React, { useState } from 'react'

const Step2Buttons = ({ className, label }) => {
    const [button1Selected, setButton1Selected] = useState(false);
    const [button2Selected, setButton2Selected] = useState(false);
    const [button3Selected, setButton3Selected] = useState(false);
    const [button4Selected, setButton4Selected] = useState(false);

    return (
        <div className={className}>
            <label>{label}</label>
            <div>
                <button className={button1Selected ? 'buttonSelected' : ''} onClick={() => setButton1Selected(!button1Selected)}>ללא</button>
                <button className={button2Selected ? 'buttonSelected' : ''} onClick={() => setButton2Selected(!button2Selected)}>1</button>
                <button className={button3Selected ? 'buttonSelected' : ''} onClick={() => setButton3Selected(!button3Selected)}>2</button>
                <button className={button4Selected ? 'buttonSelected' : ''} onClick={() => setButton4Selected(!button4Selected)}>3</button>
            </div>
        </div>
    )
}

export default Step2Buttons
