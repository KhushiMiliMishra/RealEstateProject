import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import { addProperty } from "../../services/propertyService";

export default function PropertyFormPage() {
  const navigate = useNavigate();

  const [property, setProperty] = useState({
    title: "",
    propertyType: "Apartment",
    price: "",
    bhk: 1,
    description: "",
    address: "",
    city: "",
    areaSqft: "",
    status: "Available",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await addProperty({
        title: property.title,
        propertyType: property.propertyType,
        price: Number(property.price),
        bhk: Number(property.bhk),
        description: property.description,
        address: property.address,
        city: property.city,
        areaSqft: Number(property.areaSqft),
        status: property.status,
        transactionType: "Sale",
        agentId: 1,
      });

      alert("Property Saved Successfully");
      navigate("/properties");
    } catch (error) {
      console.error(error);
      alert("Failed to save property");
    }
  };

  return (
    <MainLayout role="agent" title="Add Property">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Add New Property</h2>

          <p className="text-gray-500 mt-2">
            Create and publish a new property listing
          </p>
        </div>

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
                name="title"
                value={property.title}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
                placeholder="Luxury Villa in Chennai"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Property Type
              </label>

              <select
                name="propertyType"
                value={property.propertyType}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >
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
                name="price"
                value={property.price}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
                placeholder="₹"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                BHK
              </label>

              <select
                name="bhk"
                value={property.bhk}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              name="description"
              value={property.description}
              onChange={handleChange}
              rows={5}
              className="w-full border rounded-xl px-4 py-3"
              placeholder="Describe the property..."
            />
          </div>
        </div>

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
                name="address"
                value={property.address}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
                placeholder="Full Property Address"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                City
              </label>

              <input
                name="city"
                value={property.city}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
                placeholder="Chennai"
              />
            </div>
          </div>

          <div className="mt-6 h-64 bg-slate-100 rounded-xl flex items-center justify-center">
            Map Picker Placeholder
          </div>
        </div>

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
                name="areaSqft"
                value={property.areaSqft}
                onChange={handleChange}
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

              <select
                name="status"
                value={property.status}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option>Available</option>
                <option>Sold</option>
                <option>Rented</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="text-xl font-semibold mb-6">
            Media Upload
          </h3>

          <div className="border-2 border-dashed border-gray-300 rounded-2xl h-48 flex items-center justify-center text-gray-500">
            Upload Photos / Videos
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={() => navigate("/properties")}
            className="px-6 py-3 border rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-3 bg-[#1D3557] text-white rounded-xl"
          >
            Save Property
          </button>
        </div>
      </div>
    </MainLayout>
  );
}