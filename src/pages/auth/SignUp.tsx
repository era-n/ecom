import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Formik, FormikValues } from "formik";
import { auth } from "@/firebaseConfig";
import InputField from "./InputField";
import PasswordField from "./PasswordField";

export default function SignUp({ tab }: { tab: string }) {
  const hadnleSubmit = (
    values: FormikValues,
    { setFieldError, setSubmitting },
  ) => {
    if (values.email.trim().length === 0) {
      setFieldError("email", "Wrong email address");
    }
    if (values.name.trim().length === 0) {
      setFieldError("name", "Name cannot be empty");
    }
    if (values.password.trim().length === 0) {
      setFieldError("password", "Password cannot be empty");
    }
    createUserWithEmailAndPassword(auth, values.email, values.password).then(
      (res) => {
        console.log(res);
        setSubmitting(false);
      },
    );
  };

  return (
    <div
      className={`flex flex-1 flex-col ${
        tab === "signUp" ? "max-[991px]:flex" : "max-[991px]:hidden"
      }`}
    >
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={hadnleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="pb-3 text-xl font-bold">Sign Up</div>
            <InputField
              label="Name"
              name="name"
              type="text"
              placeholder="Full Name"
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Email Address"
            />
            <PasswordField />
            <div className="flex justify-between pb-5">
              <div>
                <input id="remember" type="checkbox" />
                <label htmlFor="remember" className="ml-1 text-xs">
                  Terms and conditions agreement should start with an
                  introduction that lets users know they’re reading a terms and
                  conditions agreement
                </label>
              </div>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="flex w-full items-center justify-center rounded bg-[#4172DC] py-4 text-sm uppercase text-white disabled:bg-[#C4C4C4]"
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
