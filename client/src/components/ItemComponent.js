import React from "react"
import menuData from "./MenuData"
import CategoryDisplay from "./styledComponents/categoryDisplay"
import ProductImg from "./styledComponents/ProductImage"
import { object } from "prop-types"
import StyledRows from "./styledComponents/StyledTR"
import StyledTable from "./styledComponents/InfoTable"
import MenuContainer from "./styledComponents/menuContainer"
import RedSofiaProBold from "./styledComponents/RedSofiaProBold"
import BrownSofiaPro from "./styledComponents/BrownSofiaPro"
import OptionCell from "./styledComponents/TableHeaderCell"

const ItemComponent = ({ type }) => {
  // selects the menusection that is displayed. Can be modified to map over categories later on.
  console.log(menuData)

  return (
    <MenuContainer>
      {menuData[type].map(products => {
        //code for displaying individual product section
        console.log("Product Object: ", products)
        return (
          <CategoryDisplay>
            <ProductImg src={products.image} />
            <div>
              <RedSofiaProBold>{products.name}</RedSofiaProBold>

              <StyledTable>
                <tr>
                  <th></th>
                  {products.options[0].details.map(detail => {
                    console.log("options: ", detail)

                    return (
                      <th>
                        <BrownSofiaPro>{detail.size}</BrownSofiaPro>
                      </th>
                    )
                  })}
                </tr>

                {products.options.map(option => {
                  return (
                    <StyledRows>
                      <OptionCell>
                        <BrownSofiaPro>{option.name}</BrownSofiaPro>
                      </OptionCell>
                      {option.details.map(detail => {
                        return (
                          <td>
                            <BrownSofiaPro>
                              ${detail.price} {detail.calories}Cals
                            </BrownSofiaPro>
                          </td>
                        )
                      })}
                    </StyledRows>
                  )
                })}
              </StyledTable>
            </div>
          </CategoryDisplay>
        )
      })}
    </MenuContainer>
  )
}

export default ItemComponent
