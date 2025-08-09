import HomePage from "@/pages/home-page";
import SubscriptionPage from "@/pages/subscribe-page";
import FormationPage from "@/pages/formation-page";
const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/subscription",
    component: SubscriptionPage,
    name: "subscription",
  },
  {
    path: "/formation",
    component: FormationPage,
    name: "formation",
  },
];
export default routes;
