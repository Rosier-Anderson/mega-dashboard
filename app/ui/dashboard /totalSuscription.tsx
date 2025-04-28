import { fetchData } from "@/app/api/data/data";
import { CreditCardIcon } from "@heroicons/react/24/outline";

const TotalSubscription = async () => {
  const users = await fetchData();

  const subscribedUsers = users.filter(user =>
    user.active && (user.status === "Paid" || user.status === "Pending")
  );
// get the pertage of the users
  const subscriptionPercentage = (subscribedUsers.length / users.length) * 100;

  return (
    <div className="flex justify-between items-start p-4 w-full h-24 bg-gray-700 rounded-md mt-4 shadow text-gray-200">
      <div>
        <h2 className="text-gray-300 font-semibold text-lg">Subscriptions</h2>
        <p className="text-white text-2xl font-bold">{subscribedUsers.length}</p>
        <p className="text-sm text-gray-400 italic">
          {subscriptionPercentage.toFixed(1)}% of users 
        </p>
      </div>

      <div className="flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full">
        <CreditCardIcon className="w-6 h-6 text-yellow-300" />
      </div>
    </div>
  );
};

export default TotalSubscription;