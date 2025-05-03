import { fetchData } from "@/app/api/data/ data";
import { formatCurrency } from "@/app/lib/utils/formatCurrency";
import Image from "next/image";
import React from "react";

const user = await fetchData();

const RecentSubscriptions = () => {
  return (
    <div className="w-full bg-gray-700 rounded-md shadow p-4">
      <h1 className="text-lg font-bold text-gray-200 mb-4">
        Recent Subscriptions
      </h1>
      <ul>
        {user.slice(25).map((value) => (
          <li
            className="flex items-center justify-between gap-4 m-2"
            key={value.id}
          >
            <div className="flex items-center gap-4">
              <div className="relative w-[35px] h-[35px]">
                <Image
                  src={value.picture}
                  alt={`${value.name} picture`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="  text-gray-100 font-medium ">{value.plan}</p>{" "}
                <p className="text-sm text-gray-400">{value.name}</p>
              </div>
            </div>
            <p className="text-green-400 font-semibold">
              {formatCurrency(Number(value.amount))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSubscriptions;
