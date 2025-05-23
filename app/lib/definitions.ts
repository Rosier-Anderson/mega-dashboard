export type DataType = {
  id: number;
  date: string;
  name: string;
  plan: string;
  email: string;
  active: boolean;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
  picture: string;
  payment: string;
};
export type UserListProps = {

  users: DataType[];
};
