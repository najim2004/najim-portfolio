import { MdInfoOutline } from "react-icons/md";

const Note = ({ details }) => {
  return (
    <div className="text-primary bg-[#EDF1F6] dark:bg-[#EDF1F6]/20 my-6 p-5 rounded-lg border-2 border-box-border border-l-[10px] dark:border-box-border/30">
      <h3 className="text-xl font-bold text-secondary flex gap-2 items-center duration-300 dark:text-gray-300">
        <MdInfoOutline />
        Note
      </h3>
      <p className="text-primary dark:text-gray-300 duration-300">{details}</p>
    </div>
  );
};

export default Note;
