import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Paragraph from "../components/Paragraph";
import TitleSinglePage from "../components/TitleSinglePage";
import { getPost } from "../utils/fetchData";
import Client from "../layout/Client";

function SinglePage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    getPost(id).then(data => setPost(data))
  }, []);

  return (
    <Client>
      <div className="container">
        <NavbarClient />
        {post !== null ? (
          <>
            <TitleSinglePage key={post.id} data={post} />
            <Paragraph data={post.content.rendered} />
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </Client >
  );
}

export default SinglePage;
