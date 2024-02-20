import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../../../components/BaseUrl/BaseUrl";
import { FaArrowLeftLong } from "react-icons/fa6";
import useTitle from "../../../../components/hooks/useTitle/useTitle";

const NewsDetails = () => {
  const { id } = useParams();
  useTitle("News Details")

  const [news, SetNews] = useState({});
  const { details, image_url, title, category_id } = news;

  useEffect(() => {
    axios.get(`${baseUrl}/news/${id}`).then((res) => SetNews(res.data));
  }, [id]);

  return (
    <div className="p-5 flex flex-col gap-4">
      <img className="w-full" src={image_url} alt="" />
      <h2 className="text-3xl font-bold">{title}</h2>
      <p>{details}</p>
      <Link to={`/category/${category_id}`}>
        <button className="flex items-center gap-3 bg-pink-500 text-white px-4 py-1">
          <FaArrowLeftLong />
          <span>All News in this category</span>
        </button>
      </Link>
    </div>
  );
};

export default NewsDetails;
