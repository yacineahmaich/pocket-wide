import supabase from './supabase';

export const updateProfile = async ({
  profile,
  userId,
}: {
  profile: File;
  userId: string;
}) => {
  const path = `profiles/${userId}/${Date.now().toString()}`;

  const { data, error } = await supabase.storage
    .from('pocket-wide')
    .upload(path, profile, {
      cacheControl: '0',
      upsert: true,
    });

  if (error) {
    throw new Error(error.message);
  }

  const profilePath = `https://qejcuwpiemsoqnxawnbh.supabase.co/storage/v1/object/public/pocket-wide/${
    data.path
  }?version=${Date.now().toString()}`;

  console.log(profilePath);

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.updateUser({
    data: {
      avatar_url: profilePath,
    },
  });

  if (userError) throw new Error(userError.message);

  return user;
};
