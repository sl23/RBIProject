import React from "react"
import Logo from "./styledComponents/Logo"
import StyledHeader from "./styledComponents/StyledHeader"
import StyledFooter from "./styledComponents/StyledFooter"
const PromoPage = () => {
  return (
    <div>
      <StyledHeader>
        <Logo src="./assets/promotion/nutella/nutellaLogo.jpg" />
      </StyledHeader>
      <StyledFooter>This is a legal disclaimer</StyledFooter>
    </div>
  )
}
export default PromoPage
