import { Col, HeaderProps } from "../../types/Grid"
import { HeaderItem, HeaderStyled } from "./Header.styled"

const Header:React.FC<HeaderProps> = ({ headerItems }) => {
  return (
    <HeaderStyled>
        {headerItems.map((headerItem: Col) => {
            return (
                <HeaderItem key={headerItem.title}>
                    <div>{headerItem.title}</div>
                    {/* To show the count */}
                    {/* <div>({headerItem.items})</div> */}
                </HeaderItem>
            )
        })}
    </HeaderStyled>
  )
}

export default Header