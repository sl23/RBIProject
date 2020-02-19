import styled from "styled-components"
const MainPageStyle = styled.main`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`
export default MainPageStyle
