import { CartItemType } from "@/db/schemas/cart-items";
import CartItemCounter from "./cart-item-counter";

import TrashSvg from "@/assets/icons/trash.svg";

function DeleteButton() {
  return (
    <button className="rounded p-2 hover:bg-red-50 hover:text-red-600">
      <TrashSvg height={16} width={16} viewBox="0 0 24 24" />
    </button>
  );
}

export default function CartItem({ item }: { item?: CartItemType }) {
  return (
    <div className="flex gap-4">
      <div className="h-16 w-16 rounded bg-stone-300"></div>
      <div className="flex grow-[1] items-center justify-between text-sm">
        <div className="flex h-full flex-col justify-between">
          <div>
            <p>Limited Edition Tshirt</p>
            <p className="text-xs font-medium">130€</p>
          </div>
          <CartItemCounter initialCount={1} />
        </div>

        <DeleteButton />
      </div>
    </div>
  );
}
