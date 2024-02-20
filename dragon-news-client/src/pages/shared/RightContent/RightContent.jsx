import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import bg from "../../../assets/bg.png";
import useAuth from "../../../components/hooks/useAuth/useAuth";
const RightContent = () => {
  const { googleLogIn, gitHubLogIn } = useAuth();

  const handleGoogle = () => {
    googleLogIn()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const handleGitHub = () => {
    gitHubLogIn()
      .then((result) => console.log(result?.user))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="flex flex-col gap-3 p-4">
        <h4 className="text-lg font-semibold">Login with</h4>
        <button
          onClick={() => handleGoogle()}
          className="border border-blue-300 text-blue-300 px-4 py-1 w-full rounded-md flex items-center justify-center gap-2"
        >
          <FaGoogle /> <span> Login with Google </span>
        </button>
        <button
          onClick={() => handleGitHub()}
          className="border border-zinc-400 text-zinc-400 px-4 py-1 w-full rounded-md flex items-center justify-center gap-2"
        >
          <FaGithub /> <span>Login with Github</span>
        </button>
      </div>
      <div className="flex flex-col p-4">
        <h4 className="text-lg font-semibold pb-3">Find Us On</h4>
        <div className="flex flex-col gap-1">
          <button className="border px-4 py-2 w-full rounded-md flex items-center justify-start gap-2">
            <span className="text-blue-600">
              <FaFacebook />
            </span>{" "}
            <span>Facebook</span>
          </button>
          <button className="border px-4 py-2 w-full rounded-md flex items-center justify-start gap-2">
            <span className="text-blue-400">
              <FaTwitter />
            </span>{" "}
            <span>Twitter</span>
          </button>
          <button className="border px-4 py-2 w-full rounded-md flex items-center justify-start gap-2">
            <span className="text-red-400">
              <FaInstagram />
            </span>{" "}
            <span>Facebook</span>
          </button>
        </div>
      </div>
      <div className="bg-gray-200 p-4 m-4">
        <h4 className="text-lg font-semibold">Q-Zone</h4>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div
        className="bg-cover bg-no-repeat h- m-4 text-white flex justify-center items-center py-16"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="p-4 space-y-2 text-center">
          <h1 className="text-3xl font-semibold">
            Create an amazing Newspaper
          </h1>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="bg-red-600 px-3 py-2 rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
