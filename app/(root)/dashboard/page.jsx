import { connectDB } from "@/lib/mongoose";

const Dashboard = () => {
  connectDB()

  return <div>Dashboard</div>;
};

export default Dashboard;
