import Tag from "../tag";
import { StarIcon } from "@heroicons/react/24/outline";
import { Fund } from "@/app/types";
import Image from "next/image";

interface ProjectCardProps {
  logo: string;
  projectName: string;
  tag: string;
  funds: Fund[];
  views: number;
  reviews: number;
  starRate: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  logo,
  projectName,
  tag,
  funds,
  views,
  reviews,
  starRate,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center mb-4">
        <Image
          src={logoSrc}
          alt={`${name} logo`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
        <h2 className="ml-2 text-lg font-semibold">{projectName}</h2>
      </div>
      <Tag text={tag} />
      <div className="flex items-center mt-4">
        {funds.map((fund, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-semibold"
          >
            {fund}
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4">
        <span className="mr-2">{views} Views</span>
        <span className="mr-2">{reviews} Reviews</span>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} filled={index < starRate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
