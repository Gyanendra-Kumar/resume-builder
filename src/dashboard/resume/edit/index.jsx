import { useParams } from "react-router-dom";
import FormSection from "../components/FormSection";
import ResumePreview from "../components/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useEffect, useState } from "react";
import data from "@/dummyData/data";

const EditResume = () => {
  const { resumeId } = useParams();

  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    setResumeInfo(data);
  }, []);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* FORM SECTION */}
        <FormSection />
        {/* PREVIEW SECTION */}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default EditResume;
