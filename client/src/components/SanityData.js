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
          }
        }
      }
    }
  `

  const { loading, error, data } = useQuery(PULL_DATA)

  if (loading) {
    console.log("Loading")
    return <div>Loading ...</div>
  }

  if (error) {
    console.log(error)
    return <div>Error...</div>
  }

  console.log("Working")

  return (
    <div>
      {/* {console.log(data)} */}
      {console.log("All Data: ", Object.values(data))}
      <h1>Sanity Data Test</h1>

      {Object.values(data).map(sections => {
        // console.log("All Sections: ", sections)
        return sections.map(section => {
          console.log("Section: ", section)
          console.log("Name: ", section.name.en)
          return (
            <CategoryDisplay>
              <RedSofiaProBold>{section.name.en}</RedSofiaProBold>
              {section.options.map(option => {
                return (
                  <div>
                    {console.log("Option: ", option)}

                    <BrownSofiaPro>{option.name.en}</BrownSofiaPro>
                    <ProductImg src={option.image.asset.url} />
                  </div>
                )
              })}
            </CategoryDisplay>
          )
        })
      })}
    </div>
  )
}

export default SanityData
