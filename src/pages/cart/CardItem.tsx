import { Dispatch, SetStateAction, useState } from "react";
import { ProductProps } from "../../shared/types";
import { Link } from "react-router-dom";

export default function CardItem({
  product,
  store,
}: {
  product: ProductProps;
  store: any;
}) {
  const {
    thumb,
    id,
    name,
    category,
    productType,
    price,
    quantity: temp,
  } = product;
  const [quantity, setQuantity] = useState<number>(temp ?? 1);

  const removeFromCart = (e: any) => {
    e.preventDefault();
    store.removeOrder(id);
  };

  const addQuantity = (e: any) => {
    e.preventDefault();
    store.updateQuantity(id, "inc");
    setQuantity((prev) => prev + 1);
  };

  const reduceQuantity = (e: any) => {
    e.preventDefault();
    store.updateQuantity(id, "dec");
    setQuantity((prev) => (prev < 2 ? 1 : prev - 1));
  };

  return (
    <Link
      state={product}
      to={`/category/${category}/product/${id}`}
      className="flex items-center justify-between text-sm max-[1440px]:flex-col min-[991px]:w-[85%]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="mb-3 flex w-full items-center gap-3">
        <div className="max-h-[70px] max-w-[68px] overflow-hidden rounded-lg border border-[#D9D9D9]">
          <img src={thumb} alt="" />
        </div>
        <div className="flex-1 min-[1440px]:flex-[0_1_40%]">
          <p className="font-bold text-[#262626]">{name}</p>
          <p className="text-[#555555]">{productType}</p>
        </div>
        <div className="text-[#555555]">${price}</div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-[1_1_30%]">
          <div className="relative flex items-center gap-10 rounded border border-[#C4C4C4] px-3 py-2 text-sm">
            <div
              className="cursor-pointer"
              //   onClick={() => setQuantity((prev) => (prev < 2 ? 1 : prev - 1))}
              onClick={reduceQuantity}
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="9.93896"
                  width="14"
                  height="2"
                  rx="1"
                  fill="#C4C4C4"
                />
              </svg>
            </div>
            <span className="absolute left-1/2 -translate-x-1/2">
              {quantity}
            </span>
            <div
              className="cursor-pointer"
              //   onClick={() => setQuantity((prev) => prev + 1)}
              onClick={addQuantity}
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 9.93896H16C16.5523 9.93896 17 10.3867 17 10.939C17 11.4912 16.5523 11.939 16 11.939H11V16.939C11 17.4913 10.5523 17.939 10 17.939C9.44772 17.939 9 17.4913 9 16.939V11.939H4C3.44772 11.939 3 11.4912 3 10.939C3 10.3867 3.44772 9.93896 4 9.93896H9V4.93896C9 4.38668 9.44772 3.93896 10 3.93896C10.5523 3.93896 11 4.38668 11 4.93896V9.93896Z"
                  fill="#C4C4C4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 text-[#555555]">
          ${Math.floor(quantity * price)}
        </div>
        <div className="flex-1 text-end" onClickCapture={removeFromCart}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block"
          >
            <path
              d="M5 8V18C5 20.2091 6.79086 22 9 22H15C17.2091 22 19 20.2091 19 18V8M14 11V17M10 11L10 17M16 5L14.5937 2.8906C14.2228 2.3342 13.5983 2 12.9296 2H11.0704C10.4017 2 9.7772 2.3342 9.40627 2.8906L8 5M16 5H8M16 5H21M8 5H3"
              stroke="#7B7B7B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
