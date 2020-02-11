import React from "react"
import menuData from "./MenuData"

const ItemComponent = () => {
  // selects the menusection that is displayed. Can be modified to map over categories later on.
  const menuSection = "hotBeverages"
  console.log(menuData)

  return (
    <div>
      {menuData[menuSection].map(products => {
        //code for displaying individual product section
        return (
          <div>
            <div>{products.name}</div>
            <img src={products.image} />
            <table>
              <tr>
                <th>Blend</th>
                {Object.values(products.size).map(size => {
                  return <th>{size.name}</th>
                })}
              </tr>
              {Object.values(products.blend).map(blend => {
                console.log(blend)
                return (
                  <tr>
                    <td>{blend}</td>
                    {Object.values(products.size).map(size => {
                      return <td>${size.price}</td>
                    })}
                  </tr>
                )
              })}
            </table>
          </div>
        )
      })}
    </div>
  )
}

export default ItemComponent
