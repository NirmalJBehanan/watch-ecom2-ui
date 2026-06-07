import React from 'react'
import "../App.css"

const Banner = ({img}) => {
  return (
    <div className="banner1">
        <img className='ban' src={img} alt="banner" />
    </div>
  )
}

export default Banner