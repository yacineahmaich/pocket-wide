import { DevTool } from '@hookform/devtools';
import Label from '../../ui/Label';
import {
  Button,
  Card,
  Select,
  SelectItem,
  Text,
  TextInput,
} from '@tremor/react';
import DatePicker from '../../ui/DatePicker';
import FieldError from '../../ui/FieldError';
import CategoryIcon from '../../ui/CategorySelect';
import { categories } from '../../utils/constants';
import TextArea from '../../ui/TextArea';
import { useForm } from 'react-hook-form';
import { incomeSchema } from '../../utils/validation/income';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDropzone } from 'react-dropzone';
import { useCreateIncome } from './useCreateIncome';

function CreateIncomeForm() {
  // Manage Form State
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
    getValues,
  } = useForm<CreateEditIncome>({
    defaultValues: {
      date: new Date().toLocaleDateString('en-CA'),
      amount: 0,
    },
    resolver: yupResolver<CreateEditIncome>(incomeSchema),
  });

  // Uplaod Attachements
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        'image/png': ['.png', '.jpg', '.jpeg'],
      },
    });

  const { mutate: createIncome, isLoading } = useCreateIncome();

  const onSubmit = handleSubmit(data => {
    createIncome({
      ...data,
      attachement: acceptedFiles[0],
    });
  });

  return (
    <section className="overflow-y-auto">
      <DevTool control={control} />
      <div>
        <form action="" className="space-y-4" onSubmit={onSubmit}>
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
              icon={() => <Text className="p-2">MAD</Text>}
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
                console.log(category);
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
              className="max-w-full p-6 text-sm font-semibold text-center border-x-2 sm:p-10 text-tremor-brand"
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

          <Button className="w-full mt-auto h-fit" loading={isLoading}>
            Create
          </Button>
        </form>
      </div>
    </section>
  );
}

export default CreateIncomeForm;
