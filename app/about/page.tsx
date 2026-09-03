import { AboutPage } from "../components/SitePages";
import { getPageMetadata } from "../content/pageMetadata";

export const generateMetadata = () => getPageMetadata("about");
export default function Page() { return <AboutPage />; }
