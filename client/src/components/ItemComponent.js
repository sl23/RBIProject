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

              {products.options.map(option => {
                return (
                  <tr>
                    <td>{option.name}</td>
                    {option.details.map(detail => {
                      return (
                        <td>
                          ${detail.price} {detail.calories}Cals
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </table>
          </div>
        )
      })}
    </CategoryDisplay>
  )
}

export default ItemComponent
