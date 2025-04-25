import Image from "next/image";
import adminImage from "@/public/admin-image.jpg";
import Navlinks from "./nav-links";
function SideNav() {
  return (
    <aside className="h-full min-w-64 border-r border-gray-700 bg-gray-800 text-gray-50">
      <div className="flex w-full items-center justify-center border-b border-gray-500/50 py-2">
        <Image
          src={adminImage}
          width={35}
          height={35}
          className="mr-3 rounded-4xl"
          alt="Admin profile picture"
        />
        <p className="whitespace-nowrap">
          <span className="text-xl font-semibold tracking-wider text-gray-100 uppercase md:text-sm">
            Mega<span className="text-indigo-400"> Dashboard</span>
          </span>
        </p>
      </div>
      <Navlinks />
    </aside>
  );
}

export default SideNav;
