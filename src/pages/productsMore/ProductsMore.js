import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BasketCards, CardsList } from '../../utils/List'
import './ProductsMore.scss'

export default function ProductsMore() {
  let {id} = useParams()
  const data = CardsList.find(item => item.id == id)
  
  return (
    <>
     <div className="more">
        <Link className='more_back-btn' to={'/products'}>Go back</Link>
        <div className="more_container">
          <div className="more_row">
            <div className="more_img">
              <img src={data.url} alt="" />
            </div>
            <div className="more_text">
              <p>
                {data.title}
              </p>
              <b>{data.price}</b>
            </div>
          </div>
          <div className="more_add-btn">
            <button onClick={() => BasketCards.push(data)}>Add</button>
          </div>
        </div>
     </div>
    </>
  )
}
