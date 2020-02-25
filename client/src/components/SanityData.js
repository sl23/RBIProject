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

const SanityData = ({ language }) => {
  const time = new Date().getHours()
  const { weatherData } = useContext(WeatherContext)
  let temp = weatherData.main.temp
  let order = []

  // day part adjustments

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
  } else if (time > 11 && time <= 2 && temp < 290) {
    order = [
      "Lunch",
      "Hot Beverages",
      "Baked Goods",
      "Breakfast",
      "Cold Beverages"
    ]
  } else if (time > 11 && time <= 2 && temp >= 290) {
    order = [
      "Lunch",
      "Cold Beverages",
      "Baked Goods",
      "Breakfast",
      "Hot Beverages"
    ]
  } else {
    order = [
      "Baked Goods",
      "Hot Beverages",
      "Cold Beverages",
      "Breakfast",
      "Lunch"
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
    console.log("Loading")
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
  // console.log("DATA: ", data)
  // console.log("DATA[0]: ", data[0])

  const changedSections = data.allSections.reduce((acc, section) => {
    acc[section.name.en] = section
    console.log("acc:", acc)
    return acc
  }, {})
  console.log("DATA All Sections: ", changedSections)

  // useEffect(() => {
  //   // data = [].concat(data).sort((a, b) => )
  // })
  return (
    <Body>
      {Object.values(data).map(sections => {
        // console.log("All Sections: ", sections)
        return order.map(name => {
          // console.log("Name: ", changedSections[name].name.en)
          return (
            <div>
              <RedSofiaProBold>
                {changedSections[name].name[language]}
              </RedSofiaProBold>

              <MenuContainer name={changedSections[name].name.en}>
                {changedSections[name].options.map(option => {
                  return (
                    <CategoryDisplay>
                      {/* {console.log("Option: ", option)} */}

                      <div>
                        <ProductImg src={option.image.asset.url} />

                        <BrownSofiaPro>{option.name[language]}</BrownSofiaPro>

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
                                          // console.log("index: ", index)
                                          // console.log(
                                          //   "length: ",
                                          //   option.pickerAspects[0]
                                          //     .pickerAspectOptions.length
                                          // )
                                          // console.log("pindex: ", pindex)
                                          // console.log(
                                          //   "Upper ",
                                          //   "index: ",
                                          //   index,
                                          //   option.pickerAspects[0]
                                          //     .pickerAspectOptions.length *
                                          //     (pindex + 1)
                                          // )
                                          // console.log(
                                          //   "Lower: ",
                                          //   "index: ",
                                          //   index,
                                          //   option.pickerAspects[0]
                                          //     .pickerAspectOptions.length * pindex
                                          // )
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
