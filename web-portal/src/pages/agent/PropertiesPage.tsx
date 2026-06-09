import MainLayout from "../../components/layout/MainLayout";
import Badge from "../../components/common/Badge";
import { properties } from "../../mock/properties";

export default function PropertiesPage() {
  return (
    <MainLayout
      role="agent"
      title="Properties"
    >
      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">
            Property Listings
          </h2>

          <p className="text-gray-500">
            Manage all your property listings
          </p>
        </div>

        <button className="bg-[#1D3557] text-white px-5 py-3 rounded-xl">
          + Add Property
        </button>
      </div>

      {/* Search & Filters */}

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
        <div className="flex gap-4">
          <input
            placeholder="Search property..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3"
          />

          <select className="border border-gray-300 rounded-xl px-4 py-3">
            <option>All Types</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Plot</option>
          </select>

          <select className="border border-gray-300 rounded-xl px-4 py-3">
            <option>All Status</option>
            <option>Available</option>
            <option>Sold</option>
            <option>Pending</option>
          </select>
        </div>
      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-6 py-4">Property</th>
              <th className="text-left px-6 py-4">Price</th>
              <th className="text-left px-6 py-4">Type</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-left px-6 py-4">Location</th>
              <th className="text-left px-6 py-4">Date Added</th>
              <th className="text-left px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((property) => (
              <tr
                key={property.id}
                className="border-t"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-16 h-16 rounded-xl object-cover"
                    />

                    <div>
                      <p className="font-semibold">
                        {property.title}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  {property.price}
                </td>

                <td className="px-6 py-4">
                  {property.type}
                </td>

                <td className="px-6 py-4">
                  <Badge status={property.status} />
                </td>

                <td className="px-6 py-4">
                  {property.location}
                </td>

                <td className="px-6 py-4">
                  {property.date}
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="text-[#1D3557]">
                      View
                    </button>

                    <button className="text-[#2A9D8F]">
                      Edit
                    </button>

                    <button className="text-red-500">
                      Delete
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