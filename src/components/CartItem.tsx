import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

interface Plant {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
}

const plants: Plant[] = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    thumbnail: "/path/to/snake-plant.jpg",
  },
  { id: 2, name: "Pothos", price: 20, thumbnail: "/path/to/pothos.jpg" },
  // Add more plants here
];

const ProductListing: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant: Plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div>
      <h2>Available Plants</h2>
      {plants.map((plant) => (
        <div key={plant.id}>
          <img src={plant.thumbnail} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
