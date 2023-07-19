import { FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button, Icon, Text } from '@tremor/react';
import { FaExclamationCircle, FaExclamationTriangle } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  resource: string;
  onConfirm: () => void;
  isLoading?: boolean;
};
const ConfirmDelete: FC<Props> = ({
  open,
  setOpen,
  resource,
  onConfirm,
  isLoading = false,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 duration-300 bg-black/20 animate-in fade-in-0" />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Close className="absolute top-2 right-2">
            <button>
              <Icon icon={HiXMark} color="gray" />
            </button>
          </Dialog.Close>
          <div className="text-center">
            <Icon icon={FaExclamationCircle} size="lg" />
          </div>
          <Dialog.Description className="my-4 text-center">
            <Text>Are you sure you want to delete this {resource} ?</Text>
          </Dialog.Description>
          <div className="flex justify-center gap-4">
            <Dialog.Close asChild>
              <Button color="gray" size="xs" variant="secondary">
                No, Cancel
              </Button>
            </Dialog.Close>
            <Button
              color="red"
              size="xs"
              onClick={onConfirm}
              loading={isLoading}
            >
              Yes, I'm sure
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ConfirmDelete;
