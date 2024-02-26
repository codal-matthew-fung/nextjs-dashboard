

import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
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