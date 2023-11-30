import Image from "next/image";
import HotProject from "../components/hot-project";
import Filters from "@/components/filters";

const mockProjects = [
  {
    id: 1,
    tag: "GameFi",
    logoSrc: "/project_1.avif",
    name: "Project 1",
    rating: 4.5,
    currency: "PRA",
    awards: 2000,
  },
  {
    id: 2,
    tag: "NFT",
    logoSrc: "/project_2.avif",
    name: "Project 2",
    rating: 3.8,
    currency: "PRA",
    awards: 0,
  },
  {
    id: 3,
    tag: "DeFi",
    logoSrc: "/project_3.webp",
    name: "Project 3",
    rating: 4.2,
    currency: "PRA",
    awards: 100500,
  },
];

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col p-3">
      <h1 className="text-4xl font-semibold mb-5">Hot projects 🔥</h1>
      <div className="flex items-center justify-between w-full gap-3 md:gap-6 overflow-x-auto p- mb-4">
        {mockProjects.map((project) => (
          <HotProject key={project.id} {...project} />
        ))}
      </div>
      <Filters />
    </main>
  );
}
