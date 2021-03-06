import React from "react"
import menuData from "./MenuData"
import CategoryDisplay from "./styledComponents/categoryDisplay"
import ProductImg from "./styledComponents/ProductImage"
import StyledRows from "./styledComponents/StyledTR"
import StyledTable from "./styledComponents/InfoTable"
import MenuContainer from "./styledComponents/menuContainer"
import RedSofiaProBold from "./styledComponents/RedSofiaProBold"
import BrownSofiaPro from "./styledComponents/BrownSofiaPro"
import OptionCell from "./styledComponents/TableHeaderCell"
import BrownSofiaProProductName from "./styledComponents/BrownSofiaProProductName"

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
            <div>
              <ProductImg src={products.image} />

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
                        <BrownSofiaProProductName>
                          {option.name}
                        </BrownSofiaProProductName>
                      </OptionCell>
                      {option.details.map(detail => {
                        return (
                          <td>
                            <BrownSofiaPro>
                              ${detail.price}
                              <br /> {detail.calories}Cals
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
