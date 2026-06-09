import MainLayout from "../../components/layout/MainLayout";

const agents = [
  {
    id: 1,
    name: "Alex Realty",
    company: "Prime Estates",
    listings: 42,
    status: "Verified",
  },
  {
    id: 2,
    name: "Urban Homes",
    company: "Urban Group",
    listings: 28,
    status: "Pending",
  },
];

export default function AgentManagementPage() {
  return (
    <MainLayout
      role="admin"
      title="Agent Management"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Agent Management
        </h2>

        <p className="text-gray-500">
          Manage platform agents
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-6 py-4">
                Agent
              </th>

              <th className="text-left px-6 py-4">
                Company
              </th>

              <th className="text-left px-6 py-4">
                Listings
              </th>

              <th className="text-left px-6 py-4">
                Status
              </th>

              <th className="text-left px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {agents.map((agent) => (
              <tr
                key={agent.id}
                className="border-t"
              >
                <td className="px-6 py-4">
                  {agent.name}
                </td>

                <td className="px-6 py-4">
                  {agent.company}
                </td>

                <td className="px-6 py-4">
                  {agent.listings}
                </td>

                <td className="px-6 py-4">
                  {agent.status}
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <button className="text-green-600">
                      Verify
                    </button>

                    <button className="text-orange-600">
                      Suspend
                    </button>

                    <button className="text-red-600">
                      Deactivate
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}