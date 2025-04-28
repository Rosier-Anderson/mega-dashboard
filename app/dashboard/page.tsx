
import ActiveUsers from "../ui/dashboard /totalActiveUsers";
import TotalCustomer from "../ui/dashboard /totalCustomer";
import TotalRevenue from "../ui/dashboard /totalRevenue";
import TotalSubscription from "../ui/dashboard /totalSuscription";


export default async function Page() {
  // const data = await fetchData();

  return (
    <main className="flex flex-col h-full  w-full gap-3 bg-gray-900/80 text-gray-100  ">
      <div
        className="w-[96%] h-10 mx-auto bg-gray-700  rounded-md mt-2
       shadow text-gray-200 flex items-center"
      >
        <h1 className="inline-block  px-3 text-lg md:text-sm font-bold ">
          Dashboard
        </h1>
      </div>
      <div className="flex flex-col gap-4 w-[96%] mx-auto lg:flex-row">
        <ActiveUsers />
        <TotalSubscription/>
        <TotalRevenue/>
        <TotalCustomer/>
      </div>
      <div>
        <h1>Recent users</h1>
        {/* recent Users */}
      </div>
      <div>
        Recent Subscriptions
        {/* recent subscriptions */}
      </div>
    </main>
  );
}
