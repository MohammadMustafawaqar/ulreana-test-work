'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { Spinner } from '@/components/ui/spinner';

interface LoginFormInputs {
    email: string;
    password: string;
}

export function LoginForm() {
    const { register, handleSubmit } = useForm<LoginFormInputs>();
    const router = useRouter();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const onSubmit = async (data: LoginFormInputs) => {
        setIsLoading(true)
        setError('')

        axios.post('/api/login', {
            username: data.email,
            password: data.password,
        }).then(() => {
            setIsLoading(false)
            router.push('/admin/')
        }).catch((error) => {
            setIsLoading(false)
            throw new Error(error.message || 'Login failed')
        });
    }



    return (
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white dark:bg-neutral-950 p-6">
            <Card className="w-full max-w-md shadow-xl p-8 space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
                    <p className="text-sm text-muted-foreground text-center">
                        Sign in to your account
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="text"
                            placeholder="you@example.com"
                            {...register('email', { required: true })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            {...register('password', { required: true })}
                        />
                    </div>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? <Spinner /> : 'Sign In'}
                    </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground">
                    Don’t have an account?{' '}
                    <Link href="/" className="text-primary hover:underline">
                        Sign up
                    </Link>
                </p>
            </Card>
        </div>
    );
}
