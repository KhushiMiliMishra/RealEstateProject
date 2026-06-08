import MainLayout from "../../components/layout/MainLayout";
import KpiCard from "../../components/dashboard/KpiCard";
import ActivityFeed from "../../components/dashboard/ActivityFeed";

export default function DashboardPage() {
  return (
    <MainLayout
      role="agent"
      title="Dashboard"
    >
      {/* KPI Cards */}

      <div className="grid grid-cols-4 gap-6 mb-8">
        <KpiCard
          title="Active Listings"
          value="128"
          growth="+12%"
        />

        <KpiCard
          title="Total Inquiries"
          value="542"
          growth="+18%"
        />

        <KpiCard
          title="Scheduled Viewings"
          value="87"
          growth="+8%"
        />

        <KpiCard
          title="Response Rate"
          value="96%"
          growth="+4%"
        />
      </div>

      {/* Second Row */}

      <div className="grid grid-cols-3 gap-6">
        {/* Analytics Placeholder */}

        <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg">
              Weekly Performance
            </h3>

            <button className="text-[#1D3557] font-medium">
              View Report
            </button>
          </div>

          <div className="h-72 flex items-center justify-center bg-slate-50 rounded-xl">
            <span className="text-gray-400">
              Chart Coming Soon
            </span>
          </div>
        </div>

        {/* Activity Feed */}

        <ActivityFeed />
      </div>

      {/* Quick Actions */}

      <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg mb-5">
          Quick Actions
        </h3>

        <div className="flex gap-4">
          <button className="bg-[#1D3557] text-white px-6 py-3 rounded-xl">
            Add Property
          </button>

          <button className="bg-[#2A9D8F] text-white px-6 py-3 rounded-xl">
            View Leads
          </button>

          <button className="bg-[#F4A261] text-white px-6 py-3 rounded-xl">
            Analytics
          </button>
        </div>
      </div>
    </MainLayout>
  );
}