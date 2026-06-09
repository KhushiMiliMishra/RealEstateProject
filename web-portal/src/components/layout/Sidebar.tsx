import { NavLink } from "react-router-dom";

interface SidebarProps {
  role: "agent" | "admin";
}

export default function Sidebar({
  role,
}: SidebarProps) {
  const agentLinks = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Properties",
      path: "/properties",
    },
    {
      label: "Add Property",
      path: "/properties/new",
    },
    {
      label: "Leads",
      path: "/leads",
    },
    {
      label: "Profile",
      path: "/profile",
    },
    {
      label: "Analytics",
      path: "/analytics",
    },
  ];

  const adminLinks = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      label: "Moderation",
      path: "/admin/moderation",
    },
    {
      label: "Agents",
      path: "/admin/agents",
    },
    {
      label: "Analytics",
      path: "/admin/analytics",
    },
  ];

  const links =
    role === "agent"
      ? agentLinks
      : adminLinks;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-[#1D3557]">
          PropVault
        </h1>
      </div>

      <nav className="p-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-[#1D3557] text-white"
                  : "hover:bg-slate-100"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}