import styled from "styled-components"
import { palette } from '../../constants/palette';

const { red } = palette;

export const StyledError = styled.p`
  color: ${red};
  font-size: 15px;
  text-align: center;
`