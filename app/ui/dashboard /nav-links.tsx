'use client'
import {
  UserGroupIcon,
  HomeIcon,BanknotesIcon, ClipboardDocumentCheckIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
 import { usePathname } from "next/navigation";
 import clsx from 'clsx';

const links = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Users", href: "/dashboard/users", icon:UserGroupIcon },
  { name: "Roles", href: "/dashboard/roles", icon: ClipboardDocumentCheckIcon },
  { name: "Subscriptions", href: "/dashboard/subscriptions", icon: BanknotesIcon},
];
export default  function  Navlinks() {
  const pathname = usePathname();
  // flex gap-2 m-1 ml-4 items-center
  return (
    <div className="flex flex-col gap-4 my-4">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href} className={clsx(` flex  items-center gap-2  rounded-md px-3 py-2 text-sm font-medium`, {
            },
            pathname === link.href ? "bg-white/10 text-white"  : "text-gray-300 hover:bg-gray-800 hover:text-white"
          )}>
            <LinkIcon className="w-6 " />
            <p className="text-lg md:text-sm">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}


