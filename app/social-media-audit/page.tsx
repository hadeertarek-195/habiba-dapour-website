import AuditPageV2 from "../components/AuditPageV2";
import { getPageMetadata } from "../content/pageMetadata";

export const generateMetadata = () => getPageMetadata("audit");

export default function AuditPage() {
  return <AuditPageV2 />;
}
