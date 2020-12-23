import React from "react"
import CardProduct from "../../components/CardProduct"
import Link from "next/link"

const data = [
  {
    pictures: ["1607798282618-04-Pure-Black-s-800x800.jpg"],
    name: "Highland Unlock",
    category: {
      name: "Cà phê rang xay",
    },
  },
  {
    pictures: ["1607798282618-04-Pure-Black-s-800x800.jpg"],
    name: "Highland Unlock",
    category: {
      name: "Cà phê rang xay",
    },
  },
  {
    pictures: ["1607798282618-04-Pure-Black-s-800x800.jpg"],
    name: "Highland Unlock",
    category: {
      name: "Cà phê rang xay",
    },
  },
]

const ListRecipe = ({ recipes, category }) => {
  return (
    <div className='row'>
      {recipes && recipes.length
        ? recipes.map((recipe) => (
            <div className='col-md-4 col-12 mb-5'>
              <Link href={`cong-thuc/chi-tiet/${recipe?.slug}-${recipe._id}`}>
                <a>
                  <CardProduct recipe={recipe} category={category} />
                </a>
              </Link>
            </div>
          ))
        : null}
    </div>
  )
}

export default ListRecipe
