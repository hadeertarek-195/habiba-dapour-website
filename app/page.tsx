import { HomePage } from "./components/SitePages";
import { getPageMetadata } from "./content/pageMetadata";

export const generateMetadata = () => getPageMetadata("home");

export default function Home() {
  return <HomePage />;
}
