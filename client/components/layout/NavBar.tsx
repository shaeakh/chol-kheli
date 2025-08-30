"use client";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
const NavBar = () => {
  const router = useRouter();
  const handleButton = (path: String) => {
    router.push(path.toString());
  };
  return (
    <div className="w-full p-2 flex justify-between items-center">
      {/* border-2 border-black */}
      <div className="logo ">
        <Image
          onClick={() => {
            router.push("/");
          }}
          className=" rounded-md"
          src={logo.src}
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex gap-4 mx-2">
        <button
          onClick={() => {
            handleButton("/about");
          }}
          className="btn btn-secondary font-bold hover:text-violet-600 hover:scale-105 transition-all duration-300"
        >
          About
        </button>
        <button
          onClick={() => {
            handleButton("/auth");
          }}
          className="btn btn-primary font-bold hover:text-violet-600 hover:scale-105 transition-all duration-300 "
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
