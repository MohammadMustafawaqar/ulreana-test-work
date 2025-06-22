import Image from 'next/image'
import { LoginForm } from '@/components/LoginForm'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login'
};

export default function page() {


  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 bg-neutral-900 text-white items-center justify-center">
        <Image
          src="/login.png"
          alt="Login Illustration"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      <LoginForm />
    </div>
  )
}
