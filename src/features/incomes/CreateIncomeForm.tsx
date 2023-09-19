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
import { incomeCategories } from '../../utils/constants';
import TextArea from '../../ui/TextArea';
import { useForm } from 'react-hook-form';
import { incomeSchema } from '../../utils/validation/income';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDropzone } from 'react-dropzone';
import { useCreateIncome } from './useCreateIncome';
import { useUser } from '../auth/useUser';
import { useTranslation } from 'react-i18next';

function CreateIncomeForm() {
  const { user } = useUser();
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
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
      <form onSubmit={onSubmit}>
        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="title">{t('title')}</Label>
            <TextInput
              id="title"
              {...register('title')}
              error={!!errors.title}
              errorMessage={errors.title?.message}
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="date">{t('date')}</Label>
            <DatePicker id="date" {...register('date')} disabled={isLoading} />
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
              disabled={isLoading}
            >
              {incomeCategories.map(category => {
                const CIcon = () => (
                  <CategoryIcon categoryKey={category.key} type="income" />
                );

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
              disabled={isLoading}
            ></TextArea>
          </div>

          <div className="space-y-1">
            <Label htmlFor="attachements">{t('attachments')}</Label>
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
            <Label htmlFor="tags">{t('tags')}</Label>
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
            {t('create')}
          </Button>
        </div>
      </form>
    </section>
  );
}

export default CreateIncomeForm;
