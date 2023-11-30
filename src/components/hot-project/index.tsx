import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
import Tag from "../tag";
interface ProjectCardProps {
  logoSrc: string;
  name: string;
  rating: number;
  tag: string;
  awards: number;
  currency: string;
}

const HotProjectCard: React.FC<ProjectCardProps> = ({
  logoSrc,
  name,
  rating,
  tag,
  currency,
  awards,
}) => {
  return (
    <div className="bg-green border border-black border-solid shadow-2 w-fit p-3 lg:p-6 xl:p-8">
      <div className="flex gap-2 md:gap-7">
        <div className="flex flex-col gap-6 md:gap-9">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image
              src={logoSrc}
              alt={`${name} logo`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div>
          <Tag label={tag} selected readonly />
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-col text-xl md:text-4xl gap-2 font-bold text-black">
            <span className="whitespace-nowrap">{name}</span>
            <span>[{currency}]</span>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon
                  key={index}
                  className="w-9 h-9 md:w-12 md:h-12"
                  fill={index + 1 >= rating ? "none" : "#FF6700"}
                />
              ))}
            </div>
          </div>
          <div className="text-center md:text-xl py-1 px-2 bg-gray whitespace-nowrap">
            Awards: {awards} <span className="text-orange">CRIT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotProjectCard;
