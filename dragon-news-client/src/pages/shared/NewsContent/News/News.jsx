import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../../components/BaseUrl/BaseUrl";
import NewsCard from "./NewsCard/NewsCard";

const News = () => {
  const { id } = useParams();
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}/categories/${id}`)
      .then((res) => setAllNews(res?.data));
  }, [id]);
  return (
    <div>
      {allNews?.map((sn) => (
        <NewsCard key={sn?._id} news={sn} />
      ))}
    </div>
  );
};

export default News;
