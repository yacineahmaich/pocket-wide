interface Expense {
  id: number;
  title: string;
  description?: string;
  amount: number;
  date: string;
  tags: string;
  category: string;
  attachement: null | string;
}

interface CreateEditExpense {
  title: string;
  description?: string;
  amount: number;
  date: string;
  tags: string;
  category: string;
  attachement?: File;
}
