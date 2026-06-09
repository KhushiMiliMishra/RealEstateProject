import MainLayout from "../../components/layout/MainLayout";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

import {
  monthlyViews,
  leadConversion,
} from "../../mock/analytics";

export default function AnalyticsPage() {
  return (
    <MainLayout
      role="agent"
      title="Analytics"
    >
      {/* Header */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Performance Analytics
        </h2>

        <p className="text-gray-500">
          Track listing performance and lead conversion
        </p>
      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <p className="text-gray-500 text-sm">
            Property Views
          </p>

          <h3 className="text-3xl font-bold mt-2">
            12,542
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <p className="text-gray-500 text-sm">
            Total Leads
          </p>

          <h3 className="text-3xl font-bold mt-2">
            1,248
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <p className="text-gray-500 text-sm">
            Viewing Requests
          </p>

          <h3 className="text-3xl font-bold mt-2">
            324
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <p className="text-gray-500 text-sm">
            Conversion Rate
          </p>

          <h3 className="text-3xl font-bold mt-2">
            68%
          </h3>
        </div>
      </div>

      {/* Charts */}

      <div className="grid grid-cols-3 gap-6">
        {/* Line Chart */}

        <div className="col-span-2 bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-semibold text-lg mb-6">
            Monthly Property Views
          </h3>

          <div className="h-80">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <LineChart data={monthlyViews}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#1D3557"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-semibold text-lg mb-6">
            Lead Conversion
          </h3>

          <div className="h-80">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>
                <Pie
                  data={leadConversion}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Listings */}

      <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100">
        <h3 className="font-semibold text-lg mb-5">
          Top Performing Listings
        </h3>

        <div className="space-y-4">
          <div className="flex justify-between border-b pb-3">
            <span>Luxury Villa</span>
            <span>3,250 Views</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Skyline Apartment</span>
            <span>2,980 Views</span>
          </div>

          <div className="flex justify-between">
            <span>Green Valley Plot</span>
            <span>2,100 Views</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}