import styled from "styled-components"
const PromoComponent = styled.article`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  align-self: center;

  @media screen and (max-width: 1400px) {
    margin-left: 15vw;
    margin-right: 15vw;
  }
  @media screen and (max-width: 600px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }
`
export default PromoComponent
