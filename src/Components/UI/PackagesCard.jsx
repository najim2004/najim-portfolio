"use client";

const PackagesCard = ({ technologies, title }) => {
  return (
    <div className="min-h-20 rounded-lg border border-box-border p-2">
      <h3 className="text-xl font-bold text-primary mx-auto text-center">
        {title}
      </h3>
      <hr />
      <div className="p-5 flex gap-4 flex-wrap justify-center">
        {technologies?.map((technology, idx) => (
          <span
            className="border-[1px] px-[2px] rounded-md border-box-border bg-box-border text-primary/80 font-medium text-[12px]"
            key={idx}
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PackagesCard;
