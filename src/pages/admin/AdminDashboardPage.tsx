import MainLayout from "../../components/layout/MainLayout";
import KpiCard from "../../components/dashboard/KpiCard";
import ActivityFeed from "../../components/dashboard/ActivityFeed";

export default function AdminDashboardPage() {
  return (
    <MainLayout
      role="admin"
      title="Admin Dashboard"
    >
      {/* KPI Cards */}

      <div className="grid grid-cols-4 gap-6 mb-8">
        <KpiCard
          title="Active Listings"
          value="2,847"
          growth="+14%"
        />

        <KpiCard
          title="Pending Approvals"
          value="84"
          growth="+7%"
        />

        <KpiCard
          title="Registered Agents"
          value="326"
          growth="+11%"
        />

        <KpiCard
          title="Daily Active Users"
          value="5,482"
          growth="+22%"
        />
      </div>

      {/* Charts + Activity */}

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg">
              Platform Overview
            </h3>

            <button className="text-[#1D3557] font-medium">
              Export Report
            </button>
          </div>

          <div className="h-72 bg-slate-50 rounded-xl flex items-center justify-center">
            Platform Growth Chart
          </div>
        </div>

        <ActivityFeed />
      </div>

      {/* Quick Actions */}

      <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100">
        <h3 className="font-semibold text-lg mb-5">
          Admin Actions
        </h3>

        <div className="flex gap-4">
          <button className="bg-[#1D3557] text-white px-6 py-3 rounded-xl">
            Review Listings
          </button>

          <button className="bg-[#2A9D8F] text-white px-6 py-3 rounded-xl">
            Manage Agents
          </button>

          <button className="bg-[#F4A261] text-white px-6 py-3 rounded-xl">
            View Analytics
          </button>
        </div>
      </div>
    </MainLayout>
  );
}