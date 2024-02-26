import { Metadata } from "next";
import Login from './loginform';

export const metadata: Metadata = {
  title: 'Login',
};
export default function LoginPage() {
  return (
    <Login />
  );
}