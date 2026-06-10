import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { getAgentByUserId } from "../../services/agentService";

export default function ProfilePage() {
  const [agent, setAgent] = useState<any>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user") || "{}"
      );

      const data = await getAgentByUserId(user.id);

      setAgent(data);
    } catch (error) {
      console.error("Failed to load profile", error);
    }
  };

  if (!agent) {
    return (
      <MainLayout role="agent" title="Profile">
        <div className="p-10 text-center">
          Loading Profile...
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout role="agent" title="Profile">
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-6">
          <div className="flex items-center gap-6">

            <div className="w-24 h-24 rounded-full bg-[#1D3557] flex items-center justify-center text-white text-3xl font-bold">
              {agent.fullName
                ?.split(" ")
                .map((word: string) => word[0])
                .join("")
                .substring(0, 2)}
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                {agent.fullName}
              </h2>

              <p className="text-gray-500">
                Real Estate Agent
              </p>

              <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                {agent.status}
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
                  value={agent.fullName || ""}
                  readOnly
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  Email
                </label>

                <input
                  className="w-full border rounded-xl px-4 py-3 mt-1"
                  value={agent.email || ""}
                  readOnly
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  Phone
                </label>

                <input
                  className="w-full border rounded-xl px-4 py-3 mt-1"
                  value={agent.phone || ""}
                  readOnly
                />
              </div>

            </div>
          </div>

          {/* Business Information */}

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
                  value={agent.companyName || ""}
                  readOnly
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  License Number
                </label>

                <input
                  className="w-full border rounded-xl px-4 py-3 mt-1"
                  value="REA-2026-4587"
                  readOnly
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  Service Area
                </label>

                <input
                  className="w-full border rounded-xl px-4 py-3 mt-1"
                  value="Chennai, Bangalore"
                  readOnly
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

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
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

      </div>
    </MainLayout>
  );
}