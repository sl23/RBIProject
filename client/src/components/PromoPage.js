import React from "react"
import Logo from "./styledComponents/Logo"
import StyledHeader from "./styledComponents/StyledHeader"
import PromoFooter from "./styledComponents/promotionStyling/PromoFooter"
import promoData from "./promoData"
import ProductImg from "./styledComponents/ProductImage"

import RedSofiaProBoldPromo from "./styledComponents/RedSofiaProBoldLarge"
import BrownSofiaProPromo from "./styledComponents/BrownSofiaProPromo"
import PromoComponent from "./styledComponents/promotionStyling/PromoComponent"
import MainPageStyle from "./styledComponents/promotionStyling/MainPageStyle"
import PromoBodyStyle from "./styledComponents/promotionStyling/PromoBodyStyle"

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
})

const PromoPage = () => {
  return (
    <PromoBodyStyle>
      <StyledHeader>
        <Logo src="./assets/promotion/nutella/nutellaLogo.jpg" />
      </StyledHeader>
      <MainPageStyle>
        {promoData.nutella.map(pastry => {
          return (
            <PromoComponent>
              <ProductImg src={pastry.image} />
              <div>
                <RedSofiaProBoldPromo>{pastry.name}</RedSofiaProBoldPromo>
                <BrownSofiaProPromo>{formatter.format(pastry.price)}</BrownSofiaProPromo>
                <BrownSofiaProPromo>{pastry.calories} Cals</BrownSofiaProPromo>
              </div>
            </PromoComponent>

          )
        })}
      </MainPageStyle>
      <PromoFooter>
        Nutella® is a registered trademark of Ferrero S.p.A. All rights
        reserved. At participating restaurants for a limited time. TM & © Tim
        Hortons, 2020
      </PromoFooter>
    </PromoBodyStyle>
  )
}
export default PromoPage
