// src/pages/Cart.tsx
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import { Button } from "../components/Button";

const CartContainer = styled.div`
  padding: 80px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const QuantityControls = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Summary = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: ${(props) => props.theme.colors.lightGray};
  border-radius: 8px;
`;

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContainer>
      <h1>Shopping Cart ({totalItems} items)</h1>

      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <img src={item.image} alt={item.name} style={{ width: 100 }} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
          <QuantityControls>
            <Button onClick={() => dispatch(decrementQuantity(item.id))}>
              -
            </Button>
            <span>{item.quantity}</span>
            <Button onClick={() => dispatch(incrementQuantity(item.id))}>
              +
            </Button>
            <Button
              variant="secondary"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </Button>
          </QuantityControls>
        </CartItem>
      ))}

      <Summary>
        <h2>Total: ${totalCost.toFixed(2)}</h2>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Button as={Link} to="/products">
            Continue Shopping
          </Button>
          <Button
            onClick={() =>
              alert(totalItems === 0 ? "Your cart is empty!" : "Coming Soon!")
            }
          >
            Checkout
          </Button>
        </div>
      </Summary>
    </CartContainer>
  );
};
