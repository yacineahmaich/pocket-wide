import * as Avatar from '@radix-ui/react-avatar';
import { useUser } from '../features/auth/useUser';
import userAlt from '../assets/user-alt.jpg';

type Props = {
  size?: number;
};

function UserAvatar({ size = 45 }: Props) {
  const { user } = useUser();

  return (
    <Avatar.Root
      className={`
    bg-black/20 inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle
    ${`w-[${size}px] h-[${size}px]`}
    `}
    >
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={user?.user_metadata.avatar_url}
        alt="Colm Tuite"
      />
      <Avatar.Fallback className="h-full w-full bg-gray-50" delayMs={600}>
        <img src={userAlt} className="w-full h-full" />
      </Avatar.Fallback>
    </Avatar.Root>
  );
}

export default UserAvatar;
