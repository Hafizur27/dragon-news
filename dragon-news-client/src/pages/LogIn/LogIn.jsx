/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth/useAuth";
import useTitle from "../../components/hooks/useTitle/useTitle";
const LogIn = () => {
  useTitle("login");
  const { logInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    logInUser(data?.email, data?.password)
      .then((loggedUser) => {
        console.log(loggedUser.user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-center pb-10">
      <div className="border px-14 py-16 bg-white  w-[30%]">
        <h3 className="text-3xl font-semibold text-center pb-10">
          Login your account
        </h3>
        <hr />
        <form className="pt-10" onSubmit={handleSubmit(onSubmit)}>
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
            className="bg-gray-500 text-white p-2 w-full rounded-md"
            type="submit"
            value="Login"
          />
          <p className="text-center text-sm pt-5">
            Don't Have an account?{" "}
            <Link to="/user/signup ">
              <span className="text-pink-500">Signup</span>
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
