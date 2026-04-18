import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { useGetPackageQuery } from "../src/services/api";
import { Footer } from "../components/Footer";

export const Packages = () => {
  const { data, isLoading } = useGetPackageQuery();

  if (isLoading) return <p>Loadin...</p>;

  return (
    <div>
      <Header />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((pkg) => (
          <ProjectCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
