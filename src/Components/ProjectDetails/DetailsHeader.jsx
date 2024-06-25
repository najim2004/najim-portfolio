"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

const DetailsHeader = ({ title, desc }) => {
  const router = useRouter();
  return (
    <div className="min-h-[150px] bg-secondary-bg rounded-3xl border-2 border-box-border shadow-md py-6 px-2 lg:p-10 flex flex-col justify-center items-start">
      <button
        onClick={() => router.back()}
        className="flex items-center justify-center gap-2 text-xl font-medium text-secondary"
      >
        <FaChevronLeft className="text-2xl" /> Back
      </button>
      <h3 className="text-5xl text-primary font-bold mt-8">{title}</h3>
      <p className="text-primary mt-3">{desc}</p>
    </div>
  );
};

export default DetailsHeader;
