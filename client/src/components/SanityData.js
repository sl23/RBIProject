import React from "react"
import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"

const SanityData = () => {
  const PULL_DATA = gql`
    query {
      allSections {
        _id
        name {
          en
        }
        options {
          ... on Picker {
            name {
              en
            }
          }
        }
      }
    }
  `

  const { loading, error, data } = useQuery(PULL_DATA)

  if (loading) {
    console.log("Loading")
  }

  if (error) {
    console.log(error)
  }

  console.log("Working")

  return (
    <div>
      {console.log(data)}
      {console.log("test")}
      <h1>Sanity Data Test</h1>
    </div>
  )
}

export default SanityData
