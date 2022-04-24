import { Col, HeaderProps } from "../../types/Grid"
import { HeaderItem, HeaderStyled } from "./Header.styled"

const Header:React.FC<HeaderProps> = ({ headerItems }) => {
  return (
    <HeaderStyled>
        {headerItems.map((headerItem: Col) => {
            return (
                <HeaderItem key={headerItem.title}>
                    <p>{headerItem.title}</p>
                </HeaderItem>
            )
        })}
    </HeaderStyled>
  )
}

export default Header