import React from "react";
import { UserTableHead } from "@/app/lib/constants/constants";
import { UserActions } from "@/app/ui/users/UserActions";
import { UserListProps } from "@/app/lib/types/types";
const UsersTable: React.FC<UserListProps> = ({ query, users }) => {
  const renderUserRows = () => {
    // to change this code later when working on it
    // push to git hub with a bug
    // Slice the array starting from index 25
    // let defaultUsers = query.length === 0 ? users.slice(25) : users;
    //return defaultUsers.filter((user) => {
    //   <tr key={user.id}>
    //     <td className="py-2 px-4">{user.name}</td>
    //     <td className="py-2 px-4">{user.id}</td>
    //     <td className="py-2 px-4">user</td>
    //     <td className="py-2 px-4">active</td>
    //     <td className="py-2 px-4">22 Apr 2025</td>
    //     <td className="py-2 px-4">
    //       <UserActions />
    //     </td>
    //   </tr>;
    // });
  };

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
      {/* <tbody className="">{renderUserRows()}</tbody> */}
    </table>
  );
};

export default UsersTable;
