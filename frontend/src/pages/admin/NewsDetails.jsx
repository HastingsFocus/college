
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";

function NewsDetails() {
  const { id } = useParams(); // 🔥 get ID from URL
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

  // ⛔ IMPORTANT: prevent blank crash
  if (!news) {
    return <div className="p-6">Loading news...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* IMAGE */}
      {news.image && (
        <img
          src={`${BASE_URL}${news.image}`}
          alt={news.title}
          className="w-full h-80 object-cover rounded-lg mb-4"
        />
      )}

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-2">{news.title}</h1>

      {/* DATE */}
      <p className="text-gray-500 mb-4">
        {new Date(news.createdAt).toLocaleDateString()}
      </p>

      {/* CONTENT */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {news.content}
      </p>
    </div>
  );
}

export default NewsDetails;

