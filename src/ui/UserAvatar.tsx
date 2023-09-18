import * as Avatar from '@radix-ui/react-avatar';
import { useUser } from '../features/auth/useUser';

type Props = {
  size?: number;
};

function UserAvatar({ size = 45 }: Props) {
  const { user } = useUser();

  return (
    <Avatar.Root
      className="
    inline-flex select-none items-center justify-center overflow-hidden rounded-full bg-black/20 align-middle
    "
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={user?.user_metadata.avatar_url}
        alt="Colm Tuite"
      />
      <Avatar.Fallback className="h-full w-full bg-gray-50" delayMs={600}>
        <img
          src={`https://ui-avatars.com/api/?background=fff&color=#000&name=${
            user?.user_metadata.name ||
            user?.user_metadata.full_name ||
            user?.user_metadata.user_name ||
            user?.email?.split('@')?.at(0)
          }`}
          className="h-full w-full"
        />
      </Avatar.Fallback>
    </Avatar.Root>
  );
}

export default UserAvatar;
