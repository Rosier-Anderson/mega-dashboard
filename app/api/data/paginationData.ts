import { DataType } from "@/app/lib/types/types";
export default async function FetchPaginationData(
  query: string,
  pageNumber: number = 1,
  limit: number = 12
): Promise<DataType[]> {
  try {
    const response = await fetch(
      `https://retoolapi.dev/rdy8zr/data?_page=${pageNumber}&_limit=${limit}`
    );
    // for (let [key, value] of response.headers.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    if (!response.ok) {
      throw new Error(`Failded to fetch ${response.statusText}`);
    }

    const users: DataType[] = await response.json();
    if (query.length > 0) {
      const filterdUsers = 
        query?.length === 0
          ? users      
          : users.filter((user: { name: string; }) =>
              user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            );
       
      return filterdUsers;
    }
    console.log('im',users.slice( pageNumber, limit))
    return users.slice(pageNumber, limit);
  } catch (error) {
    console.error("Fetch data failed:", error);
    throw error;
  }
}
