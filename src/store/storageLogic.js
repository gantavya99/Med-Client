// localStorageMiddleware.js
export const storageLogic = (store) => (next) => (action) => {
    // Call the next middleware in the chain before storing the cart items
    next(action);
  
    // Check if the action is one that modifies the cart items
    if (
      action.type === "cart/addToCart" ||
      action.type === "cart/decreaseCart" ||
      action.type === "cart/removeFromCart" ||
      action.type === "cart/clearCart"
    ) {
      // Store the updated cart items in the localStorage
      localStorage.setItem("cartItems", JSON.stringify(store.getState().cart.cartItems));
    }
  };