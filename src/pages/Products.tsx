// src/pages/Products.tsx
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { plants } from "../data/plants";
import { Button } from "../components/Button";
import { RootState } from "../redux/store";
import { addToCart } from "../redux/cartSlice";

const ProductsContainer = styled.div`
  padding: 80px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CategorySection = styled.section`
  margin-bottom: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Products = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const isInCart = (plantId: number) =>
    cartItems.some((item) => item.id === plantId);

  return (
    <ProductsContainer>
      {categories.map((category) => (
        <CategorySection key={category}>
          <h2>{category}</h2>
          <ProductGrid>
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <ProductCard key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <Button
                    style={{ marginTop: "auto" }}
                    onClick={() => dispatch(addToCart(plant))}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? "In Cart" : "Add to Cart"}
                  </Button>
                </ProductCard>
              ))}
          </ProductGrid>
        </CategorySection>
      ))}
    </ProductsContainer>
  );
};
