export interface Transaction {
  id: number;
  amount: string;
  description: string | null;
  status: string;
  createdAt: string;
  sourceAccount: {
    accountNumber: string;
  };
  destinationAccount: {
    accountNumber: string;
  };
}
