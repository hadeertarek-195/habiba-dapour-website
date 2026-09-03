import { WhoWeHelpPage } from "../components/SitePages";
import { getPageMetadata } from "../content/pageMetadata";

export const generateMetadata = () => getPageMetadata("help");
export default function Page() { return <WhoWeHelpPage />; }
