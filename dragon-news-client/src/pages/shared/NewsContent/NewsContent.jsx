import { Outlet, useLocation } from "react-router-dom";
import useTitle from "../../../components/hooks/useTitle/useTitle";

const NewsContent = () => {
  const location = useLocation()?.state;
  useTitle(location)
  return (
    <div className="ps-4">
      <h4 className="text-lg font-semibold">
        {location === null ? "All News" : location}
      </h4>
      <Outlet />
    </div>
  );
};

export default NewsContent;
