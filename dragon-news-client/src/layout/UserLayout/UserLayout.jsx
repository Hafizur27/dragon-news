import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const UserLayout = () => {
  return (
    <div className="bg-slate-50">
      <div className="pt-5 pe-5">
        <NavigationBar />
      </div>
      <Outlet />
    </div>
  );
};

export default UserLayout;
