import { Bell, Search } from "lucide-react";

interface TopbarProps {
  title: string;
}

export default function Topbar({ title }: TopbarProps) {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      <div>
        <h2 className="text-2xl font-bold text-[#222222]">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl w-64"
          />
        </div>

        {/* Notifications */}
        <button className="relative">
          <Bell size={22} />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1D3557] text-white flex items-center justify-center">
            A
          </div>

          <div>
            <p className="font-medium text-sm">
              Alex Agent
            </p>

            <p className="text-xs text-gray-500">
              Premium Agent
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}