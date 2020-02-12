import React from "react"
import Logo from "./styledComponents/Logo"
import StyledHeader from "./styledComponents/StyledHeader"
import StyledFooter from "./styledComponents/StyledFooter"
import promoData from "./promoData"

import ProductImg from "./styledComponents/ProductImage"

import RedSofiaProBold from "./styledComponents/RedSofiaProBold"
import BrownSofiaPro from "./styledComponents/BrownSofiaPro"


const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
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
              <RedSofiaProBold>{pastry.name}</RedSofiaProBold>
              <BrownSofiaPro>
                Price: {formatter.format(pastry.price)}
              </BrownSofiaPro>
              <BrownSofiaPro>Calories: {pastry.calories}</BrownSofiaPro>
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
