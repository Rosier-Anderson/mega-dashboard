import { fetchData } from "@/app/api/data/ data";
import Pagination from "@/app/ui/users/Pagination";
import SearchUsers from "@/app/ui/users/SearchUsers";
import UsersTable from "@/app/ui/users/UsersTable";
import { UserPlusIcon } from "@heroicons/react/24/outline";

export default async function Page(props: {
  searchParams: Promise<{ query?: string }>;
}) {
  const Users = await  fetch('https://retoolapi.dev/rdy8zr/data?_page=1&_limit=5');
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const totalPages = 3;
  const itemsPerPage = 6;

  const defaultUsers =
    query.length === 0
      ? Users.slice(0, itemsPerPage) // First 25 users if query is empty
      : Users.filter((user) =>
          user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
  return (
    <main className="flex flex-col h-full  w-full gap-4 bg-gray-900/80 text-gray-100  ">
      <div className="w-[96%] h-10 mx-auto bg-gray-700 rounded-md mt-4 shadow text-gray-200 flex items-center">
        <h1 className="px-3 text-lg font-bold">Users</h1>
      </div>
      <div className="w-[96%] mx-auto flex justify-between items-center">
        <SearchUsers />
        <button className="flex items-center justify-center gap-1 text-sm cursor-pointer w-32 h-10 bg-blue-400 rounded-md shadow">
          <UserPlusIcon className="w-4" />
          Add User
        </button>
      </div>

      <div className="w-[96%] mx-auto bg-gray-700 rounded-md shadow ">
        <UsersTable users={defaultUsers} />
      </div>
      {/* adding pignation pages in  */}

      <Pagination totalPages={totalPages} />
    </main>
  );
}
