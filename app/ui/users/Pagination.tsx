"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
// import { pages } from "next/dist/build/templates/app-page";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const paginationsArr = Array.from(
    { length: totalPages },
    (_, toatlaPaginations) => toatlaPaginations + 1
  );
  // this code here might be usfull ib the future
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // const currentPage = Number(searchParams.get("page")) || 1;
  // const paginiNum = () => {
  //   let countPaginations: number;
  //   for (
  //     countPaginations = 1;
  //     countPaginations < paginationsArr.length;
  //     countPaginations++
  //   ) {
  //     return countPaginations;
  //   }
  //   console.log(countPaginations);
  // };
  // console.log(paginiNum());
  // console.log(searchParams.getAll("page").toString())

  // const currentPageURL = (pageNumber: number | string) => {
  //   for(let i: number ; i <= pageNumber; i++){

  //   }
  // let arr: (string | number)[] = [];
  // return arr.push(pageNumber)
  // }
  return (
    <div className="w-50 h-10 bg-gray-700 flex justify-center items-center rounded-lg mx-auto">
      <div className="w-full flex  justify-around items-center ">
        <div>
          <ArrowLeftIcon className="w-6" />
        </div>
        <div className="  flex gap-1 ">
          {paginationsArr.map((val) => {
            return (
              <button 
                key={val}
                className="bg-gray-600 w-10 h-full cursor-pointer"
              >
                {val}
              </button>
            );
          })}
        </div>
        <div>
          <ArrowRightIcon className="w-6" />
        </div>
      </div>
    </div>
  );
}
