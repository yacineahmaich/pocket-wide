interface Login {
  email: string;
  password: string;
}

interface Signup {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface UpdatePassword {
  newPassword: string;
  newPasswordConfirmation: string;
}
