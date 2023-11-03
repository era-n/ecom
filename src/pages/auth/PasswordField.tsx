import { useField } from "formik";
import React, { useState } from "react";

export default function PasswordField() {
  const [field, { error, touched }] = useField("password");
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="mt-3 w-full">
      <label
        className="relative mb-1 inline-block align-baseline text-sm text-[#262626] after:absolute after:-top-1 after:text-[#D22600_!important] after:content-['*']"
        htmlFor={field.name}
      >
        Password
      </label>
      <div className="relative">
        <input
          className={`w-full rounded border border-[#D9D9D9] px-3 py-2 text-xs text-[#555555] ${
            error && touched ? "border-[#FF2E00]" : ""
          }`}
          {...field}
          placeholder={"Password"}
          name="password"
          type={isHidden ? "password" : "text"}
        />

        {isHidden ? (
          <>
            <div
              className="absolute right-3 top-1/2 inline -translate-y-1/2 cursor-pointer"
              onClick={() => setIsHidden((isHidden) => !isHidden)}
            >
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_974_2505)">
                  <path
                    d="M3.33268 0.777344L16.666 13.2218M11.666 8.73876C11.2237 9.10824 10.6396 9.3329 9.99935 9.3329C8.61864 9.3329 7.49935 8.28823 7.49935 6.99957C7.49935 6.40196 7.74006 5.85682 8.13593 5.44401M16.3392 9.80556C16.8153 9.41866 17.2412 9.0295 17.6079 8.66938C18.5743 7.72043 18.5743 6.2787 17.6079 5.32975C15.9781 3.72927 13.1789 1.55512 9.99935 1.55512C9.25654 1.55512 8.53449 1.67378 7.84327 1.87606M5.41602 2.95775C4.20055 3.68191 3.16405 4.5704 2.39077 5.32975C1.42443 6.2787 1.42443 7.72043 2.39077 8.66938C4.02059 10.2699 6.81975 12.444 9.99935 12.444C11.5561 12.444 13.0216 11.9228 14.3034 11.203"
                    stroke="#C4C4C4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_974_2505">
                    <rect width="20" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </>
        ) : (
          <div
            className="absolute right-3 top-1/2 inline -translate-y-1/2 cursor-pointer"
            onClick={() => setIsHidden((isHidden) => !isHidden)}
          >
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1303 5.8531C21.2899 7.07317 21.2899 8.92683 20.1303 10.1469C18.1745 12.2047 14.8155 15 11 15C7.18448 15 3.82549 12.2047 1.86971 10.1469C0.710098 8.92683 0.710098 7.07317 1.86971 5.8531C3.82549 3.79533 7.18448 1 11 1C14.8155 1 18.1745 3.79533 20.1303 5.8531Z"
                stroke="#C4C4C4"
              />
              <path
                d="M14 8C14 9.65685 12.6569 11 11 11C9.34315 11 8 9.65685 8 8C8 6.34315 9.34315 5 11 5C12.6569 5 14 6.34315 14 8Z"
                stroke="#C4C4C4"
              />
            </svg>
          </div>
        )}
      </div>
      {error && touched ? (
        <span className="text-xs text-[#FF2E00]">{error}</span>
      ) : null}
    </div>
  );
}
