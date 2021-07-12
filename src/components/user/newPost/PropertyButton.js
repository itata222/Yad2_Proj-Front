import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
    faSnowflake,
    faHouseDamage,
    faBoxOpen,
    faDoorClosed,
    faChair,
    faWheelchair,
    faDungeon,
    faHome,
    faPaintRoller,
    faFaucet,
    faSolarPanel,
    faBars
} from '@fortawesome/free-solid-svg-icons';

const PropertyButton = ({ text, index }) => {

    const [buttonSelected, setButtonSelected] = useState(false);
    const icons = [faSnowflake, faHouseDamage, faBoxOpen, faDoorClosed, faChair,
        faWheelchair, faDungeon, faHome, faPaintRoller, faFaucet, faSolarPanel, faBars]

    const buttonClicked = (buttonNumber) => {
        switch (buttonNumber) {
            case index:
                setButtonSelected(!buttonSelected)
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <button onClick={() => buttonClicked(index)} className={buttonSelected ? "buttonSelected" : ''}>
                <FontAwesomeIcon icon={icons[index]} />
                <span>{text}</span>
            </button>
        </div>
    )
}

export default PropertyButton
