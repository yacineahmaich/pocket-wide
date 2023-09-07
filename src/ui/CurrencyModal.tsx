import React from 'react';
import * as AlertDialog from '@radix-ui/react-dialog';
import { Button, Select, SelectItem } from '@tremor/react';
import { useCurrencies } from '../features/shared/useCurrencies';
import { useUpdateCurrency } from '../features/shared/useUpdateCurrency';
import { REQUIRE_CURRENCY_PAGES } from '../utils/config';
import { useLocation } from 'react-router-dom';

type CurrencyModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CurrencyModal: React.FC<CurrencyModalProps> = ({
  open,
  onOpenChange,
}) => {
  const location = useLocation();
  const [currency, setCurrency] = React.useState<string>();

  const { data: currencies } = useCurrencies();
  const { mutate: updateCurrency, isLoading } = useUpdateCurrency();

  const handleChangeCurrency = () => {
    if (!currency) return;

    updateCurrency({ currency });
  };

  const freezed = REQUIRE_CURRENCY_PAGES.includes(location.pathname);

  return (
    <AlertDialog.Root
      open={open}
      modal
      onOpenChange={freezed ? undefined : onOpenChange}
    >
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/20 animate-in data-[state=open]:fade-in-0 duration-300 z-[9999]" />
        <AlertDialog.Content className="fixed top-[50%] z-[9999] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-white p-8 rounded-xl min-w-[400px]">
          <AlertDialog.Title>Select your currency</AlertDialog.Title>
          <Select
            placeholder="Currency"
            className="my-4"
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
            className="w-full"
            disabled={!currency}
            onClick={handleChangeCurrency}
            loading={isLoading}
          >
            save currency
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
export default CurrencyModal;
