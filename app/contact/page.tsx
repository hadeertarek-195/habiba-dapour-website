import ContactPageContent from "../components/ContactPageContent";
import { getPageMetadata } from "../content/pageMetadata";

export const generateMetadata = () => getPageMetadata("contact");
export default function Page() { return <ContactPageContent />; }
