import * as Yup from 'yup';

export const incomeSchema = Yup.object({
  title: Yup.string().min(4).required(),
  description: Yup.string(),
  amount: Yup.number().min(1).required(),
  date: Yup.string().required(),
  tags: Yup.string().required(),
  category: Yup.string().required(),
  attachement: Yup.mixed<File>(),
});
