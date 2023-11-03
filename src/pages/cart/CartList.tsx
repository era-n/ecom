import { ProductProps } from "../../shared/types";
import CardItem from "./CardItem";
import cartStore from "@/stores/cartStore";

export default function CartList() {
  const store = cartStore();

  return (
    <div className="flex flex-1 flex-col gap-8 px-3">
      <p className="text-xl font-bold">Cart 3</p>
      {store.orders.map((o: ProductProps) => (
        <CardItem key={o.id} product={o} store={store} />
      ))}
    </div>
  );
}
