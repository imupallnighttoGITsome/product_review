import React from 'react'
import earbuds from '../../public/earbuds_1.png'
import earbudsTwo from '../../public/earbuds_2.png'
import earbudCase from '../../public/earbud_case.png'

const ReviewPhotos = () => {
    return (
    <section class="container">
        <div class="photos">
            <img src={earbuds} alt='earbuds'/>
            <img src={earbudsTwo} alt='earbuds'/>
            <img src={earbudCase} alt='earbud case'/>
        </div>
    </section>
    )

}

export default ReviewPhotos