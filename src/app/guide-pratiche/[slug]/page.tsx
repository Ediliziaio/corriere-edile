import { renderEditorial, editorialMetadata, editorialSlugs } from "@/lib/editorial";
export function generateStaticParams() { return editorialSlugs("guide-pratiche").map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return editorialMetadata("guide-pratiche", (await params).slug);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return renderEditorial("guide-pratiche", (await params).slug);
}
