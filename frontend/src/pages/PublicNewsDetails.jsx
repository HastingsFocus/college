
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function PublicNewsDetails() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  const BASE_URL = "http://localhost:5000";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await API.get(`/news/${id}`);
        setNews(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNews();
  }, [id]);

  if (!news) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {news.image && (
        <img
          src={`${BASE_URL}${news.image}`}
          className="w-full h-80 object-cover rounded mb-4"
        />
      )}

      <h1 className="text-3xl font-bold">{news.title}</h1>
      <p className="text-gray-500 mb-4">
        {new Date(news.createdAt).toLocaleDateString()}
      </p>

      <p className="text-gray-700 whitespace-pre-line">
        {news.content}
      </p>
    </div>
  );
}

export default PublicNewsDetails;

