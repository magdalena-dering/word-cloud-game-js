import React from "react"
import { StyledMainContainer } from "./styles"

const MainContainer = ({ children, center }) => (
  <StyledMainContainer center={center}>{children}</StyledMainContainer>
)

export default MainContainer
