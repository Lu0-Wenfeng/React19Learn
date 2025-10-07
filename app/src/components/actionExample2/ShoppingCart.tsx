import { useState } from "react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface Product {
  id: string;
  title: string;
  price: number;
  author?: string;
}

// AddToCartForm component
const AddToCartForm = ({
  product,
  addToCart,
  isAdding,
}: {
  product: Product;
  addToCart: (formData: FormData, product: Product) => Promise<void>;
  isAdding: boolean;
}) => {
  const formAction = async (formData: FormData) => {
    try {
      await addToCart(formData, product);
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("Failed to add item to cart. Please try again.");
    }
  };

  return (
    <form
      action={formAction}
      className="bg-white shadow-lg rounded-lg p-6 mb-4 border border-gray-200 hover:shadow-xl transition-shadow duration-200"
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {product.title}
        </h3>
        {product.author && (
          <p className="text-sm text-gray-600">by {product.author}</p>
        )}
        <p className="text-2xl font-bold text-blue-600 mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <input type="hidden" name="itemID" value={product.id} />
      <input type="hidden" name="price" value={product.price} />

      <button
        type="submit"
        disabled={isAdding}
        className={`w-full py-2.5 px-6 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isAdding
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white cursor-pointer"
        }`}
      >
        {/*
          * `isAdding`` won't render because of async form action,
          *  will need to use `useTransition` to show pending state
          */
        }
        {isAdding ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Adding...
          </span>
        ) : (
          "🛒 Add to Cart"
        )}
      </button>
    </form>
  );
};

// CartDisplay component
const CartDisplay = ({
  cart,
  onClear,
}: {
  cart: CartItem[];
  onClear: () => void;
}) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 text-center">
        <p className="text-gray-500 text-lg mb-2">Your cart is empty</p>
        <p className="text-gray-400 text-sm">
          Add some books to get started! 📚
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6 mb-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          🛒 Your Cart ({cart.length} {cart.length === 1 ? "item" : "items"})
        </h2>
        <button
          onClick={onClear}
          className="text-sm text-red-600 hover:text-red-800 font-medium hover:underline cursor-pointer"
        >
          Clear Cart
        </button>
      </div>

      <ul className="space-y-3 mb-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-lg p-4 shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600">
                ${item.price.toFixed(2)} × {item.quantity}
              </p>
            </div>
            <p className="font-bold text-blue-600">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </li>
        ))}
      </ul>

      <div className="border-t-2 border-green-300 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">Total:</span>
          <span className="text-2xl font-bold text-green-600">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

// ShoppingCart component
const ShoppingCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [addingItemId, setAddingItemId] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: "1",
      title: "JavaScript: The Definitive Guide",
      author: "David Flanagan",
      price: 49.99,
    },
    {
      id: "2",
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      price: 34.99,
    },
    {
      id: "3",
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      price: 39.99,
    },
  ];

  const addToCart = async (formData: FormData, product: Product) => {
    const id = String(formData.get("itemID"));

    setAddingItemId(id);

    // Simulate an AJAX call
    await new Promise((resolve) => setTimeout(resolve, 800));

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);

      if (existingItem) {
        // Increment quantity if item already exists
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item
        return [
          ...prevCart,
          {
            id,
            title: product.title,
            price: product.price,
            quantity: 1,
          },
        ];
      }
    });

    setAddingItemId(null);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📚 Book Store</h1>
        <p className="text-gray-600">
          Using React 19 form actions to add items to your shopping cart
        </p>
      </div>

      <CartDisplay cart={cart} onClear={clearCart} />

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Available Books
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <AddToCartForm
            key={product.id}
            product={product}
            addToCart={addToCart}
            isAdding={addingItemId === product.id}
          />
        ))}
      </div>
    </div>
  );
};

export { ShoppingCart as ActionExample2 };
