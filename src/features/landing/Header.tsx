import { Button } from '@tremor/react';
import Logo from '../../ui/Logo';

function Header() {
  return (
    <header className="flex items-center justify-between p-6">
      <Logo className='h-8' />
      <div className="flex items-center gap-2">
        <Button size="xs" variant="light" color='gray' className='px-10'>
          Log In
        </Button>
        <Button size="xs" variant='secondary' className='px-10' color='gray'>Sign Up</Button>
      </div>
    </header>
  );
}

export default Header;