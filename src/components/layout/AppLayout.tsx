import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <>
      <Header />
      <main id="main" className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}