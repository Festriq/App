import { RegisterForm } from '@/components/auth/register-form';
import GuestLayout from '@/layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Register() {
    return (
        <GuestLayout>
            <Head title="Sign up" />

            <RegisterForm />
        </GuestLayout>
    );
}
