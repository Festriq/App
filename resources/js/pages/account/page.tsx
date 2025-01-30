import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

export default function AccountPage() {
    const pageTitle = 'Account';
    const breadcrumb = [{ title: 'Account', route: 'account.index' }];

    return (
        <AuthenticatedLayout title={pageTitle} breadcrumb={breadcrumb}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0"></div>
        </AuthenticatedLayout>
    );
}
