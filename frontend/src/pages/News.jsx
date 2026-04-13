import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ================= FETCH NEWS =================
  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await API.get("/news");
      setNews(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>

      {/* LOADING STATE */}
      {loading && <p className="text-gray-500">Loading news...</p>}

      {/* EMPTY STATE */}
      {!loading && news.length === 0 && (
        <p className="text-gray-500">No news available.</p>
      )}

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* IMAGE */}
            {item.image && (
              <img
                src={item.image} // 🔥 Cloudinary direct URL
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>

              <p className="text-gray-500 text-sm">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>

              <p className="text-gray-600 mt-2 line-clamp-3">
                {item.content}
              </p>

              <button
                onClick={() => navigate(`/news/${item._id}`)}
                className="mt-3 bg-primary text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;