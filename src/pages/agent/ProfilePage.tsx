import MainLayout from "../../components/layout/MainLayout";

export default function ProfilePage() {
  return (
    <MainLayout role="agent" title="Profile">
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-6">
          <div className="flex items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-[#1D3557] flex items-center justify-center text-white text-3xl font-bold">
              AR
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Alex Realty
              </h2>

              <p className="text-gray-500">
                Premium Real Estate Agent
              </p>

              <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                Verified Agent
              </div>
            </div>

          </div>
        </div>

        {/* Profile Information */}

        <div className="grid grid-cols-2 gap-6 mb-6">

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="font-semibold text-lg mb-5">
              Personal Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">
                  Full Name
                </label>

                <input
                  className="w-full border rounded-xl px-4 py-3 mt-1"
                  defaultValue="Alex Realty"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  Email
                </label>

                <input
                  className="w-full border rounded-xl px-4 py-3 mt-1"
                  defaultValue="alex@realty.com"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  Phone
                </label>

                <input
                  className="w-full border rounded-xl px-4 py-3 mt-1"
                  defaultValue="+91 9876543210"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="font-semibold text-lg mb-5">
              Business Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">
                  Company
                </label>

                <input
                  className="w-full border rounded-xl px-4 py-3 mt-1"
                  defaultValue="Prime Estates"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  License Number
                </label>

                <input
                  className="w-full border rounded-xl px-4 py-3 mt-1"
                  defaultValue="REA-2026-4587"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  Service Area
                </label>

                <input
                  className="w-full border rounded-xl px-4 py-3 mt-1"
                  defaultValue="Chennai, Bangalore"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-4 gap-6 mb-6">

          <div className="bg-white rounded-2xl p-6 border">
            <p className="text-gray-500 text-sm">
              Listings
            </p>

            <h3 className="text-3xl font-bold mt-2">
              42
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 border">
            <p className="text-gray-500 text-sm">
              Leads
            </p>

            <h3 className="text-3xl font-bold mt-2">
              156
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 border">
            <p className="text-gray-500 text-sm">
              Viewings
            </p>

            <h3 className="text-3xl font-bold mt-2">
              38
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 border">
            <p className="text-gray-500 text-sm">
              Rating
            </p>

            <h3 className="text-3xl font-bold mt-2">
              4.9
            </h3>
          </div>

        </div>

        {/* Subscription */}

        <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
          <h3 className="font-semibold text-lg mb-5">
            Subscription Plan
          </h3>

          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold">
                Professional Plan
              </h4>

              <p className="text-gray-500">
                Unlimited Listings & Analytics
              </p>
            </div>

            <button className="bg-[#1D3557] text-white px-5 py-3 rounded-xl">
              Upgrade Plan
            </button>
          </div>
        </div>

        {/* Actions */}

        <div className="flex justify-end gap-4">
          <button className="border px-6 py-3 rounded-xl">
            Cancel
          </button>

          <button className="bg-[#1D3557] text-white px-6 py-3 rounded-xl">
            Save Changes
          </button>
        </div>

      </div>
    </MainLayout>
  );
}