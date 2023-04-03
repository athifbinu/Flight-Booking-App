import React from 'react'
import {BsFillBookmarksFill} from "react-icons/bs"


const OfferCard = (props) => {



    const {imgUrl,title}=props.item
  return (
    <div className="single_offer_items">
    <div className="offer_img">
        <img src={imgUrl} alt=""  className='w-100'/>
    </div>

    <div className="offer-detales mb-4">
           <h3 className='offer-title'>
               {title}
           </h3>

           <div className='d-flex justify-content-betweem align-items-center'>
            <p className='offfer d-flex
             align-items-center gap-1'>
                 <BsFillBookmarksFill/>
                <button className='boking-btn'>Book Now</button>
            </p>

           </div>


      


    </div>
</div>
  )
}

export default OfferCard
