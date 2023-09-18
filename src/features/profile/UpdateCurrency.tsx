import React from 'react';
import { Button, Card, Select, SelectItem, Text } from '@tremor/react';
import { useCurrencies } from './useCurrencies';
import { useUpdateCurrency } from './useUpdateCurrency';
import { useUser } from '../auth/useUser';

const UpdateCurrency: React.FC = () => {
  const { user } = useUser();
  const [currency, setCurrency] = React.useState<string>(
    user?.user_metadata.currency,
  );
  const { data: currencies } = useCurrencies();
  const { mutate: updateCurrency, isLoading } = useUpdateCurrency();

  return (
    <Card className="border-gray-300 p-1">
      <div className="rounded bg-gray-100 p-3">
        <Text className="font-medium">Update Currency</Text>
      </div>
      <div className="space-y-4 p-4">
        <Select
          placeholder="Currency"
          value={currency}
          onValueChange={value => {
            console.log(value);
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
          Update Currency
        </Button>
      </div>
    </Card>
  );
};
export default UpdateCurrency;
