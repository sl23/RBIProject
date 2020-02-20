import React, { useEffect } from "react"
import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"
import CategoryDisplay from "./styledComponents/categoryDisplay"
import ProductImg from "./styledComponents/ProductImage"
import StyledRows from "./styledComponents/StyledTR"
import StyledTable from "./styledComponents/InfoTable"
import MenuContainer from "./styledComponents/menuContainer"
import RedSofiaProBold from "./styledComponents/RedSofiaProBold"
import BrownSofiaPro from "./styledComponents/BrownSofiaPro"
import OptionCell from "./styledComponents/TableHeaderCell"
import Body from "./styledComponents/Body"

const SanityData = () => {
  const order = [
    "Breakfast",
    "Hot Beverages",
    "Baked Goods",
    "Cold Beverages",
    "Lunch"
  ]

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
    return <div>Brewing your coffee...</div>
  }

  if (error) {
    console.log(error)

    return <div>Error...</div>
  }
  console.log("DATA: ", data)
  console.log("DATA[0]: ", data[0])

  const changedSections = data.allSections.reduce((acc, section) => {
    acc[section.name.en] = section
    return acc
  }, {})
  console.log("DATA All Sections: ", changedSections)

  // useEffect(() => {
  //   // data = [].concat(data).sort((a, b) => )
  // })
  return (
    <Body>
      {order.map(name => {
        return <div>{changedSections[name].name.en}</div>
      })}
      {/* {console.log(data)} */}
      {console.log("All Data: ", Object.values(data))}

      {Object.values(data).map(sections => {
        console.log("All Sections: ", sections)
        return order.map(name => {
          console.log("Name: ", changedSections[name].name.en)
          return (
            <div>
              <RedSofiaProBold>{changedSections[name].name.en}</RedSofiaProBold>

              <MenuContainer>
                {changedSections[name].options.map(option => {
                  return (
                    <CategoryDisplay>
                      {/* {console.log("Option: ", option)} */}

                      <div>
                        <ProductImg src={option.image.asset.url} />

                        <BrownSofiaPro>{option.name.en}</BrownSofiaPro>

                        {/* conditional rendering to display different things based on whether its a section/item */}
                        {option._type == "picker" && (
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
                                        {pickerAspect.name.en}
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
                                      <td>{pickerAspect.name.en}</td>
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
                                    {console.log(item.option)}$
                                    {item.option.prices[0].price} <br />
                                    {item.option.nutrition.calories} Cals
                                  </td>
                                )
                              })}
                          </StyledTable>
                        )}
                        {option._type == "item" && (
                          <div>
                            {console.log("item: ", option)}
                            {console.log("price: ", option.prices[0].price)}$
                            {option.prices[0].price}
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
