import { useUser } from "@clerk/clerk-react";
import AddResume from "./components/AddResume";
import GlobalApi from "../../service/GlobalApi";
import { useEffect, useState } from "react";
import ResumeCardItem from "./components/ResumeCardItem";

const Dashboard = () => {
  const [resumeList, setResumeList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    user && getResumeList();
  }, [user]);

  // get resume list for respective user
  const getResumeList = () => {
    GlobalApi.GetUserResume(user?.primaryEmailAddress?.emailAddress).then(
      (res) => {
        setResumeList(res.data.data);
      }
    );
  };

  return (
    <section className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-4xl">My Resume</h2>
      <p className="text-lg">Start creating AI resume for your next Job role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-14">
        <AddResume />

        {resumeList.length > 0 &&
          resumeList.map((item) => (
            <ResumeCardItem resume={item} key={item?.id} />
          ))}
      </div>
    </section>
  );
};

export default Dashboard;
