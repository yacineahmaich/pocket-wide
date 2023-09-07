import React, { useEffect } from 'react';
import CurrencyModal from './CurrencyModal';
import { useLocation } from 'react-router-dom';
import { REQUIRE_CURRENCY_PAGES } from '../utils/config';
import { useUser } from '../features/auth/useUser';

type CurrencyModalState = {
  open: boolean;
  closeCurrencyModal: () => void;
  openCurrencyModal: () => void;
};

const CurrencyModalContext = React.createContext<CurrencyModalState>({
  open: false,
  openCurrencyModal: () => null,
  closeCurrencyModal: () => null,
});

export const useCurrencyModal = () => React.useContext(CurrencyModalContext);

const CurrencyModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();
  const [open, setOpen] = React.useState(false);

  const openCurrencyModal = () => setOpen(true);
  const closeCurrencyModal = () => setOpen(false);

  const ctxValue = {
    open,
    openCurrencyModal,
    closeCurrencyModal,
  };

  const location = useLocation();
  useEffect(() => {
    if (!REQUIRE_CURRENCY_PAGES.includes(location.pathname)) return;
    if (user?.user_metadata.currency) return;

    openCurrencyModal();
  }, [location.pathname]);

  return (
    <CurrencyModalContext.Provider value={ctxValue}>
      <CurrencyModal open={open} onOpenChange={setOpen} />
      {children}
    </CurrencyModalContext.Provider>
  );
};

export default CurrencyModalProvider;
