import { renderEditorial, editorialMetadata, editorialSlugs } from "@/lib/editorial";
export function generateStaticParams() { return editorialSlugs("speciali-aziende").map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return editorialMetadata("speciali-aziende", (await params).slug);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return renderEditorial("speciali-aziende", (await params).slug);
}
