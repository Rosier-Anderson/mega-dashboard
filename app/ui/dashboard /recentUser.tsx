import { fetchData } from "@/app/api/data/ data";
import Image from "next/image";

export default async function RecentUser() {
  const user = await fetchData();

  return (
    <div className="w-full bg-gray-700 rounded-md shadow p-4">
      <h1 className="text-lg font-bold text-gray-200">Recent Users</h1>
      <ul>
        {user.slice(25).map((user) => {
          const recentDate = user.date.slice(0, 12);
          return (
            <li className="flex items-center gap-4 m-2" key={user.id}>
              <div className="relative w-[30px] h-[30px]">
                <Image
                  src={user.picture}
                  alt="user picture"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="text-gray-100">
                {user.name}
                <p className="text-sm text-gray-400">{`joined ${recentDate}`}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

