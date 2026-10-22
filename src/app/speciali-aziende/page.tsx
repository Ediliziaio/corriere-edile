import { renderEditorial, editorialMetadata } from "@/lib/editorial";
export function generateMetadata() { return editorialMetadata("speciali-aziende"); }
export default function Page() { return renderEditorial("speciali-aziende"); }
