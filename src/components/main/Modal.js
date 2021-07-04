import React from 'react';

const Modal = () => {
    return (
        <div className="modal">
            <div className='modal-content'>
                <h4>{someText || 'blabla'}</h4>
                <button>Great</button>
            </div>
        </div>
    )
}


export default Modal