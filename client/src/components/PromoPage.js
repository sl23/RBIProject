import React from "react"
import Logo from "./styledComponents/Logo"
import StyledHeader from "./styledComponents/StyledHeader"
import StyledFooter from "./styledComponents/StyledFooter"
import promoData from "./promoData"
import ProductImg from "./ProductImage"

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: 2
})

const PromoPage = () => {
  return (
    <div>
      <StyledHeader>
        <Logo src="./assets/promotion/nutella/nutellaLogo.jpg" />
      </StyledHeader>
      <body>
        {promoData.nutella.map(pastry => {
          return (
            <div>
              <ProductImg src={pastry.image} />
              {pastry.name}
              {formatter.format(pastry.price)}
              {pastry.calories}
            </div>
          )
        })}
      </body>
      <StyledFooter>
        Nutella® is a registered trademark of Ferrero S.p.A. All rights
        reserved. At participating restaurants for a limited time. TM & © Tim
        Hortons, 2020
      </StyledFooter>
    </div>
  )
}
export default PromoPage
