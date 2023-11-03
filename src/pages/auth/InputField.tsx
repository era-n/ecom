import { useField } from "formik";
import React from "react";

export default function InputField({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  const [field, { error, touched }] = useField(name);

  return (
    <div className="mt-3 w-full">
      <label
        className="relative mb-1 inline-block align-baseline text-sm text-[#262626] after:absolute after:-top-1 after:text-[#D22600_!important] after:content-['*']"
        htmlFor={field.name}
      >
        {label}
      </label>
      <input
        className={`w-full rounded border border-[#D9D9D9] px-3 py-2 text-xs text-[#555555] ${
          error && touched ? "border-[#FF2E00]" : ""
        }`}
        {...field}
        placeholder={placeholder}
        name={name}
        type={type}
      />
      {error && touched ? (
        <span className="text-xs text-[#FF2E00]">{error}</span>
      ) : null}
    </div>
  );
}
