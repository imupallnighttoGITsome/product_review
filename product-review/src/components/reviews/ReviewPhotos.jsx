import React from 'react'
import earbuds from '../../assets/earbuds_1.png'
import earbudsTwo from '../../assets/earbuds_2.png'
import earbudCase from '../../assets/earbud_case.png'

const ReviewPhotos = (props) => {
    console.log(props.images)
    return (
    <div className="container">
        <img src={earbuds} alt='earbuds'/>
        <img src={earbudsTwo} alt='earbuds'/>
        <img src={earbudCase} alt='earbud case'/>
    </div>
    )

}

export default ReviewPhotos