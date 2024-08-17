import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const SkillPreview = ({ resumeInfo }) => {
  return (
    <div>
      <h2
        className="text-center font-bold text-sm mb-2 my-6"
        style={{ color: resumeInfo?.themeColor }}
      >
        Skills
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      <div className="grid grid-cols-2 p-4 gap-1 space-x-4">
        {resumeInfo?.skills?.map((skill) => {
          return (
            <div key={skill?.id} className="flex items-center justify-between">
              <h2 className="text-xs">{skill?.name}</h2>
              <div
                className={`h-4 bg-gray-200 w-[120px] hover:cursor-pointer`}
                data-tooltip-id={`tooltip-${skill?.id}`}
              >
                <div
                  className={`h-4 hover:opacity-85 flex justify-center text-xs w-full text-white transition-colors duration-300 ease-linear`}
                  style={{
                    backgroundColor: resumeInfo?.themeColor,
                    width: skill?.rating + "%",
                  }}
                >
                  {skill?.rating}%
                </div>
              </div>
              <ReactTooltip
                effect="solid"
                textColor="#fff"
                className="bg-slate-500"
                id={`tooltip-${skill?.id}`}
                content={`${skill?.name}: ${skill?.rating}%`}
                place="bottom-end"
                // style={{
                //   backgroundColor: resumeInfo?.themeColor,
                // }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillPreview;
