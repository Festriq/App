import GuestLayout from '@/Layouts/GuestLayout';
import { LoginForm } from '@/Components/auth/login-form';
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
