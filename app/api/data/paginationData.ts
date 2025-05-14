// import { DataType } from "@/app/lib/types/types";

// export default async function FetchPaginationData(

//   page: number,
//   limit: number,  //query: string,
// ): Promise<DataType[]> {
//   try {
//     const response = await fetch(
//       `https://retoolapi.dev/rdy8zr/data?_page=${page}&_limit=${limit}`
//     );

//     // for (let [key, value] of response.headers.entries()) {
//     //   console.log(`${key}: ${value}`);
//     // }
//     if (!response.ok) {
//       throw new Error(`Failded to fetch ${response.statusText}`);
//     }

//     const users: DataType[] = await response.json();

//     // const filteredUsers = query
//     //   ? users.filter((user) =>
// //     //       user.name.toLowerCase().includes(query.toLowerCase())
     
// //     //     )
// //       : users;
// // console.log(filteredUsers.length)
// //     return filteredUsers;
// return users
//   } catch (error) {
//     console.error("Fetch data failed:", error);
//     throw error;
//   }
// }
