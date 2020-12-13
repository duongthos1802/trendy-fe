import React from 'react'
import CardProduct from '../../components/CardProduct'

const data = [
  {
    pictures: ["1607798282618-04-Pure-Black-s-800x800.jpg"],
    name: "Highland Unlock",
    category: {
      name: "Cà phê rang xay"
    }
  },
  {
    pictures: ["1607798282618-04-Pure-Black-s-800x800.jpg"],
    name: "Highland Unlock",
    category: {
      name: "Cà phê rang xay"
    }
  },
  {
    pictures: ["1607798282618-04-Pure-Black-s-800x800.jpg"],
    name: "Highland Unlock",
    category: {
      name: "Cà phê rang xay"
    }
  }
]

const ListRecipe = () => {
  return (
    <div className="row">
      {
        data.map(product => (
          <div className="col-6">
            <CardProduct
              product={product}
              category={product.category}
            />
          </div>
        ))
      }


    </div>
  )
}

export default ListRecipe