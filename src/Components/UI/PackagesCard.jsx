"use client";

const PackagesCard = ({ technologies, title }) => {
  return (
    <div className="min-h-20 rounded-lg border border-box-border duration-300 dark:border-secondary/50 p-2">
      <h3 className="text-xl font-bold text-primary duration-300 dark:text-primary-bg mx-auto text-center">
        {title}
      </h3>
      <hr className="duration-300 dark:border-secondary/50" />
      <div className="p-5 flex gap-4 flex-wrap justify-center">
        {technologies?.map((technology, idx) => (
          <span
            className="border-[1px] px-[2px] rounded-md border-box-border bg-box-border text-primary/80 font-medium text-sm"
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
