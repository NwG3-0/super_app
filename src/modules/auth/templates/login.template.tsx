"use client";

import useLoginController from "../controllers/useLoginController";

const LoginTemplate = () => {
  const { loginForm, handleSubmit: handleLogin } = useLoginController();
  const { register, handleSubmit } = loginForm;

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input {...register("username")} type="text" placeholder="Username" />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginTemplate;
