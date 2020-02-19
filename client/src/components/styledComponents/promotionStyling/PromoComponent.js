import styled from "styled-components"
const PromoComponent = styled.article`
  display: flex;
  flex-direction: row;
  height: 40vh;
  @media screen and (max-width: 1400px) {
    justify-content: center;
    height: 20vh;
  }
`
export default PromoComponent
