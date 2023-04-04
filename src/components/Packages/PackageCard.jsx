import React from 'react'
import "./Packages.css"

const PackageCard = (props) => {

    const { imgUrl, title, rating } = props.item;
  return (
    <div className="single__free__course">
    <div className="package__img mb-5">
      <img src={imgUrl} alt="" className="w-100" />
      <button className="btn package__btn">Free</button>
    </div>

    <div className="package__details">
      <h6>{title}</h6>

      <div className=" d-flex align-items-center gap-5">

        <span className=" d-flex align-items-center gap-2">
          <i class="ri-star-fill"></i> {rating}k
        </span>
      </div>
    </div>
  </div>
  )
}

export default PackageCard
