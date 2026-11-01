import { useParams } from "react-router-dom";

export function ProjectDetails() {
  const { slug } = useParams();
  return (
    <div className="container" style={{ padding: "4rem 0" }}>
      Project: {slug}
    </div>
  );
}
