import { projects } from "@/lib/projects";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }) {
  const resolvedParams = await params;

  return <ProjectDetail slug={resolvedParams?.slug} />;
}