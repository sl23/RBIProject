import React, { useContext } from "react"
import WeatherContext from "./WeatherContext"

import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"
import CategoryDisplay from "./styledComponents/categoryDisplay"
import ProductImg from "./styledComponents/ProductImage"
import StyledTable from "./styledComponents/InfoTable"
import MenuContainer from "./styledComponents/menuContainer"
import RedSofiaProBold from "./styledComponents/RedSofiaProBold"
import BrownSofiaPro from "./styledComponents/BrownSofiaPro"
import Body from "./styledComponents/Body"
import LoadingScreen from "./styledComponents/LoadingScreen"
import LoaderGIF from "./styledComponents/LoaderGif"
import BrownSofiaProProductName from "./styledComponents/BrownSofiaProProductName"

const SanityData = ({ language }) => {
  // const time = 15
  // const temp = 291
  const { weatherData } = useContext(WeatherContext)
  const time = new Date().getHours()
  let temp = weatherData.main.temp
  let order = []

  if (time > 4 && time <= 11 && temp < 290) {
    order = [
      "Breakfast",
      "Hot Beverages",
      "Baked Goods",
      "Lunch",
      "Cold Beverages"
    ]
  } else if (time > 4 && time <= 11 && temp >= 290) {
    order = [
      "Breakfast",
      "Cold Beverages",
      "Hot Beverages",
      "Baked Goods",
      "Lunch"
    ]
  } else if (time > 11 && time <= 14 && temp < 290) {
    order = [
      "Lunch",
      "Hot Beverages",
      "Baked Goods",
      "Breakfast",
      "Cold Beverages"
    ]
  } else if (time > 11 && time <= 14 && temp >= 290) {
    order = [
      "Lunch",
      "Cold Beverages",
      "Baked Goods",
      "Breakfast",
      "Hot Beverages"
    ]
  } else if (temp >= 290) {
    order = [
      "Baked Goods",
      "Lunch",
      "Hot Beverages",
      "Cold Beverages",
      "Breakfast"
    ]
  } else {
    order = [
      "Baked Goods",
      "Lunch",
      "Cold Beverages",
      "Hot Beverages",
      "Breakfast"
    ]
  }

  const PULL_DATA = gql`
    query {
      allSections(where: { _id_not: "2b3f7af1-9526-419b-9de7-248fe4d5c006" }) {
        _id
        name {
          en
          fr
        }
        options {
          ... on Picker {
            _type
            name {
              en
              fr
            }
            image {
              asset {
                url
              }
            }
            pickerAspects {
              pickerAspectOptions {
                name {
                  en
                  fr
                }
              }
            }
            options {
              option {
                ... on Item {
                  name {
                    en
                    fr
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
          ... on Item {
            _type
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

  if (loading) {
    return (
      <LoadingScreen>
        <LoaderGIF src={require("../assets/logo/LogoLoader.gif")} />
      </LoadingScreen>
    )
  }

  if (error) {
    console.log(error)

    return <div>Error...</div>
  }

  const changedSections = data.allSections.reduce((acc, section) => {
    acc[section.name.en] = section

    return acc
  }, {})

  return (
    <Body>
      {Object.values(data).map(sections => {
        return order.map(name => {
          return (
            <div>
              <RedSofiaProBold>
                {changedSections[name].name[language]}
              </RedSofiaProBold>

              <MenuContainer name={changedSections[name].name.en}>
                {changedSections[name].options.map(option => {
                  return (
                    <CategoryDisplay>
                      <div>
                        <ProductImg src={option.image.asset.url} />

                        <BrownSofiaProProductName>
                          {option.name[language]}
                        </BrownSofiaProProductName>

                        {/* conditional rendering to display different things based on whether its a section/item */}
                        {option._type === "picker" && (
                          <StyledTable>
                            <tr>
                              {option.pickerAspects[1] != null && (
                                <th>
                                  <BrownSofiaPro>Options</BrownSofiaPro>
                                </th>
                              )}

                              {option.pickerAspects[0].pickerAspectOptions.map(
                                pickerAspect => {
                                  return (
                                    <th>
                                      <BrownSofiaPro>
                                        {pickerAspect.name[language]}
                                      </BrownSofiaPro>
                                    </th>
                                  )
                                }
                              )}
                            </tr>

                            {option.pickerAspects[1] != null &&
                              option.pickerAspects[1].pickerAspectOptions.map(
                                (pickerAspect, pindex) => {
                                  return (
                                    <tr>
                                      <td>{pickerAspect.name[language]}</td>
                                      {option.options
                                        .filter((item, index) => {
                                          return (
                                            index <
                                              option.pickerAspects[0]
                                                .pickerAspectOptions.length *
                                                (pindex + 1) &&
                                            index >=
                                              option.pickerAspects[0]
                                                .pickerAspectOptions.length *
                                                pindex
                                          )
                                        })
                                        .map(item => {
                                          return (
                                            <td>
                                              ${item.option.prices[0].price}{" "}
                                              <br />
                                              {
                                                item.option.nutrition.calories
                                              }{" "}
                                              Cals
                                            </td>
                                          )
                                        })}
                                    </tr>
                                  )
                                }
                              )}

                            {option.pickerAspects[1] == null &&
                              option.options.map(item => {
                                return (
                                  <td>
                                    ${item.option.prices[0].price} <br />
                                    {item.option.nutrition.calories} Cals
                                  </td>
                                )
                              })}
                          </StyledTable>
                        )}
                        {option._type === "item" && (
                          <div>
                            ${option.prices[0].price}
                            <br />
                            {option.nutrition.calories} Cals
                          </div>
                        )}
                      </div>
                    </CategoryDisplay>
                  )
                })}
              </MenuContainer>
            </div>
          )
        })
      })}
    </Body>
  )
}

export default SanityData
