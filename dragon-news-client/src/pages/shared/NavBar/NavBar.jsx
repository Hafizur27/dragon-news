import logo from "../../../assets/logo.png";
import moment from "moment";
import MarquePart from "../../../components/MarquePart/MarquePart";
import NavigationBar from "../../../components/NavigationBar/NavigationBar";

const NavBar = () => {
  const date = moment().format("dddd, MMMM D, YYYY");
  return (
    <div>
      <div className="grid justify-center text-center pb-5">
        <div className="grid grid-flow-row gap-2">
          <img src={logo} alt="" />
          <h5 className="text-slate-400 text-sm">
            Journalism Without Fear or Favour
          </h5>
          <p>{date}</p>
        </div>
      </div>
      <MarquePart />
      <NavigationBar />
    </div>
  );
};

export default NavBar;
