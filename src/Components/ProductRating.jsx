import React from 'react'
import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa'

const ProductRating = ({value,text}) => {
  return (
    <>
    
        <span className='me-2' style={{color: '#f8e825'}}>
        {value >= 1 ? <FaStar/> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar/> }
        {value >= 2 ? <FaStar/> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar/> }
        {value >= 3 ? <FaStar/> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar/> }
        {value >= 4 ? <FaStar/> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar/> }
        {value >= 5 ? <FaStar/> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar/> }
      </span>
      <span >{text && text}</span>

    </>
    
  )
}

export default ProductRating