import { LoginForm } from '@/components/auth/login-form';
import GuestLayout from '@/layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Login({
    status,
    // canResetPassword,
}: {
    status?: string;
    // canResetPassword: boolean;
}) {
    return (
        <GuestLayout>
            <Head title="Log in" />
            {/* <LoginForm status={status} canResetPassword={canResetPassword} /> */}
            <LoginForm status={status} />
        </GuestLayout>
    );
}
