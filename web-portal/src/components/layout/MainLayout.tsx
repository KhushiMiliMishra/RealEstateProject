import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
  role: "agent" | "admin";
}

export default function MainLayout({
  children,
  title,
  role,
}: MainLayoutProps) {
  return (
    <div className="flex bg-[#F7F9FC]">
      <Sidebar role={role} />

      <div className="flex-1">
        <Topbar title={title} />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}