import TotalSessionsCard from "../ui/users/TotalSessionsCard";

export default function Page() {
  return (
    <main className="flex flex-col h-full  w-full gap-3 bg-gray-900/80 text-gray-100  ">
      <div className="w-[96%] h-10 mx-auto bg-gray-700  rounded-md mt-2
       shadow text-gray-200 flex items-center">
        <h1 className="inline-block  px-3 text-lg md:text-sm font-bold ">Dashboard</h1>
      </div>
      <div className="flex flex-col gap-4 w-[96%] mx-auto lg:flex-row">
             <TotalSessionsCard totalSessions={2}/>
             <TotalSessionsCard totalSessions={2}/>
             <TotalSessionsCard totalSessions={2}/>
             <TotalSessionsCard totalSessions={2}/>
      </div>
 
    </main>
  );
}
