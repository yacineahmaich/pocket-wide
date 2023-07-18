import * as Avatar from '@radix-ui/react-avatar';
import { useUser } from '../features/auth/useUser';

type Props = {
  small?: boolean;
};

function UserAvatar({ small }: Props) {
  const { user } = useUser();

  return (
    <Avatar.Root
      className={`
    bg-black/20 inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle
    ${small ? 'h-[35px] w-[35px]' : 'h-[45px] w-[45px]'}
    `}
    >
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={user?.user_metadata.avatar_url}
        alt="Colm Tuite"
      />
      <Avatar.Fallback
        className="text-gray-400 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        {user?.user_metadata.username ?? user?.user_metadata.full_name}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}

export default UserAvatar;
