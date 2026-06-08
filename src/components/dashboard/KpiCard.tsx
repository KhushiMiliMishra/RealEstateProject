interface KpiCardProps {
  title: string;
  value: string;
  growth: string;
}

export default function KpiCard({
  title,
  value,
  growth,
}: KpiCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <div className="mt-3 flex items-end justify-between">
        <h3 className="text-3xl font-bold text-[#222222]">
          {value}
        </h3>

        <span className="text-green-600 text-sm font-medium">
          {growth}
        </span>
      </div>
    </div>
  );
}