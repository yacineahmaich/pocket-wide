import { Button, Text, TextInput } from "@tremor/react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { signupSchema } from "../utils/validation/auth";
import { yupResolver } from "@hookform/resolvers/yup";

type SignupFields = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignupFields>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignupFields> = (data) => console.log(data);

  return (
    <>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1">
          <Text>Email Address</Text>
          <TextInput
            {...register("email")}
            error={!!errors.email}
            errorMessage={errors.email?.message}
            placeholder="Your email"
          />
        </div>
        <div className="space-y-1">
          <Text>Passworrd</Text>
          <TextInput
            {...register("password")}
            error={!!errors.password}
            errorMessage={errors.password?.message}
            type="password"
            placeholder="Your Password"
          />
        </div>
        <div className="space-y-1">
          <Text>Confirm Password</Text>
          <TextInput
            {...register("passwordConfirmation")}
            error={!!errors.passwordConfirmation}
            errorMessage={errors.passwordConfirmation?.message}
            type="password"
            placeholder="Confirm Your Password"
          />
        </div>
        <Button size="md" className="w-full">
          Signup
        </Button>
      </form>
      <Text className="inline-block mt-3">You already have an account?</Text>
      <Link to="/login" className="ml-1 text-sm font-medium">
        Login
      </Link>
    </>
  );
}

export default Signup;
