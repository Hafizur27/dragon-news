import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../components/BaseUrl/BaseUrl";
import { NavLink, useParams } from "react-router-dom";
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';
import moment from "moment";
import { CiCalendar } from "react-icons/ci";

const LeftContent = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const date = moment().format("MMM D, YYYY");
  useEffect(() => {
    axios.get(`${baseUrl}/categories`).then((res) => setCategories(res.data));
  }, []);
  return (
    <div className="">
      <h4 className="text-lg font-semibold">All Category</h4>
      <div className="flex flex-col gap-4 pt-5 text-sm font-semibold">
        {categories?.map((cat, i) => {
          if (id == undefined && i == 0) {
            return (
              <NavLink
                className="bg-pink-50 py-2 ps-4"
                to={`/category/${cat?.id}`}
                key={cat?.id}
                state={cat?.name}
              >
                {cat?.name}
              </NavLink>
            );
          } else {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-pink-50 py-2 ps-4"
                    : "py-2 ps-4"
                }
                to={`/category/${cat?.id}`}
                key={cat?.id}
                state={cat?.name}
              >
                {cat?.name}
              </NavLink>
            );
          }
        })}
      </div>
      <div className="p-4 grid grid-cols-1 gap-2">
        <img src={img1} alt="" />
        <p className="text-[14px] font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        <div className="flex items-center justify-between text-sm font-semibold ">
          <span>Sports</span>
          <span className="flex items-center gap-2"><CiCalendar />{date}</span>
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 gap-2">
        <img src={img2} alt="" />
        <p className="text-[14px] font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        <div className="flex items-center justify-between text-sm font-semibold ">
          <span>Sports</span>
          <span className="flex items-center gap-2"><CiCalendar />{date}</span>
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 gap-2">
        <img src={img3} alt="" />
        <p className="text-[14px] font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        <div className="flex items-center justify-between text-sm font-semibold ">
          <span>Sports</span>
          <span className="flex items-center gap-2"><CiCalendar />{date}</span>
        </div>
      </div>

    </div>
  );
};

export default LeftContent;
