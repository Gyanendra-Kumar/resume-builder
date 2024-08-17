const EducationPreview = ({ resumeInfo }) => {
  return (
    <div>
      <h2
        className="text-center font-bold text-sm mb-2 my-6"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Education
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />
      {resumeInfo?.education?.map((item) => {
        return (
          <div className="my-5 text-sm" key={item?.id}>
            <h2
              className="font-semibold"
              style={{ color: resumeInfo?.themeColor }}
            >
              {item?.universityName}
            </h2>
            <div className="flex justify-between items-center font-semibold">
              <p className="text-xs">
                {item?.degree} in {item?.major}
              </p>
              <p className="text-xs">
                {item?.startDate} - {item?.endDate}
              </p>
            </div>
            <p className="text-xs mt-2">{item?.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EducationPreview;
