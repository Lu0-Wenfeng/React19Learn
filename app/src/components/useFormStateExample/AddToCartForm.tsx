import { useActionState, useState } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  initialStock: number;
}

interface FormState {
  message: string;
  type: "success" | "error" | null;
  stock?: number;
  cartCount?: number;
}

const PRODUCTS: Record<string, Product> = {
  "1": {
    id: "1",
    title: "JavaScript: The Definitive Guide",
    price: 49.99,
    initialStock: 5,
  },
  "2": {
    id: "2",
    title: "JavaScript: The Good Parts",
    price: 34.99,
    initialStock: 0,
  },
  "3": {
    id: "3",
    title: "Eloquent JavaScript",
    price: 39.99,
    initialStock: 3,
  },
};

const AddToCartForm = ({
  itemID,
  itemTitle,
}: {
  itemID: string;
  itemTitle: string;
}) => {
  const product = PRODUCTS[itemID];
  const [stock, setStock] = useState(product?.initialStock || 0);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (
    _prevState: FormState | null,
    formData: FormData
  ): FormState => {
    const itemID = formData.get("itemID") as string;
    const product = PRODUCTS[itemID];

    if (!product) {
      return {
        message: "Product not found.",
        type: "error",
      };
    }

    if (stock === 0) {
      return {
        message: `Sorry, "${product.title}" is currently out of stock.`,
        type: "error",
      };
    }

    // Update stock and cart
    setStock((prev) => prev - 1);
    setCartCount((prev) => prev + 1);

    return {
      message: `✅ Successfully added "${
        product.title
      }" to your cart! ($${product.price.toFixed(2)})`,
      type: "success",
      stock: stock - 1,
      cartCount: cartCount + 1,
    };
  };

  const [state, formAction] = useActionState(addToCart, null);

  return (
    <form
      action={formAction}
      className="bg-white shadow-lg rounded-lg p-6 mb-4 border border-gray-200 hover:shadow-xl transition-shadow duration-200"
    >
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800 flex-1">
            {itemTitle}
          </h3>
          {cartCount > 0 && (
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {cartCount} in cart
            </span>
          )}
        </div>
        {product && (
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </p>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${
                stock > 0
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {stock > 0 ? `${stock} in stock` : "Out of stock"}
            </span>
          </div>
        )}
      </div>

      <input type="hidden" name="itemID" value={itemID} />

      <button
        type="submit"
        disabled={stock === 0}
        className={`w-full py-2.5 px-6 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          stock === 0
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white cursor-pointer focus:ring-blue-500"
        }`}
      >
        {stock === 0 ? "Out of Stock" : "🛒 Add to Cart"}
      </button>

      {state && (
        <div
          className={`mt-4 p-3 rounded-lg border-l-4 animate-in fade-in duration-300 ${
            state.type === "success"
              ? "bg-green-50 border-green-500 text-green-800"
              : "bg-red-50 border-red-500 text-red-800"
          }`}
        >
          <p className="text-sm font-medium">{state.message}</p>
        </div>
      )}
    </form>
  );
};

export default AddToCartForm;
