import MainLayout from "../../components/layout/MainLayout";

const listings = [
  {
    id: 1,
    property: "Luxury Villa",
    agent: "Alex Realty",
    submitted: "08 Jun 2026",
  },
  {
    id: 2,
    property: "Skyline Apartment",
    agent: "Urban Homes",
    submitted: "07 Jun 2026",
  },
];

export default function ModerationPage() {
  return (
    <MainLayout
      role="admin"
      title="Moderation Center"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Listing Moderation
        </h2>

        <p className="text-gray-500">
          Review and approve submitted properties
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-6 py-4">
                Property
              </th>

              <th className="text-left px-6 py-4">
                Agent
              </th>

              <th className="text-left px-6 py-4">
                Submitted
              </th>

              <th className="text-left px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {listings.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >
                <td className="px-6 py-4">
                  {item.property}
                </td>

                <td className="px-6 py-4">
                  {item.agent}
                </td>

                <td className="px-6 py-4">
                  {item.submitted}
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <button className="text-green-600">
                      Approve
                    </button>

                    <button className="text-red-600">
                      Reject
                    </button>

                    <button className="text-[#1D3557]">
                      Review
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