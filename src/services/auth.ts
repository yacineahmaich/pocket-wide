import supabase from '../lib/supabase';

export const login = async ({ email, password }: Login) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
};

export const signup = async ({ email, password, username }: Signup) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        currency: 'USD',
      },
    },
  });

  if (error) throw new Error(error.message);

  console.log(data);

  return data;
};

export const getUser = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data.user;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
};

export const signinWithGoogle = () => {
  supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: import.meta.env.VITE_SUPABASE_OAUTH_REDIRECT,
    },
  });
};
export const signinWithGithub = () => {
  supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: import.meta.env.VITE_SUPABASE_OAUTH_REDIRECT,
    },
  });
};
