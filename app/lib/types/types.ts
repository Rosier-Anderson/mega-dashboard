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

export type SearchUsersParams = {
  name: string;
  id: number;
  role: string;
  date: string;
  active: boolean;
  action: string | undefined;
};
