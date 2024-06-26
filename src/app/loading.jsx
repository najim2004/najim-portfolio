import { TbFidgetSpinner } from "react-icons/tb";

const Loader = () => {
  return (
    <div className="flex text-primary z-50 justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        <TbFidgetSpinner className="text-6xl text-primary animate-spin" />
        <p className="mt-4 text-lg text-primary font-bold">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
