import { FC } from 'react';
import Label from '../../ui/Label';
import { Button, Select, SelectItem, Text, TextInput } from '@tremor/react';
import DatePicker from '../../ui/DatePicker';
import FieldError from '../../ui/FieldError';
import CategoryIcon from '../../ui/CategorySelect';
import { categories } from '../../utils/constants';
import TextArea from '../../ui/TextArea';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { expenseSchema } from '../../utils/validation/expense';
import { useUpdateExpense } from './useUpdateExpense';
import { useUser } from '../auth/useUser';
import { useTranslation } from 'react-i18next';
type Props = {
  children?: React.ReactNode;
};
const EditExpenseForm: FC<Props> = () => {
  const { user } = useUser();
  const { t } = useTranslation();
  const location = useLocation();

  const expenseData = location?.state as Income | null;

  const { mutate: updateExpense, isLoading: isUpdating } = useUpdateExpense();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
  } = useForm<CreateEditExpense>({
    defaultValues: {
      title: expenseData?.title,
      amount: expenseData?.amount,
      category: expenseData?.category,
      date: expenseData?.date,
      description: expenseData?.description,
      tags: expenseData?.tags,
    },
    resolver: yupResolver<CreateEditExpense>(expenseSchema),
  });

  const onSubmit = handleSubmit(expense => {
    updateExpense({
      id: expenseData?.id ?? -1,
      expense,
    });
  });

  if (!expenseData) return <Navigate to="/dashboard/expenses" />;

  return (
    <section className="overflow-y-auto">
      <div>
        <form action="" className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-1">
            <Label htmlFor="title">{t('title')}</Label>
            <TextInput
              id="title"
              {...register('title')}
              error={!!errors.title}
              errorMessage={errors.title?.message}
              disabled={isUpdating}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="amount">{t('amount')}</Label>
            <TextInput
              id="amount"
              icon={() => (
                <Text className="p-2">
                  {user?.user_metadata.currency || 'USD'}
                </Text>
              )}
              {...register('amount')}
              error={!!errors.amount}
              errorMessage={errors.amount?.message}
              disabled={isUpdating}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="date">{t('date')}</Label>
            <DatePicker id="date" {...register('date')} disabled={isUpdating} />
            {!!errors.date && <FieldError msg={errors.date.message} />}
          </div>
          <div className="space-y-1">
            <Label htmlFor="category">{t('category')}</Label>
            <Select
              id="category"
              defaultValue={getValues().category}
              onValueChange={category => {
                setValue('category', category);
              }}
              disabled={isUpdating}
            >
              {categories.map(category => {
                const CIcon = () => <CategoryIcon categoryKey={category.key} />;

                return (
                  <SelectItem
                    key={category.id}
                    value={category.key}
                    icon={CIcon}
                  >
                    {category.category}
                  </SelectItem>
                );
              })}
            </Select>
            {!!errors.category && <FieldError msg={errors.category.message} />}
          </div>
          <div className="space-y-1">
            <Label htmlFor="description">{t('description')}</Label>
            <TextArea
              id="description"
              rows={5}
              {...register('description')}
              disabled={isUpdating}
            ></TextArea>
          </div>

          <div className="space-y-1">
            <Label htmlFor="tags">{t('tags')}</Label>
            <TextInput
              id="tags"
              placeholder="comma sperated, e.g tag-1,tag-2 ..."
              {...register('tags')}
              error={!!errors.tags}
              errorMessage={errors.tags?.message}
              disabled={isUpdating}
            />
          </div>

          <Button className="mt-auto h-fit w-full" loading={isUpdating}>
            {t('save-changes')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EditExpenseForm;
