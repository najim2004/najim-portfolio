import { MdInfoOutline } from "react-icons/md";

const Note = ({ details }) => {
  return (
    <div className="text-primary bg-[#EDF1F6] my-6 p-5 rounded-lg border-2 border-box-border border-l-[10px]">
      <h3 className="text-xl font-bold text-secondary flex gap-2 items-center">
        <MdInfoOutline />
        Note
      </h3>
      <p className="text-primary">{details}</p>
    </div>
  );
};

export default Note;
