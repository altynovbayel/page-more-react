import React from 'react'
import Card from '../../components/card/Card'
import { BasketCards } from '../../utils/List'
import '../products/Products.scss'

export default function Basket() {
  
  return (
    <div>
      <h1>Basket</h1>

      <div className="row">
        {
          BasketCards.map(item => {
            return (
              <Card key={item.id} base={{ title: item.title, id: item.id, price: item.price, url: item.url }} />
            )
          })
        }
      </div>
    </div>
  )
}
