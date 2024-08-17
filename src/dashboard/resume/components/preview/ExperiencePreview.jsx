import { DotIcon, DotSquareIcon } from "lucide-react";
import React from "react";

const ExperiencePreview = ({ resumeInfo }) => {
  return (
    <div className="">
      <h2
        className="text-center font-bold text-sm mb-2 my-6"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.experience?.map((exp, index) => {
        return (
          <div key={index} className="my-2 border-b last:border-b-0 py-2">
            <div className="flex justify-between items-center font-medium">
              <h2 className="text-sm">{exp?.title}</h2>
              <h2 className="font-medium text-xs">
                {exp?.startDate} - {exp?.endDate ? exp?.endDate : "Present"}
              </h2>
            </div>

            <h2 className="text-sm font-medium">
              {exp?.companyName}, {exp?.city}, {exp?.state}
            </h2>
            <div className="flex flex-col text-sm">
              <span className="font-medium">Description: </span>
              {exp?.workSummery &&
                exp?.workSummery?.map((item, index) => (
                  <p key={index} className="flex items-center">
                    <DotIcon className="" size={20} />{" "}
                    <span className="text-xs">{item}</span>
                  </p>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperiencePreview;
