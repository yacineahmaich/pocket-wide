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
      <AlertDialog.Overlay className="fixed inset-0 bg-black/20 lg:hidden" />
      <AlertDialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-white lg:hidden p-8 rounded-xl">
        <Filter onFilter={() => setOpen(false)} />
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default MobileFilter;
