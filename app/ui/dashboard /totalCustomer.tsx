import { fetchData } from "@/app/api/data/ data";
import { UserGroupIcon } from "@heroicons/react/24/outline";

const TotalCustomer = async () => {
  const customers = await fetchData();
  const totalCustomers = customers.length;

  return (
    <div className="flex justify-between items-start p-4 w-full h-24 bg-gray-700 rounded-md mt-4 shadow text-gray-200">
      <div>
        <h2 className="text-gray-300 font-semibold text-lg">Customers</h2>
        <p className="text-white text-2xl font-bold">
          {totalCustomers}
        </p>
        <p className="text-sm text-gray-400 italic">
          Total customers
        </p>
      </div>

      <div className="flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full">
        <UserGroupIcon className="w-6 h-6 text-blue-300" />
      </div>
    </div>
  );
};

export default TotalCustomer;