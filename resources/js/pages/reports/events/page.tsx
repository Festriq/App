import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

export default function EventsReportPage() {
    const pageTitle = 'Events Report';
    const breadcrumb = [{ title: 'Events Report', route: 'events.index' }];

    return (
        <AuthenticatedLayout title={pageTitle} breadcrumb={breadcrumb}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0"></div>
        </AuthenticatedLayout>
    );
}
