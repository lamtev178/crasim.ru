import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { PricingPage } from "../pages/PricingPage";
import { ProcessPage } from "../pages/ProcessPage";

export const Routes = {
  HOME: "/",
  PRICING: "/pricing",
  PROCCESS: "/process",
  CONTACT: "/contact",
} as const;

interface AppRoute {
  path: (typeof Routes)[keyof typeof Routes];
  page: React.ReactNode;
}

export const AppRoutes: AppRoute[] = [
  {
    path: Routes.HOME,
    page: <HomePage />,
  },
  {
    path: Routes.PRICING,
    page: <PricingPage />,
  },
  {
    path: Routes.PROCCESS,
    page: <ProcessPage />,
  },
  {
    path: Routes.CONTACT,
    page: <ContactPage />,
  },
];
