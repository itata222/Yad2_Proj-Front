import React, { useState } from 'react'
import Spinner from '../../main/Spinner'
import NewPostHeader from './newPostHeader';
import NewPostStepper from './NewPostStepper'

const NewPost = () => {
    const [showSpinner, setShowSpinner] = useState(false);

    return (
        <div className="newPost">
            {showSpinner && <Spinner />}
            <NewPostHeader />
            <div className="newPostContainer">
                <NewPostStepper setShowSpinner={setShowSpinner} />
            </div>
        </div>
    )
}

export default NewPost
