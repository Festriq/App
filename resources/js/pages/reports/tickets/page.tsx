import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

export default function TicketsReportPage() {
    const pageTitle = 'Tickets Report';
    const breadcrumb = [{ title: 'Tickets Report', route: 'tickets.index' }];

    return (
        <AuthenticatedLayout title={pageTitle} breadcrumb={breadcrumb}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0"></div>
        </AuthenticatedLayout>
    );
}
