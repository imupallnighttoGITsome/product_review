import React from 'react';


const Modal = (props) => {
    console.log(props)
    if (!props.show) {
        return null
    }
    return (
    <div>
        <div className='modal'>
            <div className='modal-content'>
                <h4 className='modal-title'>FULL REVIEW</h4>
            <div className='modal-body'>
            After a few days of experience, I found that the battery life is really great. The A13 process upgrade and Dolorem culpa temporibus libero ducimus atque fuga quisquam ad quaerat, reprehenderit natus voluptates, labore, explicabo ratione! Facere maxime incidunt neque, velit unde illum ipsa.
            </div>
            <div className='modal-footer'>
                <button onClick={props.onClose} className='button'>CLOSE</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Modal