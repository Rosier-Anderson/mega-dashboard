import SideNav from "../ui/dashboard /sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex-col md:flex-row md:overflow-hidden">
      <SideNav />
      <div className="h-full w-full bg-gray-50 text-gray-900">{children}</div>
    </div>
  );
}
