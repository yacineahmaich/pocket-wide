import React from 'react';
import { Button, Card, Select, SelectItem, Text } from '@tremor/react';
import { useCurrencies } from './useCurrencies';
import { useUpdateCurrency } from './useUpdateCurrency';
import { useUser } from '../auth/useUser';
import { useTranslation } from 'react-i18next';

const UpdateCurrency: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useUser();
  const [currency, setCurrency] = React.useState<string>(
    user?.user_metadata.currency,
  );
  const { data: currencies } = useCurrencies();
  const { mutate: updateCurrency, isLoading } = useUpdateCurrency();

  return (
    <Card className="border-gray-300 p-1">
      <div className="rounded bg-gray-100 p-3">
        <Text className="font-medium">{t('update-currency')}</Text>
      </div>
      <div className="space-y-4 p-4">
        <Select
          placeholder={t('currency')}
          value={currency}
          onValueChange={value => {
            setCurrency(value);
          }}
        >
          {currencies?.map(curr => (
            <SelectItem key={curr.key} value={curr.key}>
              {curr.key} - {curr.country}
            </SelectItem>
          )) || <></>}
        </Select>
        <Button
          color="gray"
          size="xs"
          onClick={() => {
            if (!currency) return;

            updateCurrency({ currency });
          }}
          loading={isLoading}
        >
          {t('update-currency')}
        </Button>
      </div>
    </Card>
  );
};
export default UpdateCurrency;
