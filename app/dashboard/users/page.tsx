// import { fetchData } from "@/app/api/data/ data";
import { fetchData } from "@/app/api/data/ data";
import Link from "next/link";
import Pagination from "@/app/ui/users/Pagination";
import SearchUsers from "@/app/ui/users/SearchUsers";
import UsersTable from "@/app/ui/users/UsersTable";
import { UserPlusIcon } from "@heroicons/react/24/outline";

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; page?: string | number };
}) {
 
  const query = searchParams.query || "";
  const page = Number(searchParams.page) || 1;
  const offset = (Number(page) - 1) * 6;
  const limit = 6;
  //   i dont need to use this pagination fetch data ill get the first data and use it like the first one
  const allUsers = await fetchData()

  console.log(allUsers.length)
  // const  allUsers = Users.length == 30 ? Users : ,,
  const fakeUsers = query.length == 0 ?  allUsers.slice(offset, offset + 6) :  allUsers.filter((user) =>
       user.name.toLowerCase().includes(query.toLowerCase()));
  // const Anie = query ? fakeUsers.length;
const newArr = query.length !== 0 ? fakeUsers.slice(offset, offset + 6): [];
  const itemsPerPage = Math.ceil(
    query.length == 0 ? allUsers.length / 6 : fakeUsers.length / 6
  );

  return (
    <main className="flex flex-col h-full  w-full gap-4 bg-gray-900/80 text-gray-100  ">
      <div className="w-[96%] h-10 mx-auto bg-gray-700 rounded-md mt-4 shadow text-gray-200 flex items-center">
        <h1 className="px-3 text-lg font-bold">Users</h1>
      </div>
      <div className="w-[96%] mx-auto flex justify-between items-center">
        <SearchUsers />
        <Link href='/dashboard/users/create' className="flex items-center justify-center gap-1 text-sm cursor-pointer w-32 h-10 bg-blue-400 rounded-md shadow">
          <UserPlusIcon className="w-4" />
          Add User
        </Link>
      </div>

      <div className="w-[96%] mx-auto bg-gray-700 rounded-md shadow ">
        <UsersTable users={newArr.length !== 0? newArr : fakeUsers } />
      </div>
      {/* adding pignation pages in  */}

      <Pagination totalPages={itemsPerPage} />
    </main>
  );
}
