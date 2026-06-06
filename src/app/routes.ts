import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Plans } from "./pages/plans";
import { Coverage } from "./pages/coverage";
import { About } from "./pages/about";
import { Support } from "./pages/support";
import { Enquire } from "./pages/enquire";
import { GForceLayout } from "./gforce/layout";
import { GForceLanding } from "./gforce/pages/landing";
import { GForcePlans } from "./gforce/pages/plans";
import { GForceSubscribe } from "./gforce/pages/subscribe";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "plans", Component: Plans },
      { path: "coverage", Component: Coverage },
      { path: "about", Component: About },
      { path: "support", Component: Support },
      { path: "enquire", Component: Enquire },
    ],
  },
  {
    path: "/gforce",
    Component: GForceLayout,
    children: [
      { index: true, Component: GForceLanding },
      { path: "plans", Component: GForcePlans },
      { path: "coverage", Component: Coverage },
      { path: "subscribe", Component: GForceSubscribe },
      { path: "support", Component: Support },
    ],
  },
  {
    path: "*",
    Component: Layout,
    children: [{ index: true, Component: Home }],
  },
]);