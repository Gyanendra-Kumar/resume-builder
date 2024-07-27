import AddResume from "./components/AddResume";

const Dashboard = () => {
  return (
    <section className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-4xl">My Resume</h2>
      <p className="text-lg">Start creating AI resume for your next Job role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-14">
        <AddResume />
      </div>
    </section>
  );
};

export default Dashboard;
