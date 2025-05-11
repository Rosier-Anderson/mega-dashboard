"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { useSearchParams, usePathname, useRouter } from "next/navigation";


export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
const {replace} = useRouter()
  function hadleCilck(e: number) {
    const params = new URLSearchParams(searchParams);
    if (e) {
      params.set("page", e.toString());
    
    }else{
      params.delete('page')
    }
    replace(`${pathname}?${params}`)
  }

 

  const paginationsArr = Array.from(
    { length: totalPages },
    (_, toatlaPaginations) => toatlaPaginations + 1
  );
  // console.log(paginationsArr)
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
                value={val}
                onClick={(e) =>
                  hadleCilck(Number((e.target as HTMLButtonElement).value))
                }
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
