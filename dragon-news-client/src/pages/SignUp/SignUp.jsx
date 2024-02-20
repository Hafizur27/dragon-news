/* eslint-disable react/no-unescaped-entities */

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth/useAuth";
import useTitle from "../../components/hooks/useTitle/useTitle";

const SignUp = () => {
  useTitle("Signup")
  const { signUpUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUpUser(data?.email, data?.password)
      .then((result) => {
        console.log(result?.user);
        updateUser(data?.name, data?.photo)
          .then(() => {
            navigate("/user/login")
          })
          .catch((error) => console.log(error?.message));
      })
      .catch((error) => console.log(error?.message));
  };
  return (
    <div className="flex justify-center pb-10">
      <div className="border px-14 py-16 bg-white  w-[30%]">
        <h3 className="text-3xl font-semibold text-center pb-10">
          Signup your account
        </h3>
        <hr />
        <form className="pt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2 pb-5">
            <label htmlFor="" className="font-bold text-lg">
              Your Name
            </label>
            <input
              className="px-3 py-2 outline-none border rounded-md bg-slate-50"
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col gap-2 pb-5">
            <label htmlFor="" className="font-bold text-lg">
              Photo Url
            </label>
            <input
              className="px-3 py-2 outline-none border rounded-md bg-slate-50"
              type="url"
              placeholder="Enter your photo url"
              {...register("photo")}
            />
          </div>
          <div className="flex flex-col gap-2 pb-5">
            <label htmlFor="" className="font-bold text-lg">
              Email address
            </label>
            <input
              className="px-3 py-2 outline-none border rounded-md bg-slate-50"
              type="email"
              placeholder="Enter your email address"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col gap-2 pb-5">
            <label htmlFor="" className="font-bold text-lg">
              Password
            </label>
            <input
              className="px-3 py-2 outline-none border rounded-md bg-slate-50"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
          <input
            className="bg-gray-500 text-white p-2 w-full rounded-md cursor-pointer"
            type="submit"
          />
          <p className="text-center text-sm pt-5">
            Already Have an account?{" "}
            <Link to="/user/login">
              <span className="text-pink-500">Login</span>
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
