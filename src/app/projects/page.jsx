import CopyRights from "@/Components/CopyRights/CopyRights";
import ProjectsHeader from "@/Components/Projects/ProjectsHeader";
import ProjectMain from "@/Components/Projects/ProjectsMain";

export const metadata = {
  title: "Projects | Najim",
  description:
    "Explore my portfolio of web development projects and applications.",
  keywords: [
    "projects",
    "web development",
    "portfolio",
    "applications",
    "React",
    "Next.js",
  ],
};

const Projects = () => {
  return (
    <div className="relative dark:bg-primary-dark">
      <div className="absolute rectangle inset-0 h-screen"></div>
      <div className="max-w-[1000px] mx-auto py-10 font-primary space-y-6 p-3">
        <ProjectsHeader />
        <ProjectMain />
        <CopyRights />
      </div>
    </div>
  );
};

export default Projects;
