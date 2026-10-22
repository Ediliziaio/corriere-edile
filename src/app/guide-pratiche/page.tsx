import { renderEditorial, editorialMetadata } from "@/lib/editorial";
export function generateMetadata() { return editorialMetadata("guide-pratiche"); }
export default function Page() { return renderEditorial("guide-pratiche"); }
