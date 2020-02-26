import styled from "styled-components"
const MainPageStyle = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100%;
  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`
export default MainPageStyle
