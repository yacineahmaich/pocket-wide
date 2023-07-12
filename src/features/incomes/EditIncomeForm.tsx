import { FC } from 'react';
import Label from '../../ui/Label';
import { Button, Select, SelectItem, Text, TextInput } from '@tremor/react';
import DatePicker from '../../ui/DatePicker';
import FieldError from '../../ui/FieldError';
import CategoryIcon from '../../ui/CategorySelect';
import { categories } from '../../utils/constants';
import TextArea from '../../ui/TextArea';
import { useForm } from 'react-hook-form';
import { Navigate, useParams } from 'react-router-dom';
import { useIncomes } from './useIncomes';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUpdateIncome } from './useUpdateIncome';
import { incomeSchema } from '../../utils/validation/income';
type Props = {
  children?: React.ReactNode;
};
const EditIncomeForm: FC<Props> = () => {
  const { id = -1 } = useParams();
  const { data } = useIncomes();
  const { mutate: updateIncome, isLoading: isUpdating } = useUpdateIncome();

  const incomeData = data?.data.find(exp => exp.id === +id);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
  } = useForm<CreateEditIncome>({
    defaultValues: {
      title: incomeData?.title,
      amount: incomeData?.amount,
      category: incomeData?.category,
      date: incomeData?.date,
      description: incomeData?.description,
      tags: incomeData?.tags,
    },
    resolver: yupResolver<CreateEditIncome>(incomeSchema),
  });

  const onSubmit = handleSubmit(income => {
    updateIncome({
      id: incomeData?.id ?? -1,
      income,
    });
  });

  if (!incomeData) return <Navigate to="/incomes" />;

  return (
    <section className="overflow-y-auto">
      <div>
        <form action="" className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <TextInput
              id="title"
              {...register('title')}
              error={!!errors.title}
              errorMessage={errors.title?.message}
              disabled={isUpdating}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="amount">Amount</Label>
            <TextInput
              id="amount"
              icon={() => <Text className="p-2">MAD</Text>}
              {...register('amount')}
              error={!!errors.amount}
              errorMessage={errors.amount?.message}
              disabled={isUpdating}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="date">Date</Label>
            <DatePicker id="date" {...register('date')} disabled={isUpdating} />
            {!!errors.date && <FieldError msg={errors.date.message} />}
          </div>
          <div className="space-y-1">
            <Label htmlFor="category">Category</Label>
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
            <Label htmlFor="description">Description</Label>
            <TextArea
              id="description"
              rows={5}
              {...register('description')}
              disabled={isUpdating}
            ></TextArea>
          </div>

          <div className="space-y-1">
            <Label htmlFor="tags">Tags</Label>
            <TextInput
              id="tags"
              placeholder="comma sperated, e.g tag-1,tag-2 ..."
              {...register('tags')}
              error={!!errors.tags}
              errorMessage={errors.tags?.message}
              disabled={isUpdating}
            />
          </div>

          <Button className="w-full mt-auto h-fit" loading={isUpdating}>
            Save changes
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EditIncomeForm;
