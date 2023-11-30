import Image from "next/image";
import Link from "next/link";

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="bg-gradient-to-r from-slate from-30% to-green ">
      <div className="container mx-auto flex items-center py-3">
      <Image
        className="ml-5"
        src="/logo_small.svg"
        alt="Logo"
        width={72}
        height={72}
        priority
      />
      <h1 className="md:max-lg:hidden font-raleway text-green text-3xl font-semibold ml-2">
        CRITICICE
      </h1>
      <div className="hidden md:flex w-full items-center">
        <label className="relative block ml-5 text-2xl">
          <span className="sr-only">Search</span>
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <Image
              className=""
              width={24}
              height={24}
              alt="Search icon"
              src="/search.svg"
            />
          </span>
          <input
            className="text-xl placeholder:font-source-sans-3 w-56 placeholder:text-black placeholder:text-opacity-60 placeholder:text-xl block bg-white border border-black shadow-inner py-4 pl-9 pr-3 focus:outline-none focus:border-2"
            placeholder="Search any project"
            type="text"
            name="search"
          />
        </label>
        <button className="ml-5 p-3 bg-green font-raleway text-2xl whitespace-nowrap font-semibold text-white">
          Submit project
        </button>
        <Link
          href="/blog"
          className="ml-auto font-raleway font-semibold text-2xl"
        >
          Blog
        </Link>
        <div className="ml-5 flex items-center gap-1">
          <Image src="/wallet.svg" alt="Wallet icon" width={35} height={35} />
          <span className="ml-1 font-raleway font-semibold text-2xl">520</span>
          <span className="font-raleway text-orange font-semibold text-2xl">
            CRIT
          </span>
        </div>
        <div className="flex items-center -space-x-8 overflow-hidden mr-5">
          <div className="rounded-full h-20 w-20 relative ml-5">
            <Image
              src="/avatar-rogemon.png"
              alt="Avatar"
              fill
              className="overflow-hidden rounded-full"
            />
          </div>
          <div className="rounded-[20px] md:max-xl:hidden border-2 border-black bg-white p-4 pl-10">
            <span className="text-2xl text-black font-semibold">
              0xGEd4...FFa
            </span>
          </div>
        </div>
      </div>

      <details role="menu" className="group md:hidden ml-auto mr-5">
        <summary className="list-none block h-10 w-10 cursor-pointer relative bg-white group-open:before:fixed group-open:before:z-10 group-open:before:bg-black group-open:before:inset-0 group-open:before:opacity-25">
          <div className=" block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -translate-y-1.5 group-open:rotate-45 group-open:translate-y-0"
            ></span>
            <span
              aria-hidden="true"
              className="block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out group-open:opacity-0"
            ></span>
            <span
              aria-hidden="true"
              className="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out translate-y-1.5 group-open:-rotate-45 group-open:translate-y-0"
            ></span>
          </div>
        </summary>
        <div className="bg-white absolute w-fit p-2 sm:w-8/12 sm:p-20 h-screen left-0 top-0 z-20 flex flex-col gap-10">
          <label className="relative block ml-5 text-2xl">
            <span className="sr-only">Search</span>
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <Image
                className=""
                width={24}
                height={24}
                alt="Search icon"
                src="/search.svg"
              />
            </span>
            <input
              className="text-xl placeholder:font-source-sans-3 w-56 placeholder:text-black placeholder:text-opacity-60 placeholder:text-xl block bg-white border border-black shadow-inner py-4 pl-9 pr-3 focus:outline-none focus:border-2"
              placeholder="Search any project"
              type="text"
              name="search"
            />
          </label>

          <button className="ml-5 p-3 bg-green font-raleway text-2xl font-semibold text-white">
            Submit project
          </button>
          <Link href="/blog" className="font-raleway font-semibold text-2xl">
            Blog
          </Link>
          <div className="ml-5 flex items-center gap-1">
            <Image src="/wallet.svg" alt="Wallet icon" width={35} height={35} />
            <span className="ml-1 font-raleway font-semibold text-2xl">
              520
            </span>
            <span className="font-raleway text-orange font-semibold text-2xl">
              CRIT
            </span>
          </div>
          <div className="flex items-center -space-x-8 overflow-hidden mr-5">
            <div className="rounded-full h-20 w-20 relative ml-5">
              <Image
                src="/avatar-rogemon.png"
                alt="Avatar"
                fill
                className="overflow-hidden rounded-full"
              />
            </div>
            <div className="rounded-[20px] border-2 border-black bg-white p-4 pl-10">
              <span className="text-2xl text-black font-semibold">
                0xGEd4...FFa
              </span>
            </div>
          </div>
        </div>
      </details>
      </div>
    </header>
  );
}
