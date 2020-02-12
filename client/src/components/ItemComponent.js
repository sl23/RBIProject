import React from "react"
import menuData from "./MenuData"
import CategoryDisplay from "./styledComponents/categoryDisplay"
import ProductImg from "./styledComponents/ProductImage"
import { object } from "prop-types"
import StyledRows from "./styledComponents/StyledTR"
import StyledTable from "./styledComponents/InfoTable"
import MenuContainer from "./styledComponents/menuContainer"

const ItemComponent = () => {
  // selects the menusection that is displayed. Can be modified to map over categories later on.
  const menuSection = "coldBeverages"
  console.log(menuData)

  return (
    <MenuContainer>
      {menuData[menuSection].map(products => {
        //code for displaying individual product section
        console.log("Product Object: ", products)
        return (
          <CategoryDisplay>
            <ProductImg src={products.image} />
            <div>{products.name}</div>
            <StyledTable>
              <tr>
                <th>Options</th>
                {products.options[0].details.map(detail => {
                  console.log("options: ", detail)

                  return <th>{detail.size}</th>
                })}
              </tr>

              {products.options.map(option => {
                return (
                  <StyledRows>
                    <td>{option.name}</td>
                    {option.details.map(detail => {
                      return (
                        <td>
                          ${detail.price} {detail.calories}Cals
                        </td>
                      )
                    })}
                  </StyledRows>
                )
              })}
            </StyledTable>
          </CategoryDisplay>
        )
      })}
    </MenuContainer>
  )
}

export default ItemComponent
