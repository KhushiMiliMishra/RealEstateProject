import MainLayout from "../../components/layout/MainLayout";

export default function PlatformAnalyticsPage() {
  return (
    <MainLayout
      role="admin"
      title="Platform Analytics"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Platform Analytics
        </h2>

        <p className="text-gray-500">
          Monitor overall marketplace performance
        </p>
      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border">
          <p className="text-gray-500">
            Total Listings
          </p>

          <h3 className="text-3xl font-bold mt-2">
            12,584
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border">
          <p className="text-gray-500">
            New Listings
          </p>

          <h3 className="text-3xl font-bold mt-2">
            1,284
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border">
          <p className="text-gray-500">
            Registered Seekers
          </p>

          <h3 className="text-3xl font-bold mt-2">
            25,482
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border">
          <p className="text-gray-500">
            Daily Active Users
          </p>

          <h3 className="text-3xl font-bold mt-2">
            8,124
          </h3>
        </div>
      </div>

      {/* Charts Placeholder */}

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border h-80">
          Search Trends Chart
        </div>

        <div className="bg-white rounded-2xl p-6 border h-80">
          Listing Growth Chart
        </div>
      </div>

      {/* Top Localities */}

      <div className="bg-white rounded-2xl p-6 border">
        <h3 className="font-semibold text-lg mb-5">
          Top Localities
        </h3>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Chennai OMR</span>
            <span>1,284 Listings</span>
          </div>

          <div className="flex justify-between">
            <span>Whitefield</span>
            <span>1,012 Listings</span>
          </div>

          <div className="flex justify-between">
            <span>Hitech City</span>
            <span>958 Listings</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}