import { FC } from 'react';
import * as AlertDialog from '@radix-ui/react-dialog';
import Filter from './Filter';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileFilter: FC<Props> = ({ open, setOpen }) => (
  <AlertDialog.Root open={open} onOpenChange={setOpen}>
    <AlertDialog.Portal className="lg:hidden">
      <AlertDialog.Overlay className="fixed inset-0 z-[9999] bg-black/20 animate-in duration-300 data-[state=open]:fade-in-0 lg:hidden" />
      <AlertDialog.Content className="fixed left-[50%] top-[50%] z-[9999] translate-x-[-50%] translate-y-[-50%]  rounded-xl bg-white p-8 lg:hidden">
        <Filter onFilter={() => setOpen(false)} />
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default MobileFilter;
