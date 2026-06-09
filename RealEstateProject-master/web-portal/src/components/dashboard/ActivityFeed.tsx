const activities = [
  "New inquiry received for Luxury Villa",
  "Property listing approved",
  "Viewing scheduled for tomorrow",
  "Price updated for Downtown Apartment",
];

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-lg mb-5">
        Recent Activity
      </h3>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex gap-3 items-start"
          >
            <div className="w-2 h-2 rounded-full bg-[#2A9D8F] mt-2" />

            <p className="text-sm text-gray-600">
              {activity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}