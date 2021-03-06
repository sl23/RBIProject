import React from "react"
import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"

import Logo from "./styledComponents/Logo"
import StyledHeader from "./styledComponents/StyledHeader"
import PromoFooter from "./styledComponents/promotionStyling/PromoFooter"
import PromoImg from "./styledComponents/promotionStyling/PromoImg"
import RedSofiaProBoldLarge from "./styledComponents/promotionStyling/RedSofiaProBoldLarge"
import BrownSofiaProPromo from "./styledComponents/promotionStyling/BrownSofiaProPromo"
import PromoComponent from "./styledComponents/promotionStyling/PromoComponent"
import MainPageStyle from "./styledComponents/promotionStyling/MainPageStyle"
import PromoBodyStyle from "./styledComponents/promotionStyling/PromoBodyStyle"
import PromoText from "./styledComponents/promotionStyling/PromoText"

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
})

const PromoPage = ({ language }) => {
  const PULL_DATA = gql`
    query {
      Section(id: "2b3f7af1-9526-419b-9de7-248fe4d5c006") {
        _id
        name {
          en
          fr
        }
        options {
          ... on Item {
            name {
              en
              fr
            }

            image {
              asset {
                url
              }
            }
            prices {
              price
            }
            nutrition {
              calories
            }
          }
        }
      }
    }
  `

  const { loading, error, data } = useQuery(PULL_DATA)
  if (language === "fr") {
    if (loading) {
      console.log("Loading")
      return <div>Chargement...</div>
    }

    if (error) {
      console.log(error)
      return <div>Erreur</div>
    }
  }
  if (loading) {
    console.log("Loading")
    return <div>Loading...</div>
  }
  if (error) {
    console.log(error)
    return <div>Error</div>
  }

  return (
    <PromoBodyStyle>
      <StyledHeader>
        <Logo src="./assets/promotion/nutella/nutellaLogo.jpg" />
      </StyledHeader>
      <MainPageStyle>
        {data.Section.options.map(pastry => {
          return (
            <PromoComponent>
              {console.log(language)}
              <PromoImg src={pastry.image.asset.url} />
              <div>
                <RedSofiaProBoldLarge>
                  {pastry.name[language]}
                </RedSofiaProBoldLarge>
                <BrownSofiaProPromo>
                  {formatter.format(pastry.prices[0]["price"])}
                </BrownSofiaProPromo>
                <BrownSofiaProPromo>
                  {pastry.nutrition.calories} Cals
                </BrownSofiaProPromo>
              </div>
            </PromoComponent>
          )
        })}
      </MainPageStyle>
      <PromoFooter>
        {language === "fr"
          ? "Nutella® est une marque déposée de Ferrero S.p.A. Tous droits réservés. Dans les restaurants participants pour une durée limitée. TM & © Tim Hortons, 2020"
          : "Nutella® is a registered trademark of Ferrero S.p.A. All rights reserved. At participating restaurants for a limited time. TM & © Tim Hortons, 2020"}
      </PromoFooter>
    </PromoBodyStyle>
  )
}
export default PromoPage
