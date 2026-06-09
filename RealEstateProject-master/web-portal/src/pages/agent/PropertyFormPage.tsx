import MainLayout from "../../components/layout/MainLayout";

export default function PropertyFormPage() {
  return (
    <MainLayout role="agent" title="Add Property">
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Add New Property
          </h2>

          <p className="text-gray-500 mt-2">
            Create and publish a new property listing
          </p>
        </div>

        {/* Basic Details */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="text-xl font-semibold mb-6">
            Basic Details
          </h3>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium">
                Property Title
              </label>

              <input
                className="w-full border rounded-xl px-4 py-3"
                placeholder="Luxury Villa in Chennai"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Property Type
              </label>

              <select className="w-full border rounded-xl px-4 py-3">
                <option>Apartment</option>
                <option>Villa</option>
                <option>Plot</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Price
              </label>

              <input
                className="w-full border rounded-xl px-4 py-3"
                placeholder="₹"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                BHK
              </label>

              <select className="w-full border rounded-xl px-4 py-3">
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>4 BHK</option>
              </select>
            </div>

          </div>

          <div className="mt-6">
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows={5}
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Describe the property..."
            />
          </div>
        </div>

        {/* Location */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="text-xl font-semibold mb-6">
            Location
          </h3>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium">
                Address
              </label>

              <input
                className="w-full border rounded-xl px-4 py-3"
                placeholder="Full Property Address"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                City
              </label>

              <input
                className="w-full border rounded-xl px-4 py-3"
                placeholder="Chennai"
              />
            </div>

          </div>

          <div className="mt-6 h-64 bg-slate-100 rounded-xl flex items-center justify-center">
            Map Picker Placeholder
          </div>
        </div>

        {/* Property Information */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="text-xl font-semibold mb-6">
            Property Information
          </h3>

          <div className="grid grid-cols-4 gap-6">

            <div>
              <label className="block mb-2 font-medium">
                Area (sq.ft)
              </label>

              <input
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Floor
              </label>

              <input
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Building Age
              </label>

              <input
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Status
              </label>

              <select className="w-full border rounded-xl px-4 py-3">
                <option>Available</option>
                <option>Sold</option>
                <option>Rented</option>
              </select>
            </div>

          </div>
        </div>

        {/* Media Upload */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="text-xl font-semibold mb-6">
            Media Upload
          </h3>

          <div className="border-2 border-dashed border-gray-300 rounded-2xl h-48 flex items-center justify-center text-gray-500">
            Upload Photos / Videos
          </div>
        </div>

        {/* Actions */}

        <div className="flex justify-end gap-4">
          <button className="px-6 py-3 border rounded-xl">
            Cancel
          </button>

          <button className="px-6 py-3 bg-[#1D3557] text-white rounded-xl">
            Save Property
          </button>
        </div>

      </div>
    </MainLayout>
  );
}