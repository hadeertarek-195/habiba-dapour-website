import { ServicesPage } from "../components/SitePages";
import { getPageMetadata } from "../content/pageMetadata";

export const generateMetadata = () => getPageMetadata("services");
export default function Page() { return <ServicesPage />; }
