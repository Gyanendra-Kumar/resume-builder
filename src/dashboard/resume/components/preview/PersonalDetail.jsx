import React from "react";

const PersonalDetail = ({ resumeInfo }) => {
  return (
    <div>
      <h2
        className="resume-header-center"
        style={{ color: resumeInfo?.themeColor }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-center text-md font-medium">
        {resumeInfo?.jobTitle}
      </h2>
      <h2 className="text-center text-xs font-normal">{resumeInfo?.address}</h2>

      <div
        className="flex justify-between text-sm"
        style={{ color: resumeInfo?.themeColor }}
      >
        <h2>{resumeInfo?.phone}</h2>
        <h2>{resumeInfo?.email}</h2>
      </div>

      <hr className="my-2" style={{ borderColor: resumeInfo?.themeColor }} />
    </div>
  );
};

export default PersonalDetail;
