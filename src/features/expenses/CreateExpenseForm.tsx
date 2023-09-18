import { categories } from '../../utils/constants';
import {
  Button,
  Card,
  Select,
  SelectItem,
  Text,
  TextInput,
} from '@tremor/react';
import TextArea from '../../ui/TextArea';
import Label from '../../ui/Label';
import CategoryIcon from '../../ui/CategorySelect';
import DatePicker from '../../ui/DatePicker';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { expenseSchema } from '../../utils/validation/expense';
import FieldError from '../../ui/FieldError';
import { useDropzone } from 'react-dropzone';
import { useCreateExpense } from './useCreateExpense';
import { useUser } from '../auth/useUser';

function CreateExpenseForm() {
  const { user } = useUser();

  const { mutate: createExpense, isLoading } = useCreateExpense();
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        'image/png': ['.png', '.jpg', '.jpeg'],
      },
    });

  // Manage Form State
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
  } = useForm<CreateEditExpense>({
    defaultValues: {
      date: new Date().toLocaleDateString('en-CA'),
      amount: 0,
    },
    resolver: yupResolver<CreateEditExpense>(expenseSchema),
  });

  const onSubmit = handleSubmit(data => {
    createExpense({
      ...data,
      attachement: acceptedFiles[0],
    });
  });

  return (
    <section className="overflow-y-auto">
      <form onSubmit={onSubmit}>
        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <TextInput
              id="title"
              {...register('title')}
              error={!!errors.title}
              errorMessage={errors.title?.message}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="amount">Amount</Label>
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
              disabled={isLoading}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="date">Date</Label>
            <DatePicker id="date" {...register('date')} disabled={isLoading} />
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
              disabled={isLoading}
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
              disabled={isLoading}
            ></TextArea>
          </div>

          <div className="space-y-1">
            <Label htmlFor="attachements">Attachements</Label>
            <Card
              {...getRootProps()}
              className="max-w-full border-x-2 p-6 text-center text-sm font-semibold text-tremor-brand sm:p-10"
              color="gray"
            >
              <input type="text" {...getInputProps()} disabled={isLoading} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>
                  Drag 'n' drop some files here,
                  <br /> or click to select files
                </p>
              )}
            </Card>
          </div>
          <div className="space-y-1">
            <Label htmlFor="tags">Tags</Label>
            <TextInput
              id="tags"
              placeholder="comma sperated, e.g tag-1,tag-2 ..."
              {...register('tags')}
              error={!!errors.tags}
              errorMessage={errors.tags?.message}
              disabled={isLoading}
            />
          </div>

          <Button className="mt-auto h-fit w-full" loading={isLoading}>
            Create
          </Button>
        </div>
      </form>
    </section>
  );
}

export default CreateExpenseForm;
