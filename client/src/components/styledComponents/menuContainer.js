import styled, { css } from "styled-components"
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 30vh;
  width: 100vw;
  @media screen and (max-width: 1094px) {
    flex-wrap: wrap;
    justify-content: center;
    & > div {
      width: 100%;
    }
  }

  ${props =>
    props.name == "Baked Goods" &&
    css`
      & > div {
        width: 20%;
      }
      @media screen and (max-width: 1094px) {
        & > div {
          width: 50%;
        }
      }
      @media screen and (max-width: 805px) {
        & > div {
          width: 100%;
        }
      }
    `}

  ${props =>
    props.name != "Baked Goods" &&
    css`
      & > div {
        width: 33%;
      }
      @media screen and (max-width: 1094px) {
        & > div {
          width: 50%;
        }
      }
      @media screen and (max-width: 805px) {
        & > div {
          width: 100%;
        }
      }
    `}
`

export default MenuContainer
