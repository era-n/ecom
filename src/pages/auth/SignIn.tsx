import { signInWithEmailAndPassword } from "firebase/auth";
import { Form, Formik, FormikValues } from "formik";
import { auth } from "@/firebaseConfig";
import InputField from "./InputField";
import PasswordField from "./PasswordField";

export default function SignIn({ tab, setTab }: { tab: string; setTab: any }) {
  const hadnleSubmit = (
    values: FormikValues,
    { setFieldError, setSubmitting },
  ) => {
    if (values.email.trim().length === 0) {
      setFieldError("email", "Wrong email address");
    }
    if (values.password.trim().length === 0) {
      setFieldError("password", "Password cannot be empty");
    }

    signInWithEmailAndPassword(auth, values.email, values.password).then(
      (res) => {
        console.log(res);
        setSubmitting(false);
      },
    );
  };

  return (
    <div
      className={`flex flex-1 flex-col ${
        tab === "signIn" ? "max-[991px]:flex" : "max-[991px]:hidden"
      }`}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={hadnleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="pb-3 text-xl font-bold">Sign In</div>
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
                  Remember for 30 days
                </label>
              </div>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="flex w-full items-center justify-center rounded bg-[#4172DC] py-4 text-sm uppercase text-white disabled:bg-[#C4C4C4]"
            >
              Sign in
            </button>
          </Form>
        )}
      </Formik>
      <div className="mt-5 text-center text-sm min-[991px]:hidden">
        Don’t have an account?
        <a
          href=""
          className="ml-2 hover:text-[#FF7A00]"
          onClick={(e) => {
            e.preventDefault();
            setTab("signUp");
          }}
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
