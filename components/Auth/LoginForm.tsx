import { CardWrapper } from "@/components/Auth/CardWrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      LoginForm!
    </CardWrapper>
  );
};
