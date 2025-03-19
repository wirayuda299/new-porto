import Image from "next/image";

export default function Loader() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black-200">
      <Image
        src={"/logo.png"}
        width={100}
        height={100}
        alt="logo"
        className="invert object-cover"
      />
      <p className="text-sm text-white">Loading....</p>
    </div>
  );
}
