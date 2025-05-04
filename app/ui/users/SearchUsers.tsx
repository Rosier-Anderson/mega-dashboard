"use client";
import { useSearchParams } from "next/navigation";
export default function SearchUsers() {
  const searchParams = useSearchParams();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    console.log(term);
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
