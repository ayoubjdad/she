import React, { createContext, useContext, useReducer } from "react";

// Create a Context for the cart
const CartContext = createContext();

// Cart Reducer to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the product already exists in the cart
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Initial state for the cart
const initialCartState = {
  items: [
    {
      id: 2,
      name: "Silver Bracelet",
      material: "Sterling Silver",
      price: 1200,
      image:
        "https://i.pinimg.com/736x/d2/4a/ac/d24aacaaabb9d0ace6a9f8e0f39b186e.jpg",
      description:
        "This sterling silver bracelet is the epitome of elegance and sophistication. Featuring a polished finish that gleams beautifully in the light, it is designed for versatility, making it ideal for both casual and formal settings. The intricate detailing and secure clasp add a touch of refinement to its minimalist aesthetic, ensuring it becomes a cherished addition to any jewelry collection.",
      category: "Bracelets",
      isBestSeller: true,
      quantity: 1,
    },
    {
      id: 2,
      name: "Silver Bracelet",
      material: "Sterling Silver",
      price: 1200,
      image:
        "https://i.pinimg.com/736x/d2/4a/ac/d24aacaaabb9d0ace6a9f8e0f39b186e.jpg",
      description:
        "This sterling silver bracelet is the epitome of elegance and sophistication. Featuring a polished finish that gleams beautifully in the light, it is designed for versatility, making it ideal for both casual and formal settings. The intricate detailing and secure clasp add a touch of refinement to its minimalist aesthetic, ensuring it becomes a cherished addition to any jewelry collection.",
      category: "Bracelets",
      isBestSeller: true,
      quantity: 1,
    },
    {
      id: 2,
      name: "Silver Bracelet",
      material: "Sterling Silver",
      price: 1200,
      image:
        "https://i.pinimg.com/736x/d2/4a/ac/d24aacaaabb9d0ace6a9f8e0f39b186e.jpg",
      description:
        "This sterling silver bracelet is the epitome of elegance and sophistication. Featuring a polished finish that gleams beautifully in the light, it is designed for versatility, making it ideal for both casual and formal settings. The intricate detailing and secure clasp add a touch of refinement to its minimalist aesthetic, ensuring it becomes a cherished addition to any jewelry collection.",
      category: "Bracelets",
      isBestSeller: true,
      quantity: 1,
    },
    {
      id: 2,
      name: "Silver Bracelet",
      material: "Sterling Silver",
      price: 1200,
      image:
        "https://i.pinimg.com/736x/d2/4a/ac/d24aacaaabb9d0ace6a9f8e0f39b186e.jpg",
      description:
        "This sterling silver bracelet is the epitome of elegance and sophistication. Featuring a polished finish that gleams beautifully in the light, it is designed for versatility, making it ideal for both casual and formal settings. The intricate detailing and secure clasp add a touch of refinement to its minimalist aesthetic, ensuring it becomes a cherished addition to any jewelry collection.",
      category: "Bracelets",
      isBestSeller: true,
      quantity: 1,
    },
    {
      id: 2,
      name: "Silver Bracelet",
      material: "Sterling Silver",
      price: 1200,
      image:
        "https://i.pinimg.com/736x/d2/4a/ac/d24aacaaabb9d0ace6a9f8e0f39b186e.jpg",
      description:
        "This sterling silver bracelet is the epitome of elegance and sophistication. Featuring a polished finish that gleams beautifully in the light, it is designed for versatility, making it ideal for both casual and formal settings. The intricate detailing and secure clasp add a touch of refinement to its minimalist aesthetic, ensuring it becomes a cherished addition to any jewelry collection.",
      category: "Bracelets",
      isBestSeller: true,
      quantity: 1,
    },
  ],
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Add product to cart
  const addToCart = (product, quantity = 1) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } });
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  // Update product quantity
  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  // Clear the entire cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
