import { UserActions } from "@/app/ui/users/UserActions";


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
        
          <table className=" w-full tex-sm text-left  ">
            <thead className="  ">
              <tr>
                <th className="py-2 px-4">USER</th>
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">ROLE</th>
                <th className="py-2 px-4">STATUS</th>
                <th className="py-2 px-4">JOINED</th>
                <th className="py-2 px-4">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="py-2 px-4 ">anderson</td>
                <td className="py-2 px-4 ">1234567</td>
                <td className="py-2 px-4 ">user</td>
                <td className="py-2 px-4 ">active</td>
                <td className=" py-2 px-4 ">22 apr 2025</td>
                {/* this tis the user wbutton to modify user  */}
                <UserActions/>
              </tr>
              
            </tbody>
          </table>

      </div>
    </main>
  );
}
