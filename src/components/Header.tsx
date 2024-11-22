// src/components/Header.tsx
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const HeaderContainer = styled.header`
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartIcon = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
`;

export const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <img
            src="/trolley.png"
            alt="Paradise Nursery logo"
            style={{ width: "40px", height: "40px" }}
          />
          <h1>Paradise Nursery</h1>
        </Logo>

        <NavItem to="/products">🪴 Products</NavItem>
        <CartIcon to="/cart">
          🛒
          {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
        </CartIcon>
      </Nav>
    </HeaderContainer>
  );
};
