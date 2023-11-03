import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";
import { Footer } from "@/widgets/footer";
import Header from "@/widgets/header";

type Props = {};

export default function Auth({}: Props) {
  const [tab, setTab] = useState("signIn");
  return (
    <div>
      <Header />
      <div className="m-auto w-[95%] flex-col py-8 min-[991px]:h-[645px] min-[991px]:w-[900px] min-[1440px]:w-[1370px]">
        <div className="flex justify-end max-[991px]:hidden">
          <Link to="/" className="flex items-end gap-2">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.57592 4.94141L2.77051 9.99974L7.57592 15.0581"
                stroke="#7B7B7B"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.229 10H2.90527"
                stroke="#7B7B7B"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Back to website
          </Link>
        </div>
        <div className="flex">
          <SignIn tab={tab} setTab={setTab} />
          <div className="mx-5 w-[1px] bg-[#D9D9D9] max-[991px]:hidden"></div>
          <SignUp tab={tab} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
