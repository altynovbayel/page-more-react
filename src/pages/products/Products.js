import React from 'react'
import Card from '../../components/card/Card'
import Footer from '../../components/footer/Footer'
import { CardsList } from '../../utils/List'
import './Products.scss'


export default function Products() {
  return (
    <>
      <div className="banner">
        <h1>Products</h1>
      </div>
      <div className="container">
        <div className="row">
          {
            CardsList.map(item => {
              return (
                <Card key={item.id} base={{ title: item.title, id: item.id, price: item.price, url: item.url }} />
              )
            })
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}
