import earbuds from '../../assets/earbuds_1.png'
import earbudsTwo from '../../assets/earbuds_2.png'
import earbudCase from '../../assets/earbud_case.png'

const ReviewPhotos = (props) => {


    return (
    <div className="container" id="photos">
        <img className="product-photo" src={earbuds} alt='earbuds'/>
        <img className="product-photo" src={earbudsTwo} alt='earbuds'/>
        <img className="product-photo" src={earbudCase} alt='earbud case'/>
    </div>
    )

}

export default ReviewPhotos