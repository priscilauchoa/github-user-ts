import styled from "@emotion/styled"
import { Link } from "react-router-dom"

interface LinkStyledProps {
    color?: string;
}
const LinkStyled = styled(Link)<LinkStyledProps>`
    margin: 20px;
    color: ${(props) => (props.color)};
    &:hover {
        color: violet;
      }
`
export default LinkStyled;