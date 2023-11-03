import Header from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import CartDetails from "./CartDetails";
import CartList from "./CartList";
import { CartOrderSummary } from "@/widgets/cart-details/ui";

type Props = {};

export default function Cart({}: Props) {
  return (
    <div>
      <Header />
      <div>
        <div className="m-auto flex py-12 max-[991px]:flex-col min-[991px]:w-[900px] min-[1440px]:w-[1370px]">
          <CartList />
          <CartOrderSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
}
