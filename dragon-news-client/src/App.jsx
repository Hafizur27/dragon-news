import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./components/BaseUrl/BaseUrl";
import NewsCard from "./pages/shared/NewsContent/News/NewsCard/NewsCard";

function App() {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/news`).then((res) => setAllNews(res?.data));
  }, []);
  return (
    <div>
      {allNews?.map((sn) => (
        <NewsCard key={sn?._id} news={sn} />
      ))}
    </div>
  );
}

export default App;
