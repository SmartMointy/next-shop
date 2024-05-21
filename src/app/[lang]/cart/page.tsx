import { getCartItemsWithDetails } from "@/services/cart";

export default async function CartPage() {
  const cartItems = await getCartItemsWithDetails();
  return (
    <div>
      <p>Cart Page</p>
      {cartItems.map((item) => (
        <p>{item.productName}</p>
      ))}
    </div>
  );
}
