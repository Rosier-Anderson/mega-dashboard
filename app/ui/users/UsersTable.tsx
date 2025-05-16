import React from "react";
import { UserTableHead } from "@/app/lib/constants/constants";
import { UserActions } from "@/app/ui/users/UserActions";
import { UserListProps } from "@/app/lib/definitions";

const UsersTable: React.FC<UserListProps> = ({  users }) => {
  // Slice the array starting from index 25
 

  return (
    <table className=" w-full tex-sm text-left  ">
      <thead className="  ">
        <tr>
          <th className="py-2 px-4">{UserTableHead.USER}</th>
          <th className="py-2 px-4">{UserTableHead.ID}</th>
          <th className="py-2 px-4">{UserTableHead.ROLE}</th>
          <th className="py-2 px-4">{UserTableHead.STATUS}</th>
          <th className="py-2 px-4">{UserTableHead.JOINDED}</th>
          <th className="py-2 px-4">{UserTableHead.ACTIONS}</th>
        </tr>
      </thead>
      <tbody className="">
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{}</td>
              <td className="py-2 px-4">
                {user.active ? "Active" : "Inactive"}
              </td>
              <td className="py-2 px-4">{user.plan}</td>
              <UserActions id={user.id}/>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UsersTable;
