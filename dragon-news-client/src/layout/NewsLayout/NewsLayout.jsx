import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import moment from "moment";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import RightContent from "../../pages/shared/RightContent/RightContent";
const NewsLayout = () => {
  const date = moment().format("dddd, MMMM D, YYYY");
  return (
    <div className="pt-5">
      <div className="grid justify-center text-center pb-5">
        <div className="grid grid-flow-row gap-2">
          <img src={logo} alt="" />
          <h5 className="text-slate-400 text-sm">
            Journalism Without Fear or Favour
          </h5>
          <p>{date}</p>
        </div>
      </div>
      <div className="grid grid-cols-[5fr_1fr]">
        <Outlet />
        <div>
          <RightContent />
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
