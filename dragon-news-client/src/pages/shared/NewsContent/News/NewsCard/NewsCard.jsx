/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IoShareSocialOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { FaEye } from "react-icons/fa";
import useTitle from "../../../../../components/hooks/useTitle/useTitle";

const NewsCard = ({ news }) => {
  const {
    author,
    details,
    image_url,
    rating,
    thumbnail_url,
    title,
    total_view,
    _id
  } = news;
  return (
    <div className="my-5">
      <div className="bg-pink-50 flex justify-between items-center mb-5 px-3 py-4 rounded-md">
        <div className="flex items-center gap-4">
          <img className="h-16 w-16 rounded-full" src={author?.img} alt="" />
          <div>
            <h5>{author?.name}</h5>
            <p>{author?.published_date?.slice(0, 10)}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <IoShareSocialOutline />
          <CiBookmark />
        </div>
      </div>
      <div className="px-3 pb-5">
        <h4 className="text-lg font-bold pb-5">{title}</h4>
        <img className="w-full pb-5" src={image_url} alt="" />
        <div>
          {details.length > 250 && details.slice(0, 250)}...{" "}
          <Link to={`/news/${_id}`}>
            <button className="text-orange-400">Read more</button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex justify-between py-5 px-3">
        <div className="flex items-center gap-2">
          <Rating style={{ maxWidth: 90 }} value={rating?.number} readOnly />
          <span>{rating?.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
