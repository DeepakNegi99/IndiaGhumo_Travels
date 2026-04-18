import type { Package } from "../features/packages/types";;
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ pkg }: { pkg: Package }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition cursor-pointer"
      onClick={() => navigate(`/packages/${pkg.id}`)}
    >
      <img
      src={pkg.imageUrl}
      alt={pkg.title}
      className="w-full h-48 object-cover rounded-t-xl"
    />

      <div className="p-4">
        <h3 className="text-lg font-bold">{pkg.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{pkg.location}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">${pkg.price.toFixed(2)}</span>
          <span className="text-gray-500 dark:text-gray-400">{pkg.duration}</span>
        </div>
      </div>
    </div>
  );
};
