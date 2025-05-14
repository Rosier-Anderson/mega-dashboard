// import { fetchData } from "@/app/api/data/ data";
import FetchPaginationData from "@/app/api/data/paginationData";
import Pagination from "@/app/ui/users/Pagination";
import SearchUsers from "@/app/ui/users/SearchUsers";
import UsersTable from "@/app/ui/users/UsersTable";
import { UserPlusIcon } from "@heroicons/react/24/outline";

export default async function Page(props: {
  searchParams: { query: string; page: string | number };
}) {
  const { searchParams } = props;
  const query = (await searchParams).query || "";
  const page = Number((await searchParams).page);
  const offset = (Number(page) - 1) * 6;
  const limit = 6;
  //   i dont need to use this pagination fetch data ill get the first data and use it like the first one
  const Users = await FetchPaginationData(
    query.length == 0 ? 1 : Number(page),
    query.length == 0 ? 30 : limit,
    query
  );

  console.log(Users.length);
  const fakeUsers = Users.slice(offset, offset + 6);

  const itemsPerPage = Math.ceil(
    Users.length == 30 ? Users.length / 6 : fakeUsers.length / 6
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
        <UsersTable users={Users.length == 30 ? fakeUsers : Users} />
      </div>
      {/* adding pignation pages in  */}

      <Pagination totalPages={itemsPerPage} />
    </main>
  );
}
