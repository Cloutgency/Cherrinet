import { Outlet } from "react-router";
import { GForceNavbar } from "./navbar";
import { Footer } from "../components/footer";

export function GForceLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <GForceNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
