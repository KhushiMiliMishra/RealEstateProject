import MainLayout from "../../components/layout/MainLayout";
import { inquiries } from "../../mock/inquiries";

export default function LeadsPage() {
  return (
    <MainLayout role="agent" title="Leads & Requests">
      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">
            Leads & Requests
          </h2>

          <p className="text-gray-500">
            Manage inquiries and viewing requests
          </p>
        </div>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-sm">
            Total Leads
          </p>

          <h3 className="text-3xl font-bold mt-2">
            156
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-sm">
            Viewing Requests
          </p>

          <h3 className="text-3xl font-bold mt-2">
            42
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-sm">
            Conversion Rate
          </p>

          <h3 className="text-3xl font-bold mt-2">
            28%
          </h3>
        </div>
      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
        <input
          placeholder="Search leads..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />
      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-6 py-4">
                Client
              </th>

              <th className="text-left px-6 py-4">
                Property
              </th>

              <th className="text-left px-6 py-4">
                Type
              </th>

              <th className="text-left px-6 py-4">
                Date
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
            {inquiries.map((lead) => (
              <tr
                key={lead.id}
                className="border-t"
              >
                <td className="px-6 py-4">
                  {lead.client}
                </td>

                <td className="px-6 py-4">
                  {lead.property}
                </td>

                <td className="px-6 py-4">
                  {lead.type}
                </td>

                <td className="px-6 py-4">
                  {lead.date}
                </td>

                <td className="px-6 py-4">
                  {lead.status}
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <button className="text-[#1D3557]">
                      View
                    </button>

                    <button className="text-[#2A9D8F]">
                      Reply
                    </button>

                    <button className="text-[#F4A261]">
                      Schedule
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