import React from "react"
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

const SanityData = () => {
  const PULL_DATA = gql`
    query {
      allSections(where: { _id_not: "2b3f7af1-9526-419b-9de7-248fe4d5c006" }) {
        _id
        name {
          en
        }
        options {
          ... on Picker {
            _type
            name {
              en
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
                }
              }
            }
            options {
              option {
                ... on Item {
                  name {
                    en
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
    return <div>Loading...</div>
  }

  if (error) {
    console.log(error)

    return <div>Error...</div>
  }
  return (
    <div>
      {/* {console.log(data)} */}
      {console.log("All Data: ", Object.values(data))}
      <h1>Sanity Data Test</h1>

      {Object.values(data).map(sections => {
        // console.log("All Sections: ", sections)
        return sections.map(section => {
          console.log("Name: ", section.name.en)
          return (
            <div>
              <RedSofiaProBold>{section.name.en}</RedSofiaProBold>
              {section.options.map(option => {
                return (
                  <CategoryDisplay>
                    {/* {console.log("Option: ", option)} */}

                    <ProductImg src={option.image.asset.url} />
                    <div>
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
            </div>
          )
        })
      })}
    </div>
  )
}

export default SanityData
