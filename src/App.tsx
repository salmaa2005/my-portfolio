import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Explore } from "./pages/Explore";
import { Projects } from "./pages/Projects";
import { ProjectDetails } from "./pages/ProjectDetails";
import { Articles } from "./pages/Articles";
import { ArticleDetails } from "./pages/ArticleDetails";
import { NotFound } from "./pages/NotFound";
import { Notes } from "./pages/Notes";
import { NoteCourse } from "./pages/NoteCourse";
import { NoteChapter } from "./pages/NoteChapter";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="explore" element={<Explore />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:slug" element={<ArticleDetails />} />
          <Route path="notes" element={<Notes />} />
          <Route path="notes/:courseSlug" element={<NoteCourse />} />
          <Route path="notes/:courseSlug/:chapterSlug" element={<NoteChapter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}