import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useParams } from "react-router-dom";
import { useGetPackageByIdQuery } from "../src/services/api";

export const PackageDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPackageByIdQuery(Number(id));

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <div className="p-6">
        <img
          src={data?.imageUrl}
          alt={data?.title}
          className="w-full h-80 object-cover rounded-xl"
        />
        <h3 className="text-xl font-bold">{data?.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{data?.description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">${data?.price.toFixed(2)}</span>
          <span className="text-gray-500 dark:text-gray-400">
            {data?.duration}
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};
