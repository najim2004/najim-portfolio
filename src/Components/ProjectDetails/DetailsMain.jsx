const DetailsMain = ({ obj }) => {
  return (
    <div className="min-h-[150px] bg-secondary-bg rounded-3xl border-2 border-box-border shadow-md p-10 font-primary">
      <div className="w-[700px] h-[400px] bg-gray-200 mx-auto rounded-md overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="max-w-[700px] lg:w-[700px] max-h-[400px]"
          src={obj?.img}
          alt=""
        />
      </div>
      <div className="max-w-[700px] mx-auto">
        {/* description */}
        <div className="">
          <h3 className="h3">Description:</h3>
          <p className="text-secondary">{obj?.description}</p>
        </div>
        {/* Project skills */}
        <div className="">
          <h3 className="h3">Projects skills:</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="">
              {obj?.skills?.frontend && <h4 className="h4">Front-End:</h4>}
              <ul className="list-disc ml-8">
                {obj?.skills?.frontend?.map((skill, idx) => {
                  return (
                    <li key={idx} className="li">
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="">
              {obj?.skills?.backend && <h4 className="h4">Back-End:</h4>}
              <ul className="list-disc ml-8">
                {obj?.skills?.backend?.map((skill, idx) => {
                  return (
                    <li key={idx} className="li">
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="">
              {obj?.skills?.authentication && (
                <h4 className="h4">Authentication:</h4>
              )}
              <ul className="list-disc ml-8">
                {obj?.skills?.authentication?.map((skill, idx) => {
                  return (
                    <li key={idx} className="li">
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsMain;
