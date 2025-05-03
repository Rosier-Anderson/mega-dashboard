import { fetchData } from "@/app/api/data/ data";
import { CreditCardIcon } from "@heroicons/react/24/outline";

const TotalRevenue = async () => {
  const revenue = await fetchData();

  const totalRevenue = revenue.reduce((total, amount) => {
    return total + Number(amount.amount);
  }, 0);

  // Format revenue nicely (like $1,234.56)
  const formattedRevenue = totalRevenue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <div className="flex justify-between items-start p-4 w-full h-24 bg-gray-700 rounded-md mt-4 shadow text-gray-200">
      <div>
        <h2 className="text-gray-300 font-semibold text-lg">Revenue</h2>
        <p className="text-white text-2xl font-bold">{formattedRevenue}</p>
        <p className="text-sm text-gray-400 italic">Revenue generated</p>
      </div>

      <div className="flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full">
        <CreditCardIcon className="w-6 h-6 text-green-300" />
      </div>
    </div>
  );
};

export default TotalRevenue;