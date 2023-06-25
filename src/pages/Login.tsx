import { Button, Text, TextInput } from "@tremor/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/validation/auth";

type LoginFields = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFields> = (data) => console.log(data);

  return (
    <>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1">
          <Text>Email Address</Text>
          <TextInput
            {...register("email", { required: "email is required" })}
            placeholder="Your email"
            error={!!errors.email}
            errorMessage={errors.email?.message}
          />
        </div>
        <div className="space-y-1">
          <Text>Passworrd</Text>
          <TextInput
            {...register("password")}
            type="password"
            placeholder="Your Password"
            error={!!errors.password}
            errorMessage={errors.password?.message}
          />
        </div>
        <Button size="md" className="w-full">
          Login
        </Button>
      </form>
      <Text className="inline-block mt-3">You don't have an account yet?</Text>
      <Link to="/signup" className="ml-1 text-sm font-medium">
        Signup
      </Link>
    </>
  );
}

export default Login;
