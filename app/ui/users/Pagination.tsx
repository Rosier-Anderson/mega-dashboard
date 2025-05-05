import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Pagination({totalPages}: {totalPages: number}) {
  console.log(totalPages)
  return (
    <div className="w-50 h-10 bg-gray-700 flex justify-center items-center rounded-lg mx-auto">
      <div className="w-full flex  justify-around items-center ">
        <div>
          <ArrowLeftIcon className="w-6" />
        </div>
        <div className="  flex gap-1 ">
          <button className="bg-gray-600 w-10 h-full cursor-pointer">1</button>
          <button className="bg-gray-600 w-10 h-full cursor-pointer">2</button>
          <button className="bg-gray-600 w-10 h-full cursor-pointer ">3</button>
        </div>
        <div>
          <ArrowRightIcon className="w-6" />
        </div>
      </div>
    </div>
  );
}
