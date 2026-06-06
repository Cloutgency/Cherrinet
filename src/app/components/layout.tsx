import { Outlet } from "react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ChatWidget } from "./chat-widget";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
