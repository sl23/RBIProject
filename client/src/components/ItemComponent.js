import React from "react"
import menuData from "./MenuData"
import CategoryDisplay from "./styledComponents/categoryDisplay"
import ProductImg from "./ProductImage"
import { object } from "prop-types"

const ItemComponent = () => {
  // selects the menusection that is displayed. Can be modified to map over categories later on.
  const menuSection = "hotBeverages"
  console.log(menuData)

  return (
    <CategoryDisplay>
      {menuData[menuSection].map(products => {
        //code for displaying individual product section
        console.log("Product Object: ", products)
        return (
          <div>
            <div>{products.name}</div>
            <ProductImg src={products.image} />
            <table>
              <tr>
                <th>Options</th>
                {products.options[0].details.map(detail => {
                  console.log("options: ", detail)

                  return <th>{detail.size}</th>
                })}
              </tr>
              <tr>
                {Object.values(products.options).map(detail => {
                  Object.values(detail).map(size => {
                    console.log(size)
                  })
                  return (
                    <div>
                      <td>{detail.name}</td>
                    </div>
                  )
                })}
              </tr>
              {console.log(products.options.detail)}
              {/* {Object.values(products.options).map(blend => {
                // console.log(blend)
                return (
                  <tr>
                    <td>{blend}</td>
                    {Object.values(products.size).map(size => {
                      return <td>${size.price}</td>
                    })}
                  </tr>
              ) })} */}
            </table>
          </div>
        )
      })}
    </CategoryDisplay>
  )
}

export default ItemComponent
