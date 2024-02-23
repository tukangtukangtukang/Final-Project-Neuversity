import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Paragraph from "../components/Paragraph";
import TitleSinglePage from "../components/TitleSinglePage";

function SinglePage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPost() {
      try {
        const endpoint = `https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json/wp/v2/posts/${id}`;
        const res = await fetch(endpoint);
        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }
    getPost();
  }, [id]);

  return (
    <div>
      <div className="container">
        <Navbar />
        {post !== null ? (
          <TitleSinglePage key={post.id} data={post} />
        ) : (
          "Loading..."
        )}
        <Paragraph />
      </div>
    </div>
  );
}

export default SinglePage;
