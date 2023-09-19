import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

function Dropdown({ children }: { children: React.ReactNode }) {
  return <DropdownMenu.Root modal={false}>{children}</DropdownMenu.Root>;
}

function Trigger({ children }: { children: React.ReactNode }) {
  return <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>;
}

function Menu({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        sideOffset={5}
        className={
          'z-10 mt-0.5 min-w-[200px] rounded-xl border border-gray-100 bg-white p-1 shadow-lg animate-in data-[state=open]:slide-in-from-top-1'
        }
      >
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu.Item className="w-full rounded-lg outline-none data-[highlighted]:bg-gray-100">
      {children}
    </DropdownMenu.Item>
  );
}

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
export default Dropdown;
