import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ProductProps } from "../shared/types";

interface CartState {
  orders: ProductProps[];
  setOrders: (cart: any) => void;
  updateQuantity: (cart: any, type: string) => void;
  removeOrder: (cart: any) => void;
}

const cartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        orders: [],
        setOrders: (cart: any) =>
          set((state) => {
            return { orders: [...state.orders, cart] };
          }),
        updateQuantity: (id, type) =>
          set((state) => {
            return {
              orders: state.orders.filter((o) => {
                if (o.id === id) {
                  o.quantity =
                    type === "inc"
                      ? o.quantity! + 1
                      : o.quantity! < 2
                      ? 1
                      : o.quantity! - 1;
                }
                return o;
              }),
            };
          }),
        removeOrder: (id) =>
          set((state) => {
            return {
              orders: state.orders.filter((o) => {
                return o.id !== id;
              }),
            };
          }),
      }),
      {
        name: "cart",
      },
    ),
  ),
);

export default cartStore;
