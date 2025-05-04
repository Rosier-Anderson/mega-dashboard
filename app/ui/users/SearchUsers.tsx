"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
export default function SearchUsers() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <input
      className="bg-transparent border border-gray-400 outline-none w-72 h-10 p-2 rounded-md text-sm"
      type="text"
      placeholder="Search User..."
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
