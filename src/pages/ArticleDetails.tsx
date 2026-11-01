import { useParams } from "react-router-dom";

export function ArticleDetails() {
  const { slug } = useParams();
  return (
    <div className="container" style={{ padding: "4rem 0" }}>
      Article: {slug}
    </div>
  );
}
