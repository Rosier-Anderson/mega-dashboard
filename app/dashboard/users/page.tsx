import UsersTable from "@/app/ui/users/UsersTable";



export default function Page() {
  return (
    <main className="flex flex-col h-full  w-full gap-4 bg-gray-900/80 text-gray-100  ">
      <div
        className="w-[96%] h-10 mx-auto bg-gray-700  rounded-md mt-4
            shadow text-gray-200 flex items-center"
      >
        <h1 className="inline-block  px-3 text-lg md:text-sm font-bold ">
          Users
        </h1>
      </div>

     
      <div className="w-[96%] mx-auto bg-gray-700 rounded-md shadow ">
        {/* this is the table of content about the user data */}
        
         <UsersTable/>

      </div>
    </main>
  );
}
