import SideNav from '../ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  h-screen ">
      <div className="w-1/6 bg-gray-800">
        <SideNav></SideNav>
      </div>
      <div className="w-5/6 bg-gray-800 p-4">{children}</div>
    </div>
  );
}
