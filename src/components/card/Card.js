import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

export default function Card({base}) {
  return (
    <>
      <div className="card">
        <div className="card_img">
          <img src={base.url} alt="" />
        </div>
        <div className="card_text">
          <p>
            {base.title}
          </p>
          <b>{base.price}</b>
        </div>
        <div className="card_btn">
          <Link className='button' to={`/products/${base.id}`}>More</Link>
        </div>
      </div>
    </>
  )
}
