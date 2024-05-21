import { ShoppingCartType } from "@/db/schemas/cart-items";
import { create } from "zustand";

interface CartState {
  items: ShoppingCartType[];
  add: (newItem: ShoppingCartType) => void;
  remove: (id: number) => void;
}

const useCartStore = create<CartState>()((set) => ({
  items: [],
  add: (newItem) => set((state) => ({ items: [...state.items, newItem] })),
  remove: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));

export default useCartStore;
