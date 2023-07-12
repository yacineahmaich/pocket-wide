interface Income {
  id: number;
  title: string;
  description?: string;
  amount: number;
  date: string;
  tags: string;
  category: string;
  attachement?: File | null | undefined | string;
}

interface CreateEditIncome {
  title: string;
  description?: string;
  amount: number;
  date: string;
  tags: string;
  category: string;
  attachement?: File;
}
