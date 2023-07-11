import { FC } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Button } from '@tremor/react';

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
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20"
        />
        <AlertDialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <AlertDialog.Title className="mb-0 text-lg font-semibold">
            Delete <span className="capitalize">{resource}</span>
          </AlertDialog.Title>
          <AlertDialog.Description className="mt-4 mb-5 leading-6 text-gray-500">
            Are you sure you want to delete this {resource} permanently? This
            action cannot be undone.
          </AlertDialog.Description>
          <div className="flex justify-end gap-6">
            <AlertDialog.Cancel asChild>
              <Button variant="light" color="gray" size="xs">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <Button
              color="red"
              variant="secondary"
              size="xs"
              onClick={onConfirm}
              loading={isLoading}
            >
              Yes, delete <span className="capitalize">{resource}</span>
            </Button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default ConfirmDelete;
