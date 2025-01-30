import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

export default function TicketsPage() {
    const pageTitle = 'Tickets';
    const breadcrumb = [{ title: 'Tickets', route: 'tickets.index' }];

    return (
        <AuthenticatedLayout title={pageTitle} breadcrumb={breadcrumb}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0"></div>
        </AuthenticatedLayout>
    );
}
