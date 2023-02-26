import Header from "./Header";
import ListFood from "./ListFood";
import { useState } from "react";

const data = [
  {
    id: 1, 
    name: "Sushi", 
    description: "Finist fish, with seaweed", 
    price: 22.99,
  },
  {
    id: 2, 
    name: "Pho", 
    description: "Fresh beef, with soup", 
    price: 9.99,
  },
  {
    id: 3, 
    name: "Banh mi", 
    description: "Vietnamese traditional steet food", 
    price: 3.99,
  },
];

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product, amount) => {
    setCart((prevCart) => {
      if (prevCart.find((item) => item.product.id === product.id)) {
        return prevCart.map((item) => {
          if (item.product.id === product.id) {
            item.amount += amount;
            return item;
          }
          return item;
        });
      }
      else {
        return [...prevCart, {product: product, amount: amount }];
      }
    });
  };

  console.log("cart data: ", cart);

  return (
    <div>
      <Header cart={cart}/>
      <ListFood products={data} onAddToCart={addToCart} />
    </div>
  );
}

export default App;
