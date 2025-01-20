import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardHome } from "@/components/dashboard/DashboardHome";
import { Agribusiness } from "@/components/dashboard/Agribusiness";
import { Manufacturing } from "@/components/dashboard/Manufacturing";
import { Tourism } from "@/components/dashboard/Tourism";
import { Youth } from "@/components/dashboard/Youth";
import { Community } from "@/components/dashboard/Community";
import { Conservation } from "@/components/dashboard/Conservation";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<DashboardHome />} />
        <Route path="agribusiness" element={<Agribusiness />} />
        <Route path="manufacturing" element={<Manufacturing />} />
        <Route path="tourism" element={<Tourism />} />
        <Route path="youth" element={<Youth />} />
        <Route path="community" element={<Community />} />
        <Route path="conservation" element={<Conservation />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;