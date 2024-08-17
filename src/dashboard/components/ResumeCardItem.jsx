import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ResumeCardItem = ({ resume }) => {
  console.log(resume);
  const { title, documentId } = resume;
  return (
    <Link to={`/dashboard/resume/${documentId}/edit`}>
      <div className="flex items-center justify-center border-2 border-purple-200 cursor-pointer rounded-lg hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out py-12">
        <NotebookIcon size={30} color="purple" />
        <h4>{title}</h4>
      </div>
    </Link>
  );
};

export default ResumeCardItem;
