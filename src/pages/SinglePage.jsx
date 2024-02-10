import Navbar from "../components/Navbar";
import Paragraph from "../components/Paragraph";
import Tags from "../components/Tags";
import TitleSinglePage from "../components/TitleSinglePage";

function SinglePage() {
  return (
    <div>
      <Navbar />
      <div className="container" >
        <div className="flex gap-3">
          <TitleSinglePage />
        </div>
        <Paragraph />
      </div>
    </div>
  )
}

export default SinglePage;