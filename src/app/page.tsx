import Header from "@/components/Header";
import ProjectsShowcase from "@/components/ProjectsShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <main className="pt-0">
        <ProjectsShowcase />
      </main>
    </div>
  );
}
